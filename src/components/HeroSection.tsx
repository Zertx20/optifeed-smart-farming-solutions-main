import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="OptiFeed Agriculture" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="inline-block gradient-gold px-4 py-1.5 rounded-full text-primary text-sm font-bold mb-6"
        >
            منصة الزراعة الذكية الأولى
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          whileInView={{ scale: [1, 1.05, 1] }}
          viewport={{ once: true }}
          className="font-arabic-heading font-black text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-tight mb-6"
        >
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="inline-block overflow-hidden"
          >
            <span className="text-gradient-gold font-black">OptiFeed</span>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            نُحوّل الفلاحة إلى
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
            className="text-white font-black"
          >
            صناعة ذكية
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-arabic-body"
        >
          OptiFeed — المنصة المتكاملة لإنتاج الأعلاف، المتابعة التقنية، والرقمنة الزراعية.
          من الحقل إلى السوق، بيانات تقود القرار.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#business"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-gold px-8 py-3 rounded-full text-primary font-bold shadow-gold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              →
            </motion.span>
            ابدأ الآن
          </motion.a>
          <a
            href="#operations"
            className="border-2 border-primary-foreground/30 px-8 py-3.5 rounded-xl text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            كيف تعمل؟
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-primary-foreground/60" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
