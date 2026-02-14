import { motion } from "framer-motion";
import {
  Package,
  Wrench,
  ShoppingBag,
  Laptop,
  FileText,
} from "lucide-react";
import SectionBanner from "./SectionBanner";
import sectionBizBg from "@/assets/section-biz.jpg";

const streams = [
  {
    icon: Package,
    title: "بيع الأعلاف والحلول الغذائية",
    desc: "أعلاف مركزة وخلطات مخصصة لكل سلالة",
  },
  {
    icon: Wrench,
    title: "خدمات المتابعة التقنية",
    desc: "مرافقة ميدانية مدفوعة لتحسين المردودية",
  },
  {
    icon: ShoppingBag,
    title: "تجارة المدخلات الفلاحية",
    desc: "توفير كل ما يحتاجه المزارع في مكان واحد",
  },
  {
    icon: Laptop,
    title: "الاشتراك في المنصة الرقمية",
    desc: "لوحات قيادة وتحليلات متقدمة للضيعات الكبيرة",
  },
  {
    icon: FileText,
    title: "عقود الإنتاج والتوريد",
    desc: "عقود منظمة تضمن استقرار الأسعار والكميات",
  },
];

const BusinessModel = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="business"
    >
      <SectionBanner
        bgImage={sectionBizBg}
        badge="نموذج الربحية"
        title="5 مصادر دخل"
        highlight="متكاملة"
        subtitle="لا نعتمد على نشاط واحد بل على منظومة ربحية متنوعة ومتكاملة"
      />

      <div className="py-16 bg-primary relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6" dir="rtl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {streams.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl overflow-hidden hover:bg-primary-foreground/15 transition-all duration-300 text-center"
              >
                {/* Top accent line */}
                <div className="h-1 gradient-gold" />
                <div className="p-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-gold">
                    <s.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-arabic-heading font-bold text-sm text-primary-foreground mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-primary-foreground/60 leading-relaxed mb-4 font-arabic-body">
                    {s.desc}
                  </p>
                  <div className="text-3xl font-display font-black text-gradient-gold font-arabic-data">
                    0{i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessModel;
