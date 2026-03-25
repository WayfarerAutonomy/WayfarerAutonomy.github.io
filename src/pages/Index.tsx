import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import BusinessSection from "@/components/BusinessSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <BusinessSection />
      <TeamSection />
      <ContactSection />
      <footer className="border-t border-border py-6 px-4 md:px-8 lg:px-12">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          © 2026 Wayfarer Autonomy
        </p>
      </footer>
    </main>
  );
};

export default Index;
