import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-green-deep py-12 border-t border-primary-foreground/10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center"
            >
              <span className="font-arabic-heading font-black text-primary text-sm">O</span>
            </motion.div>
            <span className="font-arabic-heading font-bold text-lg text-primary-foreground">
              OptiFeed
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary-foreground/50 text-sm max-w-md mx-auto mb-6 font-arabic-body"
          >
            المنصة المتكاملة للزراعة الذكية وإنتاج الأعلاف — نحو فلاحة وطنية مُنتجة ومستدامة.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-primary-foreground/30 text-xs font-arabic-body"
          >
            © 2026 OptiFeed. جميع الحقوق محفوظة.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
