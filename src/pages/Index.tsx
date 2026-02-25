import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OrgStructure from "@/components/OrgStructure";
import BioPixelVision2035 from "@/components/BioPixelVision2035";
import OperationalFlow from "@/components/OperationalFlow";
import BusinessModel from "@/components/BusinessModel";
import Footer from "@/components/Footer";
import SectionBanner from "@/components/SectionBanner";
import sectionOrgBg from "@/assets/section-org.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Title Section with Picture Background */}
      <SectionBanner
        bgImage={sectionOrgBg}
        badge="الهيكل التنظيمي"
        title="الهيكل التنظيمي الرسمي"
        highlight="لمنصة OptiFeed"
        subtitle="بنية تنظيمية متكاملة تجمع بين الإدارة المركزية والتقنية والإنتاج، مع التركيز على التحول الرقمي والاستدامة الزراعية"
      />

      <OrgStructure />
      <BioPixelVision2035 />
      <OperationalFlow />
      <BusinessModel />
      <Footer />
    </div>
  );
};

export default Index;
