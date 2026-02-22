import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle, Clock, ExternalLink } from "lucide-react";

const certifications = {
  completed: [
    {
      name: "CompTIA Tech+",
      issuer: "CompTIA",
      date: "2024",
      description: "Foundational IT certification covering hardware, software, networking, and security basics.",
      badge: "🏆",
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      date: "2024",
      description: "Professional certificate covering security frameworks, risk management, and incident response.",
      badge: "🛡️",
    },
    {
      name: "Cybersecurity 101",
      issuer: "TryHackMe",
      date: "2025",
      description: "Introductory course covering cybersecurity fundamentals and hands-on labs.",
      badge: "🎖️",
    }
  ],
  inProgress: [
    {
      name: "CompTIA Network+",
      issuer: "CompTIA",
      progress: 60,
      description: "Network infrastructure, operations, and troubleshooting.",
    },
    {
      name: "CompTIA A+",
      issuer: "CompTIA",
      progress: 40,
      description: "Hardware and software troubleshooting for IT technicians.",
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      progress: 25,
      description: "Security concepts, threats, and vulnerabilities.",
    },
  ],
};

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-glow">Certifications</h2>
              <p className="text-muted-foreground font-mono text-sm">// credentials_achieved</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Completed Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Completed</h3>
              </div>
              <div className="space-y-4">
                {certifications.completed.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group box-glow-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.badge}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {cert.name}
                          </h4>
                          <span className="text-xs font-mono text-muted-foreground">{cert.date}</span>
                        </div>
                        <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* In Progress Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-semibold">In Progress</h3>
              </div>
              <div className="space-y-4">
                {certifications.inProgress.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-foreground">{cert.name}</h4>
                      <span className="text-xs font-mono text-secondary">{cert.progress}%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cert.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;