import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, 
      label: "Github", 
      href: "https://www.github.com/kalaniofborg", 
      color: "hover:text-foreground" 
    },
    { 
      icon: Linkedin, 
      label: "Linkedin",
      href: "https://www.linkedin.com/in/hikalani/", 
      color: "hover:text-secondary" 
    },
    { 
      icon: Mail, 
      label: "Email", 
      href: "mailto:kalaniofborg@protonmail.com", 
      color: "hover:text-primary" 
    },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-glow">Get In Touch</h2>
              <p className="text-muted-foreground font-mono text-sm">// contact_me</p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            I'm currently looking for entry-level cybersecurity opportunities. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            feel free to reach out!
          </motion.p>

          {/* Terminal-style contact box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-6 border border-primary/20 mb-8"
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">terminal@cyber-kalani</span>
            </div>
            <div className="text-left font-mono text-sm space-y-2">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> ./connect --with kalani
              </p>
              <p className="text-foreground">
                Initializing secure connection...
              </p>
              <p className="text-primary">
                Ready for collaboration! 
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`p-4 glass rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 text-muted-foreground ${link.color} hover:scale-110`}
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;