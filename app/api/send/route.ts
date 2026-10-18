import { NextResponse, type NextRequest } from "next/server";
import { resend } from "@/lib/resend";

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

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  try {
    const response: any = await resend.emails.send({
      from: fromAddress,
      to: toAddresses,
      subject: "Contact Form",
      html: buildMessageHtml(name, email, message),
    });

    return NextResponse.json({ data: response.id }, { status: 200 });
  } catch (error) {
    console.error("Resend error", error);
    const message =
      (typeof error === "object" && error !== null && "message" in error && typeof (error as any).message === "string"
        ? (error as any).message
        : undefined) ?? "Unable to send the message right now.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
