import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-chassis py-16 md:py-[15vh]">
      <div className="grid-container">
        <div className="col-span-12 lg:col-span-8 lg:col-start-1">
          <p className="text-technical mb-6">// Initialize Contact</p>
          <h2 className="text-section mb-8">
            Ready to Eliminate<br />
            the <span className="text-primary">Integration Bottleneck?</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[60ch] mb-8">
            Wayfarer Autonomy provides the universal software platform for industrial automation.
            Contact us for platform details or our partner Maxwell Robotics for custom integration and consulting.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:info@maxwell-robotics.de"
              whileHover={{ scale: 1.05 }}
              whileTap={{ x: 2, y: 2 }}
              className="px-6 py-3 bg-primary text-primary-foreground font-mono uppercase tracking-widest text-sm border-2 border-primary shadow-hard-dark active:shadow-none transition-all cursor-pointer inline-block hover:bg-primary/90"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="https://www.maxwell-robotics.de/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ x: 2, y: 2 }}
              className="px-6 py-3 bg-secondary text-foreground font-mono uppercase tracking-widest text-sm border-2 border-border shadow-hard-dark active:shadow-none transition-all cursor-pointer inline-block hover:border-primary hover:text-primary"
            >
              Custom Robotics Consulting
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
