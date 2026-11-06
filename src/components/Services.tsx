import { Database, BarChart3, Server, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Service {
  title: string;
  description: string;
  outcomes: string[];
}

const SERVICES: Service[] = [
  {
    title: "See your whole business on one screen",
    description:
      "We replace messy spreadsheets and weekly manual reports with live dashboards that update by themselves.",
    outcomes: [
      "Your key numbers on one screen, always current",
      "No more rebuilding the same report every week",
      "Clear charts your whole team can read without training",
      "Faster, better-informed decisions",
    ],
  },
  {
    title: "Get all your data in one trusted place",
    description:
      "We collect data from your different tools and files, clean it, and keep it up to date automatically.",
    outcomes: [
      "No more manual exports and copy-pasting",
      "One reliable version of the truth",
      "Data refreshed on a schedule, without anyone remembering to do it",
      "Problem records flagged instead of silently breaking your reports",
    ],
  },
  {
    title: "Make your software work together",
    description:
      "We connect the tools you already use and build custom software where off-the-shelf options fall short.",
    outcomes: [
      "Information flows between your systems by itself",
      "Custom tools built around how you actually work",
      "Systems that keep working as your business grows",
      "Less double entry, fewer mistakes",
    ],
  },
  {
    title: "Let AI handle the repetitive work",
    description:
      "We build practical AI assistants and automations for specific jobs, such as answering questions from your documents or handling routine tasks.",
    outcomes: [
      "Hours of repetitive work taken off your team",
      "AI tools trained on your own information",
      "Workflows that run on their own, day and night",
      "A realistic plan, not hype: we only suggest AI where it pays off",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={<>Four ways we give you your time and <span style={{ color: '#facc15' }}>clarity back</span></>}
            description="Tell us which of these sounds like your problem. Most clients start with one and add more later."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:gap-6 sm:mt-14 grid-cols-1 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="h-full">
              <div
                className="group relative h-full overflow-hidden rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                style={{
                  background: "linear-gradient(135deg, #24B8FF 0%, #7C3AED 50%, #FF8A2A 100%)",
                  boxShadow: "0 0 20px rgba(36,184,255,0.12), 0 0 40px rgba(124,58,237,0.06)",
                }}
              >
              <div
                className="flex h-full flex-col overflow-hidden rounded-[14px] px-4 py-4 sm:px-6 sm:py-6"
                style={{ background: "linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)" }}
              >
                <div className="relative z-10">
                  <h3
                    style={{
                      fontSize: "clamp(17px, 2vw, 20px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#E8EEF8",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: "clamp(14px, 1.5vw, 15px)",
                      lineHeight: 1.55,
                      color: "#B8C3D6",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10" style={{ marginTop: 20 }}>
                  <p
                    style={{
                      marginBottom: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "#24B8FF",
                    }}
                  >
                    What you get
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: "#D1D9E8",
                        }}
                      >
                        <span
                          style={{
                            marginTop: 6,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#FF8A2A",
                            flexShrink: 0,
                          }}
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-8 text-center sm:mt-10">
            <a
              href="#contact"
              className="sparkle-btn inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(9,179,228,0.45)]"
              style={{ backgroundColor: "#09b3e4", color: "#0a1628" }}
            >
              Not sure which one you need? Tell us the problem.
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
