import { motion } from "framer-motion";
import {
  Shield,
  Droplets,
  Heart,
  Flag,
  Satellite,
  Microscope,
  Users,
  TrendingUp,
  Target,
  Calendar,
  Award,
  Globe
} from "lucide-react";
import SectionBanner from "./SectionBanner";
import visionBg from "@/assets/vision-2035-bg.jpg";

const securityPillars = [
  {
    icon: Shield,
    title: "الأمن الغذائي الوطني",
    subtitle: "National Food Security",
    desc: "تطوير منظومة وطنية لإنتاج الأعلاف والحبوب والخضر والفواكه بالاعتماد على التكنولوجيا الذكية",
    results: [
      "زيادة الإنتاج الوطني بنسبة 50%",
      "تقليص الواردات الغذائية بنسبة 70%",
      "دعم سلاسل القيمة المحلية"
    ]
  },
  {
    icon: Droplets,
    title: "الأمن المائي الوطني",
    subtitle: "National Water Security",
    desc: "مراقبة الموارد المائية السطحية والجوفية عبر الأقمار الصناعية والاستشعار عن بعد",
    results: [
      "رفع كفاءة استخدام المياه إلى 85%",
      "تأمين الري الذكي لـ 1.5 مليون هكتار",
      "خفض استهلاك المياه بنسبة 30%"
    ]
  },
  {
    icon: Heart,
    title: "الأمن الصحي الزراعي",
    subtitle: "Agricultural Health Security",
    desc: "تطوير نظام وطني للمراقبة الرقمية لجودة المنتجات الزراعية",
    results: [
      "نظام مراقبة صحي وطني متكامل",
      "رفع معايير السلامة الغذائية",
      "تقليص الخسائر بنسبة 60%"
    ]
  },
  {
    icon: Flag,
    title: "الأمن الوطني والسيادة",
    subtitle: "National Sovereignty",
    desc: "ربط الأمن الغذائي والمائي والصحي بالأمن القومي الجزائري",
    results: [
      "استقلالية القرار الزراعي الوطني",
      "بناء منظومة سيادية في الغذاء والماء",
      "تعزيز الدور الجيو–اقتصادي للجزائر"
    ]
  }
];

const technicalPillars = [
  {
    icon: Satellite,
    title: "المنصة الوطنية BIOPIXEL AGRI-NET",
    desc: "نظام رقمي وطني لمراقبة المحاصيل والمياه والمراعي عبر الأقمار الصناعية"
  },
  {
    icon: Microscope,
    title: "مركز البحث الزراعي الذكي",
    desc: "جامعة البويرة – INRA: تطوير أصناف جديدة من الأعلاف والنباتات المقاومة للجفاف"
  },
  {
    icon: Users,
    title: "برنامج الأعلاف الذكية OPTIFEED–EMBRAPA",
    desc: "توطين التكنولوجيا البرازيلية في الزراعة الجزائرية"
  },
  {
    icon: Globe,
    title: "الشبكة الجامعية الوطنية",
    desc: "ربط الجامعات (البويرة، تيزي وزو، أدرار، ورقلة...) بمراكز البحث والفلاحين"
  }
];

