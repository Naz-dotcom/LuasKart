import { Trophy, Medal, Award, Star, Leaf } from "lucide-react";

const nationalKartingHonors = [
  {
    icon: Award,
    title: "Best Design Presentation",
    description: "Recognized for outstanding design presentation at Go Kart Design Challenge (GKDC) 2018 and Bajaj Formula Kart Championship Trophy (BFKCT) 2018",
    year: "2018",
    highlight: false,
  },
  {
    icon: Trophy,
    title: "10th Overall Champions",
    description: "Secured 10th position in the inaugural season of Indian Karting Racing Championship (IKRC Season 1)",
    year: "2019",
    highlight: false,
  },
  {
    icon: Medal,
    title: "6th Overall Champions",
    description: "Achieved 6th position overall in Indian Karting Racing Championship Season 2, demonstrating consistent performance improvement",
    year: "2020",
    highlight: true,
  },
  {
    icon: Star,
    title: "7th Overall Champions",
    description: "Secured 7th position in Electric Go-kart Championship (EGC) 2020 conducted in virtual format during the pandemic",
    year: "2020",
    highlight: false,
  },
];

const buildSustainabilityAwards = [
  {
    icon: Trophy,
    title: "Best Build Quality Award",
    description: "Awarded for exceptional build quality and craftsmanship in AIMS Season 4, recognizing superior manufacturing standards",
    year: "2024",
    highlight: true,
  },
  {
    icon: Leaf,
    title: "Go-Green Award (CV Category)",
    description: "Honored with the Go-Green Award in Conventional Vehicle category at AIMS Season 4 for sustainable design practices",
    year: "2024",
    highlight: false,
  },
  {
    icon: Medal,
    title: "Overall Runner-Up",
    description: "Achieved second position overall in Go Kart Design (GKD) 2025, showcasing comprehensive excellence across all evaluation criteria",
    year: "2025",
    highlight: true,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Our Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            RACING <span className="text-gradient">EXCELLENCE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of victories built on innovation, teamwork, and an unwavering commitment to racing excellence.
          </p>
        </div>

        {/* National Karting Honors Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-primary" />
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              National Karting Honors <span className="text-muted-foreground text-lg">(2018-2020)</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {nationalKartingHonors.map((achievement, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                  achievement.highlight
                    ? "bg-speed-gradient border-transparent"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {/* Year Badge */}
                <div className={`absolute top-4 right-4 text-sm font-medium ${
                  achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {achievement.year}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  achievement.highlight ? "bg-primary-foreground/20" : "bg-primary/20"
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.highlight ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>

                {/* Content */}
                <h4 className={`font-display text-xl mb-3 ${
                  achievement.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm leading-relaxed ${
                  achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {achievement.description}
                </p>

                {/* Glow Effect on Hover */}
                {!achievement.highlight && (
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Build & Sustainability Awards Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Leaf className="w-8 h-8 text-accent" />
            <h3 className="font-display text-2xl md:text-3xl text-foreground">
              Build & Sustainability Awards <span className="text-muted-foreground text-lg">(2024-2025)</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildSustainabilityAwards.map((achievement, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                  achievement.highlight
                    ? "bg-speed-gradient border-transparent"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {/* Year Badge */}
                <div className={`absolute top-4 right-4 text-sm font-medium ${
                  achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {achievement.year}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  achievement.highlight ? "bg-primary-foreground/20" : "bg-primary/20"
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.highlight ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>

                {/* Content */}
                <h4 className={`font-display text-xl mb-3 ${
                  achievement.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm leading-relaxed ${
                  achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {achievement.description}
                </p>

                {/* Glow Effect on Hover */}
                {!achievement.highlight && (
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
