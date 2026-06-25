import Baner from "@/component/Baner";
import FeaturesSection from "@/component/Features";
import FAQSection from "@/component/FQA";
import HeroSection from "@/component/Herosection";
import Review from "@/component/Review";
import StatsSection from "@/component/StatsSection";



export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100/60">
      <HeroSection />
      {/* <ThemeSwitch /> */}
      <Baner />
      <Review />
      <StatsSection />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
}
