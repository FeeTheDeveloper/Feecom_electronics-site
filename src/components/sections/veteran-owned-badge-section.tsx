import Image from "next/image";
import Container from "@/components/Container";

interface VeteranOwnedBadgeSectionProps {
  className?: string;
}

export default function VeteranOwnedBadgeSection({
  className = "",
}: VeteranOwnedBadgeSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-white/[0.02] px-4 py-20 ${className}`}
    >
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-neonPurple/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-neonPink/30 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-10 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-neonPurple/10 md:grid-cols-[1.05fr_0.95fr] md:p-8 lg:p-10">
          <div className="text-center md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Texas Veterans Commission Verified
            </p>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Verified Veteran-Owned Business
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Feecom Electronics &amp; Exchange LLC is proudly verified by the
              Texas Veterans Commission as a Veteran-Owned Business. We bring
              disciplined operations, secure transactions, and accountable
              service to mobile device and electronics exchange.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Veteran-Owned
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Secure Transactions
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Electronics Exchange
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-bg/70 p-4 shadow-lg shadow-neonPink/10">
              <Image
                src="/images/vep-vob-logo.png"
                alt="Veteran-Owned Business badge verified by the Texas Veterans Commission"
                width={1124}
                height={1276}
                className="h-auto w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
