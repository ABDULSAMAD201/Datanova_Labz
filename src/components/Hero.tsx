import { ArrowRight } from "lucide-react";
import { btnPrimary, btnSecondary } from "./ui";

const CAPABILITIES = [
  "Custom software",
  "Connected systems",
  "AI assistants",
  "Smart dashboards",
];

function CapabilityCard({ label, index }: { label: string; index: number }) {
  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl p-[1.5px]" style={{
      background: "linear-gradient(135deg, #24B8FF 0%, #7C3AED 45%, #f97316 100%)",
    }}>
      {/* Inner dark fill */}
      <div className="absolute inset-[1.5px] rounded-2xl" style={{
        background: "linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)",
      }} />
      {/* Shine / gloss overlay */}
      <div className="absolute inset-0 rounded-2xl" style={{
        background: "linear-gradient(165deg, rgba(36,184,255,0.08) 0%, transparent 40%, rgba(124,58,237,0.05) 70%, transparent 100%)",
      }} />
      {/* SVG glow overlay */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
        <defs>
          <filter id={`hero-glow-${index}`}>
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Blue dot */}
        <circle r="3" fill="#24B8FF" opacity="0.95" filter={`url(#hero-glow-${index})`}>
          <animateMotion path="M 100 6 L 6 194 L 194 194 Z" dur={`${4 + index * 0.5}s`} repeatCount="indefinite" />
        </circle>
        {/* Orange dot */}
        <circle r="2.5" fill="#f97316" opacity="0.9" filter={`url(#hero-glow-${index})`}>
          <animateMotion path="M 100 6 L 6 194 L 194 194 Z" dur={`${4 + index * 0.5}s`} repeatCount="indefinite" begin="2s" />
        </circle>
      </svg>
      <p className="relative z-10 text-center text-sm font-medium sm:text-base" style={{ color: "#D1D9E8", fontFamily: "var(--font-gambetta)" }}>
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.png)", opacity: 0.18 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 md:pt-40 lg:px-8">
        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          {/* ── LEFT: Editorial text ── */}
          <div className="flex flex-col text-left">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
              style={{ color: "#24B8FF", fontFamily: "var(--font-gambetta)" }}
            >
              Software Development, Automation and AI Systems
            </p>
            <h1
              className="max-w-[540px] text-[1.75rem] leading-[1.1] tracking-tight text-frost sm:text-4xl md:text-5xl lg:text-[3.35rem]"
              style={{ fontFamily: "var(--font-tanker)" }}
            >
              Turn your busywork into{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #38bdf8 0%, #f97316 50%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                software that runs itself.
              </span>
            </h1>

            <p
              className="mt-6 max-w-lg text-sm leading-relaxed sm:text-base md:text-lg"
              style={{ color: "#B0B8C8", fontFamily: "var(--font-gambetta)" }}
            >
              DataNova Labz designs and builds the software systems, integrations and AI tools that
              connect your software, automate repetitive work and grow with your business. Need
              clear reporting on top? We build the dashboards too.
            </p>



            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className={`${btnPrimary} inline-flex min-w-[200px] justify-center`}
              >
                Tell us your problem
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#projects"
                className={`${btnSecondary} inline-flex min-w-[200px] justify-center`}
              >
                See what we&apos;ve built
              </a>
            </div>

          </div>

          {/* ── Capability cards (2×2 grid) ── */}
          <div className="mx-auto w-full max-w-[340px] lg:ml-auto lg:mr-0 lg:max-w-[380px]">
            <div className="grid grid-cols-2 gap-3">
              {CAPABILITIES.map((item, i) => (
                <CapabilityCard key={item} label={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
