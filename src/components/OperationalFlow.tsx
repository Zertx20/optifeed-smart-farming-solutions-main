import { motion } from "framer-motion";
import {
  ClipboardList,
  BrainCircuit,
  Truck,
  BarChart3,
  Store,
} from "lucide-react";
import SectionBanner from "./SectionBanner";
import sectionOpsBg from "@/assets/section-ops.jpg";

const phases = [
  {
    icon: ClipboardList,
    step: "01",
    title: "تسجيل المزرعة",
    desc: "إدخال المساحة، نوع الزراعة، عدد القطيع والإنتاج الحالي. تصبح المزرعة وحدة إنتاج مرتبطة بالمنصة.",
  },
  {
    icon: BrainCircuit,
    step: "02",
    title: "تحليل الاحتياجات آلياً",
    desc: "النظام يحدد كمية العلف، برنامج الزراعة المناسب، التكاليف الحقيقية وفرص رفع الإنتاج.",
  },
  {
    icon: Truck,
    step: "03",
    title: "تزويد المزرعة بالحلول",
    desc: "توفير العلف المناسب، المتابعة التقنية، المدخلات الزراعية والدعم البيطري.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "جمع البيانات وتحليلها",
    desc: "تسجيل كل عملية إنتاج: الاستهلاك، الإنتاج، الأداء والربحية. تتحول البيانات إلى قرارات تحسين.",
  },
  {
    icon: Store,
    step: "05",
    title: "التسويق والتوزيع",
    desc: "المنصة تشتري الإنتاج، تنظم بيعه وتضمن استقرار الأسعار.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const OperationalFlow = () => {
  return (
    <section id="operations">
      <SectionBanner
        bgImage={sectionOpsBg}
        badge="نموذج التشغيل"
        title="كيف تعمل"
        highlight="OptiFeed؟"
        subtitle="5 مراحل متسلسلة تحوّل أي مزرعة إلى وحدة إنتاج ذكية"
      />

      <div className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6" dir="rtl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            <div className="flex flex-col gap-12">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <motion.div className="flex-1">
                    <div className="bg-card rounded-2xl p-6 border border-border shadow-glow relative overflow-hidden">
                      {/* Decorative corner */}
                      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[40px]" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold">
                            <phase.icon className="text-primary-foreground" size={22} />
                          </div>
                          <div>
                            <h3 className="font-arabic-heading font-bold text-lg text-foreground">
                              {phase.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed font-arabic-body">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Step number */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-glow border-4 border-background"
                  >
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
                      className="font-arabic-data font-display font-black text-xl text-primary-foreground"
                    >
                      {phase.step}
                    </motion.span>
                  </motion.div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalFlow;
