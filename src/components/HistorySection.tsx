import { Building, TestTube, Zap, Settings, Rocket } from "lucide-react";

const timelineEvents = [
  {
    year: "2018–2020",
    title: "Foundation & CV Development",
    description: "LuasKart Industries Pvt. Ltd. founded for reliable commercial go-karts. Robust CV platforms developed with strong chassis, safety & easy maintenance.",
    icon: Building,
  },
  {
    year: "2021",
    title: "Prototype Testing & Validation",
    description: "Full-scale testing validates durability, braking & weight distribution. Feedback shapes final CV chassis for continuous fleet operations.",
    icon: TestTube,
  },
  {
    year: "2022",
    title: "Entry into Electric Go-Karts (EV)",
    description: "EV platforms introduced with energy efficiency focus. Battery safety & modular architecture designed for fleet deployment.",
    icon: Zap,
  },
  {
    year: "2023–2024",
    title: "EV Optimization & Fleet Design",
    description: "EV powertrain, BMS refined for high-uptime operations. Fleet-ready designs feature detachable panels & corporate customization options.",
    icon: Settings,
  },
  {
    year: "2025",
    title: "Commercial Fleet Launch",
    description: "Scalable CV + EV solutions launched for bulk corporate orders. Positioned as dedicated fleet manufacturing partner for track operators.",
    icon: Rocket,
  },
];

export function HistorySection() {
  return (
    <section id="history" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Company Evolution
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            FROM CONCEPT TO <span className="text-gradient">COMMERCIAL</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our journey from concept development to launching commercial go-kart solutions, building the foundation for reliable CV and EV mobility platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-8 mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <span className="inline-block font-display text-4xl text-primary mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-14 h-14 bg-background border-2 border-primary rounded-full flex items-center justify-center glow-primary">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Empty Space for Alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-2xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to design safe, durable, and performance-driven go-karts that meet the demands of commercial and recreational use. We focus on delivering reliable products engineered for low maintenance and long operational life, while supporting our customers through flexible customization options and dependable after-sales service.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-speed-gradient rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
            <h3 className="font-display text-2xl text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              To become a trusted manufacturer of high-quality CV and EV go-karts for commercial and recreational applications through innovation, safety, and reliable engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
