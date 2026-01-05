import { Package, Wrench, Users, Truck, ChevronRight } from "lucide-react";
import fabricationImage from "@/assets/fabrication.jpg";

const phases = [
  {
    phase: "Phase 1",
    title: "Procurement",
    description: "Source chassis steel, powertrain, steering, brakes, HV/LV components.",
    icon: Package,
    color: "primary",
  },
  {
    phase: "Phase 2",
    title: "Production Stations",
    description: "Multi-station assembly process with specialized teams.",
    icon: Users,
    color: "accent",
    subStations: [
      "Station 1 (Chassis): Frame fabrication via precision cutting and MIG welding",
      "Station 2 (Steering): Steering and wheel assembly with alignment checks", 
      "Station 3 (Brakes): Pedal and line installation with hydraulic system bleeding",
      "Station 4 (Powertrain): Motor mounting and drivetrain alignment",
      "Station 5 (Electricals): Integration of HV battery and LV electronics",
      "Station 6 (Quality Control): Final safety inspection, torque checks, and road testing"
    ]
  },
  {
    phase: "Phase 3",
    title: "Batch Logistics", 
    description: "Test, package, ship batches efficiently.",
    icon: Truck,
    color: "primary",
  },
];

export function FabricationSection() {
  return (
    <section id="fabrication" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
            Manufacturing Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            PRODUCTION <span className="text-gradient">WORKFLOW</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach to manufacturing ensures quality, efficiency, and scalability in every go-kart we produce.
          </p>
        </div>

        {/* Manufacturing Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Process Timeline */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Phase Icon & Number */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 relative z-10 ${
                      phase.color === 'primary' ? 'bg-primary/20 border-2 border-primary/40' : 'bg-accent/20 border-2 border-accent/40'
                    }`}>
                      <phase.icon className={`w-8 h-8 ${
                        phase.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <span className={`font-display text-sm uppercase tracking-wider ${
                      phase.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`}>
                      {phase.phase}
                    </span>
                  </div>

                  {/* Phase Content */}
                  <div className="md:col-span-10">
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-2xl text-foreground">{phase.title}</h3>
                        <ChevronRight className="w-5 h-5 text-muted-foreground mt-1" />
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Sub-stations for Phase 3 */}
                      {phase.subStations && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
                          {phase.subStations.map((station, i) => (
                            <div key={i} className="bg-secondary/50 rounded-lg p-3 border border-border/50">
                              <span className="text-sm text-foreground font-medium">
                                {station}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