const phases = [
  {
    icon: Calendar,
    title: "الإطلاق الوطني",
    period: "2025-2026",
    desc: "توقيع الاتفاقيات وإنشاء المنصة الوطنية"
  },
  {
    icon: Target,
    title: "التشغيل النموذجي",
    period: "2026-2027",
    desc: "التطبيق في ولايات البويرة، تيزي وزو، ورقلة، أدرار"
  },
  {
    icon: TrendingUp,
    title: "التوسيع الوطني",
    period: "2028-2030",
    desc: "تعميم النموذج في 20 ولاية"
  },
  {
    icon: Award,
    title: "السيادة الغذائية والمائية",
    period: "2031-2035",
    desc: "تحقيق الاكتفاء الذاتي الكامل"
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const BioPixelVision2035 = () => {
  return (
    <div className="space-y-0">
      {/* Banner Section */}
      <SectionBanner
        bgImage={visionBg}
        badge="الرؤية الوطنية"
        title="BIOPIXEL–OPTIFEEDdz"
        highlight="2035"
        subtitle="من أجل الأمن الغذائي والمائي والصحي والسيادة الوطنية الجزائرية"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
          dir="rtl"
        >
          <div className="text-center mb-12">
            <h2 className="font-arabic-heading font-black text-3xl md:text-4xl text-foreground mb-6">
              مقدمة <span className="text-gradient-gold">الرؤية الوطنية</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-arabic-body leading-relaxed">
              تواجه الجزائر تحديات متزايدة في مجالات الغذاء والماء والصحة الزراعية، بسبب التغيرات المناخية، 
              تدهور الموارد الطبيعية، وارتفاع الطلب على الغذاء. ومن هذا المنطلق، تأتي مبادرة BIOPIXEL–OPTIFEED 2035 
              كخطة وطنية استراتيجية تهدف إلى تحقيق السيادة الوطنية عبر الزراعة الذكية والرقمنة الفضائية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "جامعة البويرة", role: "المقر الوطني" },
              { name: "INRA", role: "المعهد الوطني للبحث الزراعي" },
              { name: "OPTIFEED", role: "الشريك التقني" },
              { name: "BIOPIXEL", role: "الشريك الرقمي" },
              { name: "EMBRAPA", role: "البرازيل - الشريك الدولي" },
              { name: "LORNA INTERNATIONAL", role: "الولايات المتحدة - الشريك الدولي" }
            ].map((partner, i) => (
              <motion.div
                key={i}
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-4 border border-border"
              >
                <h4 className="font-bold text-foreground font-arabic-heading">{partner.name}</h4>
                <p className="text-sm text-muted-foreground font-arabic-body">{partner.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Four Security Pillars */}
      <section className="py-16 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
          dir="rtl"
        >
          <div className="text-center mb-12">
            <h2 className="font-arabic-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              المحاور <span className="text-gradient-gold">السيادية الأربعة</span>
            </h2>
            <p className="text-lg text-muted-foreground font-arabic-body">
              تحقيق السيادة الوطنية الجزائرية عبر منظومة متكاملة للأمن الغذائي والمائي والصحي
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {securityPillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-background rounded-2xl p-8 border border-border hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <pillar.icon className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-arabic-heading font-black text-xl text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-accent font-bold mb-3 tracking-wider uppercase font-arabic-body">
                      {pillar.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-arabic-body mb-4">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground font-arabic-heading mb-3">📌 النتائج المتوقعة:</h4>
                  {pillar.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full gradient-gold flex-shrink-0 shadow-gold" />
                      <span className="text-sm text-muted-foreground font-arabic-body">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Technical Pillars */}
      <section className="py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
          dir="rtl"
        >
          <div className="text-center mb-12">
            <h2 className="font-arabic-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              الركائز <span className="text-gradient-gold">التقنية والعلمية</span>
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {technicalPillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-muted/50 rounded-2xl p-6 border border-border hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold flex-shrink-0">
                    <pillar.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-arabic-heading font-black text-lg text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-arabic-body">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Phases */}
      <section className="py-16 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
          dir="rtl"
        >
          <div className="text-center mb-12">
            <h2 className="font-arabic-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              المراحل <span className="text-gradient-gold">الزمنية 2025–2035</span>
            </h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shadow-gold mx-auto mb-4">
                  <phase.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-arabic-heading font-black text-lg text-foreground mb-2">
                  {phase.title}
                </h3>
                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold mb-3 font-arabic-body">
                  {phase.period}
                </div>
                <p className="text-muted-foreground font-arabic-body">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* National Message */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center"
          dir="rtl"
        >
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-12 border border-border">
            <h2 className="font-arabic-heading font-black text-2xl md:text-3xl text-foreground mb-6">
              الرسالة <span className="text-gradient-gold">الوطنية</span>
            </h2>
            <p className="text-xl text-muted-foreground font-arabic-body mb-4 leading-relaxed">
              من الجامعة إلى المزرعة، ومن المزرعة إلى الوطن.
            </p>
            <p className="text-2xl font-black text-gradient-gold font-arabic-heading">
              الجزائر، بلد العلم والماء والغذاء، تبني أمنها الوطني بالسيادة الزراعية والرقمية
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BioPixelVision2035;
