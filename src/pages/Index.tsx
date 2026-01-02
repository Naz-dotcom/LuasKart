import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { SubsystemsSection } from "@/components/SubsystemsSection";
import { HistorySection } from "@/components/HistorySection";
import { TeamSection } from "@/components/TeamSection";
import { FabricationSection } from "@/components/FabricationSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Glowing Orbs */}
        <div className="absolute inset-0">
          {/* Primary Glow */}
          <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-glow opacity-40" 
               style={{ animationDelay: '0s', animationDuration: '6s' }} />
          
          {/* Accent Glow */}
          <div className="absolute top-2/3 right-1/5 w-32 h-32 bg-accent/25 rounded-full blur-2xl animate-pulse-glow opacity-30" 
               style={{ animationDelay: '2s', animationDuration: '5s' }} />
          
          {/* Moving Glow 1 */}
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float-horizontal opacity-25" />
          
          {/* Moving Glow 2 */}
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-float-vertical opacity-30" />
          
          {/* Additional Floating Orbs */}
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float-vertical opacity-20" 
               style={{ animationDelay: '3s', animationDuration: '7s' }} />
          
          <div className="absolute top-1/5 right-1/6 w-16 h-16 bg-accent/15 rounded-full blur-lg animate-float-horizontal opacity-25" 
               style={{ animationDelay: '4s', animationDuration: '4s' }} />
          
          {/* Speed Lines */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-speed-line"
                style={{
                  top: `${20 + i * 20}%`,
                  left: 0,
                  right: 0,
                  animationDelay: `${i * 2}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SubsystemsSection />
        <AchievementsSection />
        <FabricationSection />
        <VehiclesSection />
        <HistorySection />
        <TeamSection />
      </main>
      <Footer className="relative z-10" />
    </div>
  );
};

export default Index;
