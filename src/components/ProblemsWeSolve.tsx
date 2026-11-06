import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PAIN_POINTS = [
  "Every week I lose hours building the same reports by hand.",
  "My numbers are spread across spreadsheets and apps, and I don't fully trust them.",
  "My team does the same repetitive tasks every single day.",
  "I only find out about problems after they've already cost me money.",
  "Our software doesn't talk to each other, so we copy and paste between tools.",
  "I know AI could help my business, but I don't know where to start.",
];

export default function ProblemsWeSolve() {
  return (
    <section id="problems" className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sound familiar?"
            title={
              <>
                If any of this is your week,{" "}
                <span style={{ color: "#10b981" }}>we can fix it</span>
              </>
            }
            align="left"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {/* Shared SVG filters for glow */}
            <svg className="absolute h-0 w-0" aria-hidden="true">
              <defs>
                <filter id="glow-blue">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow-orange">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {PAIN_POINTS.map((text, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-5"
                style={{
                  background: "linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)",
                  border: "1px solid rgba(36, 184, 255, 0.2)",
                }}
              >
                {/* Triangle glow path overlay */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  overflow="visible"
                  aria-hidden="true"
                >
                  {/* Triangle path: top-center → bottom-left → bottom-right → close */}
                  <path
                    d="M 200 5 L 5 95 L 395 95 Z"
                    fill="none"
                    stroke="rgba(36,184,255,0.08)"
                    strokeWidth="1"
                  />

                  {/* Blue glow dot */}
                  <circle
                    r="3"
                    fill="#24B8FF"
                    opacity="0.9"
                    filter="url(#glow-blue)"
                  >
                    <animateMotion
                      path="M 200 5 L 5 95 L 395 95 Z"
                      dur={`${4 + i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Orange glow dot */}
                  <circle
                    r="2.5"
                    fill="#f97316"
                    opacity="0.85"
                    filter="url(#glow-orange)"
                  >
                    <animateMotion
                      path="M 200 5 L 5 95 L 395 95 Z"
                      dur={`${4 + i * 0.5}s`}
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </circle>
                </svg>

                {/* Top accent line */}
                <div
                  className="absolute left-0 top-0 h-[2px] w-full"
                  style={{
                    background: "linear-gradient(90deg, #24B8FF, #8B5CF6)",
                    opacity: 0.4,
                  }}
                />

                <p
                  className="relative z-10 text-sm leading-relaxed sm:text-base"
                  style={{ color: "#E8EEF8" }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-6 text-center sm:mt-8">
            <p className="mb-5 mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              You don&apos;t need to know the technical answer. Tell us the problem,
              and we&apos;ll work out the solution and build it.
            </p>
            <a
              href="#contact"
              className="sparkle-btn inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(9,179,228,0.45)]"
              style={{ backgroundColor: "#09b3e4", color: "#0a1628" }}
            >
              Describe your problem
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
