import CertificateCanvas from "./CertificateCanvas";

type CertificatePageProps = {
  params: Promise<{ id: string }>;
};

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { id } = await params;
  const validId = "b244b6a0-739a-4a5e-b4e0-d6c2b5526697";
  const isValidCertificate = id === validId;

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-ebony text-white"
      style={{
        backgroundImage: "url('/hero-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-slate-950/80 to-black/95 backdrop-blur-sm" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-intl-orange">
            Official Digital Certificate
          </p>
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Builder Track Credential
          </h1>
          <p className="text-sm text-slate-200 sm:text-base">
            This digital credential verifies successful completion of the DOGM.AI E-Commerce Builder
            Track. Share the link below so hiring teams can confirm authenticity.
          </p>
        </header>

        {isValidCertificate ? (
          <>
            <CertificateCanvas certificateId={id} />

            <section className="rounded-3xl border border-white/10 bg-black/50 p-6 text-sm text-slate-200 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
              <p>
                Need a custom certificate lookup or have questions about verification? Email{" "}
                <a href="mailto:hello@dogm.ai" className="text-intl-orange hover:underline">
                  hello@dogm.ai
                </a>{" "}
                with the certificate ID <span className="font-semibold text-white">{id}</span> and our
                team will respond within one business day.
              </p>
            </section>
          </>
        ) : (
          <section className="rounded-3xl border border-white/10 bg-black/50 p-8 text-center text-sm text-slate-200 shadow-[0_25px_65px_rgba(0,0,0,0.45)]">
            <h2 className="text-2xl font-semibold text-white">Certificate Not Available</h2>
            <p className="mt-3">
              We could not find a certificate with ID{" "}
              <span className="font-semibold text-white">{id}</span>. Double-check the link or email{" "}
              <a href="mailto:hello@dogm.ai" className="text-intl-orange hover:underline">
                hello@dogm.ai
              </a>{" "}
              so our team can assist you.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
