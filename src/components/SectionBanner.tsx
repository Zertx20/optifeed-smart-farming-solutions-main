import { motion } from "framer-motion";

interface SectionBannerProps {
  bgImage: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
}

const SectionBanner = ({ bgImage, badge, title, highlight, subtitle }: SectionBannerProps) => {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden flex items-center justify-center" dir="rtl">
      <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/80 via-primary/70 to-background" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground) / 0.05) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <span className="inline-block gradient-gold px-5 py-1.5 rounded-full text-primary-foreground text-sm font-bold mb-4 shadow-gold font-arabic-body">
          {badge}
        </span>
        <h2 className="font-arabic-heading font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 drop-shadow-lg">
          {title} <span className="text-gradient-gold">{highlight}</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto font-arabic-body">
          {subtitle}
        </p>
      </motion.div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default SectionBanner;
