import { Building2, Cog, Shield, Zap, Users, Award } from "lucide-react";
import fabricationImage from "@/assets/bg_about.jpeg";

const features = [
  {
    icon: Building2,
    title: "Commercial Focus",
    description: "Specialized in rental karting tracks, entertainment facilities, and training circuits",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Engineered with strong focus on safety, durability, and reliability",
  },
  {
    icon: Cog,
    title: "Easy Maintenance",
    description: "Designed for efficiency and ease of maintenance for continuous operations",
  },
  {
    icon: Zap,
    title: "CV & EV Solutions",
    description: "Both conventional and electric go-kart platforms for diverse applications",
  },
  {
    icon: Users,
    title: "Flexible Customization",
    description: "Scalable production capability with end-to-end customer support",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description: "Innovation and quality supporting India's motorsport ecosystem",
  },
];

export function SubsystemsSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-texture opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            TECHNOLOGY-DRIVEN <span className="text-gradient">MANUFACTURING</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              LuasKart Industries Pvt. Ltd. is a technology-driven manufacturer of CV and EV go-karts, 
              delivering reliable and performance-oriented mobility solutions for commercial and recreational applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in designing and manufacturing go-karts that meet the demands of rental karting tracks, 
              entertainment facilities, training circuits, and motorsport enthusiasts. Our products are engineered 
              with a strong focus on safety, durability, efficiency, and ease of maintenance.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At LuasKart Industries, we offer flexible customization options, scalable production capability, 
              and end-to-end support to meet diverse customer requirements. With a commitment to innovation and quality, 
              we aim to support the growing motorsport and electric mobility ecosystem in India.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={fabricationImage} 
                alt="LuasKart Manufacturing Process" 
                className="w-full h-[500px] object-contain transform -rotate-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-primary/20 blur-2xl -z-10 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-speed-gradient rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
