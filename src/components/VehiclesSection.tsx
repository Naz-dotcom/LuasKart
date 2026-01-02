import { Gauge, Weight, Zap, Timer, ChevronLeft, ChevronRight, Battery, Wrench } from "lucide-react";
import { useState } from "react";
import electricKartImage from "@/assets/vehicle-kart.jpg";
import cvKartImage from "@/assets/product_img.jpeg";

const vehicles = [
  {
    name: "Electric Go-Kart",
    subtitle: "Electric Vehicle",
    year: "2024",
    image: electricKartImage,
    status: "Available",
    specs: {
      topSpeed: "90 km/h",
      weight: "130 kg",
      power: "6 kW Axial Flux Motor",
      battery: "72V Split Battery",
    },
    features: ["Light Weight Kart", "72V Split Battery", "6 kW Axial Flux Motor", "CAN Display"],
  },
  {
    name: "Combustion Go-Kart",
    subtitle: "Conventional Vehicle (CV)",
    year: "2024",
    image: cvKartImage,
    status: "Available",
    specs: {
      topSpeed: "120 km/h",
      weight: "130 kg",
      power: "Low Maintenance",
      braking: "Hydraulic Disc Brake",
    },
    features: ["Low Maintenance", "Hydraulic Disc Brake", "Remote Kill Switch", "Durable Design"],
  },
];

export function VehiclesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVehicle = vehicles[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % vehicles.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);

  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-texture opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            GO-KART <span className="text-gradient">SOLUTIONS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Commercial-grade electric and conventional go-karts designed for reliability and performance.
          </p>
        </div>

        {/* Vehicle Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-speed-gradient rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={activeVehicle.image} 
              alt={activeVehicle.name} 
              className="relative rounded-xl w-full object-cover aspect-square border border-border"
            />
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
              <span className={`text-sm font-medium ${
                activeVehicle.status === "Active" ? "text-green-400" : 
                activeVehicle.status === "Reserve" ? "text-accent" : "text-muted-foreground"
              }`}>
                {activeVehicle.status}
              </span>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button 
                onClick={prev}
                className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={next}
                className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-display text-5xl md:text-6xl text-foreground">{activeVehicle.name}</span>
            </div>
            <p className="text-xl text-primary mb-6">{activeVehicle.subtitle}</p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-sm">Top Speed</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.topSpeed}</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Weight className="w-4 h-4" />
                  <span className="text-sm">Weight</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.weight}</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {activeVehicle.features.map((feature, i) => (
                  <span key={i} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/30">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Selector */}
        <div className="flex justify-center gap-4 mt-12">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-xl font-display text-lg transition-all ${
                index === activeIndex 
                  ? "bg-speed-gradient text-primary-foreground" 
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {vehicle.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
