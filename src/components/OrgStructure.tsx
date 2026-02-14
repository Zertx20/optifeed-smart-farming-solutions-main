import { motion } from "framer-motion";
import {
  Landmark,
  Wheat,
  FlaskConical,
  Users,
  ShoppingCart,
  Monitor,
  GraduationCap,
} from "lucide-react";
import SectionBanner from "./SectionBanner";
import sectionOrgBg from "@/assets/section-org.jpg";
import dirManagement from "@/assets/dir-management.jpg";
import dirAgriculture from "@/assets/dir-agriculture.jpg";
import dirFeed from "@/assets/dir-feed.jpg";
import dirTechnical from "@/assets/dir-technical.jpg";
import dirSupply from "@/assets/dir-supply.jpg";
import dirDigital from "@/assets/dir-digital.jpg";
import dirResearch from "@/assets/dir-research.jpg";

const directorates = [
  {
    icon: Landmark,
    title: "الإدارة العامة",
    subtitle: "General Management",
    desc: "وضع الاستراتيجية الوطنية، إدارة الشراكات والاستثمارات، والإشراف على التكامل بين الأقطاب.",
    kpi: "التوجيه الاستراتيجي الشامل",
    image: dirManagement,
  },
  {
    icon: Wheat,
    title: "الإنتاج الزراعي",
    subtitle: "Agricultural Production",
    desc: "استغلال الأراضي، إنتاج الأعلاف الخضراء والسيلاج، إدارة الري المحوري والطاقة.",
    kpi: "إنتاج المادة الخام محلياً بنسبة عالية",
    image: dirAgriculture,
  },
  {
    icon: FlaskConical,
    title: "تصنيع الأعلاف والتغذية",
    subtitle: "Feed & Nutrition",
    desc: "إنتاج الأعلاف المركزة، تركيب الخلطات حسب السلالات، وتطوير المكملات الوقائية.",
    kpi: "رفع إنتاج الحليب مقابل كل كغ علف",
    image: dirFeed,
  },
  {
    icon: Users,
    title: "المتابعة التقنية والمرافقة",
    subtitle: "Technical Field Services",
    desc: "متابعة المربين ميدانياً، إعداد برامج التغذية، ومراقبة صحة القطيع.",
    kpi: "تحسن مردودية المزارع المرتبطة",
    image: dirTechnical,
  },
  {
    icon: ShoppingCart,
    title: "التجارة والتوريد الفلاحي",
    subtitle: "Agri Supply & Trading",
    desc: "بيع المدخلات الفلاحية، الاستيراد والتصدير، وإدارة سلاسل الإمداد.",
    kpi: "تنظيم السوق وتقليل الوسطاء",
    image: dirSupply,
  },
  {
    icon: Monitor,
    title: "الرقمنة والزراعة الذكية",
    subtitle: "Digital Agriculture",
    desc: "تطوير المنصة الرقمية، تحليل البيانات، أنظمة التتبع والتخطيط الذكي.",
    kpi: "امتلاك قاعدة بيانات فلاحية وطنية",
    image: dirDigital,
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "البحث والتطوير والتكوين",
    subtitle: "R&D and Training",
    desc: "مشاريع البحث التطبيقي، التجارب الحقلية، وتكوين الفلاحين والفنيين.",
    kpi: "تحويل المعرفة إلى إنتاج فعلي",
    image: dirResearch,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const OrgStructure = () => {
  return (
    <section id="structure" className="py-16 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6" dir="rtl"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {directorates.map((d, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group relative rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300 ${
                d.featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-accent/50" : ""
              }`}
            >
              {/* Background image takes full card */}
              <div className="absolute inset-0 overflow-hidden backdrop-blur-md">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'blur(2px)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              {d.featured && (
                <div className="absolute top-3 left-3 gradient-gold px-3 py-1 rounded-full text-xs font-bold text-primary shadow-gold z-20">
                  ⭐ قلب المنصة
                </div>
              )}

              {/* Content overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Icon */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <d.icon className="text-primary" size={24} />
                </div>

                {/* Text content with transparency */}
                <div className="bg-black/20 backdrop-blur-xs rounded-xl p-4 border border-white/10 mt-16">
                  <h3 className="font-arabic-heading font-black text-xl text-white/90 mb-1">
                    {d.title}
                  </h3>
                  <p className="text-xs text-accent/80 font-bold mb-3 tracking-wider uppercase font-arabic-body">
                    {d.subtitle}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed mb-4 font-arabic-body">
                    {d.desc}
                  </p>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
                    <div className="w-2.5 h-2.5 rounded-full gradient-gold flex-shrink-0 shadow-gold" />
                    <span className="text-xs font-bold text-white/80 font-arabic-data">
                      {d.kpi}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OrgStructure;
