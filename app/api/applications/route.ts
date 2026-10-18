import { NextResponse, type NextRequest } from "next/server";
import { supabase } from "@/lib/supabase-client";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildMessageHtml = (name: string, email: string, message: string) =>
  `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`;

const fromAddress = process.env.RESEND_FROM_EMAIL ?? "Acme <onboarding@resend.dev>";
const configuredRecipients =
  process.env.RESEND_TO_EMAIL?.split(",").map((value) => value.trim()).filter(Boolean) ?? [];
const toAddresses = configuredRecipients.length > 0 ? configuredRecipients : ["delivered@resend.dev"];

type ApplicationPayload = {
  fullName: string;
  email: string;
  phone: string | null;
  birthday: string | null;
  company: string | null;
  focus: string;
  trackInterest: string | null;
  experience: string | null;
  roleTitle: string | null;
  portfolioUrl: string | null;
  toolStack: string | null;
  availability: string | null;
  startWindow: string | null;
  motivation: string | null;
  metadata: Record<string, unknown>;
  formSnapshot: Record<string, unknown>;
};

const toTrimmedString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const toNullableString = (value: unknown) => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
};

const isPlainRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const parseApplicationPayload = (raw: unknown): ApplicationPayload | null => {
  if (!isPlainRecord(raw)) {
    return null;
  }

  const fullName = toTrimmedString(raw.fullName);
  const email = toTrimmedString(raw.email);
  const focus = toTrimmedString(raw.focus);

  if (!fullName || !email || !focus) {
    return null;
  }

  return {
    fullName,
    email,
    phone: toNullableString(raw.phone),
    birthday: toNullableString(raw.birthday),
    company: toNullableString(raw.company),
    focus,
    trackInterest: toNullableString(raw.trackInterest),
    experience: toNullableString(raw.experience),
    roleTitle: toNullableString(raw.roleTitle),
    portfolioUrl: toNullableString(raw.portfolioUrl),
    toolStack: toNullableString(raw.toolStack),
    availability: toNullableString(raw.availability),
    startWindow: toNullableString(raw.startWindow),
    motivation: toNullableString(raw.motivation),
    metadata: isPlainRecord(raw.metadata) ? raw.metadata : {},
    formSnapshot: isPlainRecord(raw.formSnapshot) ? raw.formSnapshot : {},
  };
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  if (isPlainRecord(error) && typeof error.message === "string") {
    return error.message;
  }

  return undefined;
};

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const application = parseApplicationPayload(payload.application);
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!application) {
    return NextResponse.json({ error: "Invalid application payload." }, { status: 400 });
  }

  const metadata: Record<string, unknown> = { ...application.metadata };
  const forwardedFor = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip");
  const requestIp = forwardedFor?.split(",").map((value) => value.trim()).find(Boolean) ?? null;
  const userAgentHeader = request.headers.get("user-agent");
  const refererHeader = request.headers.get("referer");

  if (requestIp) {
    metadata.requestIp = requestIp;
  }

  if (userAgentHeader && !metadata.userAgent) {
    metadata.userAgent = userAgentHeader;
  }

  if (refererHeader) {
    metadata.referer = refererHeader;
  }

  try {
    const { data, error: dbError } = await supabase
      .from("bootcamp_applications")
      .insert({
        full_name: application.fullName,
        email: application.email,
        phone: application.phone,
        birthday: application.birthday,
        company: application.company,
        focus: application.focus,
        track_interest: application.trackInterest,
        experience: application.experience,
        role_title: application.roleTitle,
        portfolio_url: application.portfolioUrl,
        tool_stack: application.toolStack,
        availability: application.availability,
        start_window: application.startWindow,
        motivation: application.motivation,
        metadata,
        form_snapshot: application.formSnapshot,
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("Supabase insert error", dbError);
      return NextResponse.json(
        { error: "Unable to submit your application right now." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { applicationId: data?.id ?? null },
      { status: 200 },
    );
  } catch (error) {
    console.error("Application submission error", error);
    const friendlyMessage = getErrorMessage(error) ?? "Unable to submit your application right now.";

    return NextResponse.json({ error: friendlyMessage }, { status: 500 });
  }
}
