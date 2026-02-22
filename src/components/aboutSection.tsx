import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Award, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Award,
      title: "CompTIA Tech+ Certified",
      description: "Foundational IT certification",
    },
    {
      icon: BookOpen,
      title: "Digital Forensics Student",
      description: "Associate Degree in progress",
    },
    {
      icon: Target,
      title: "CTF Competitor",
      description: "Active in Capture The Flag events",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-glow">About Me</h2>
              <p className="text-muted-foreground font-mono text-sm">// who_am_i</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-6 border border-primary/10">
                <p className="text-muted-foreground leading-relaxed">
                  I'm Kalani, a dedicated and detail-oriented cybersecurity enthusiast pursuing an 
                  associate degree in digital forensics. I'm a member of several cybersecurity-related 
                  clubs including the Cybersecurity Club, Cloud Computing Club, Networking Concepts Club, 
                  and the National Cyber League.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-secondary/10">
                <p className="text-muted-foreground leading-relaxed">
                  My journey into this career began in 2023, fueled by curiosity and a passion for 
                  protecting digital landscapes. Since then, I've been actively involved in hands-on 
                  labs and projects that showcase my skills in vulnerability scanning, networking, 
                  and basic security principles.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 border border-accent/10">
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not studying or participating in capture-the-flag competitions, I'm 
                  expanding my knowledge and staying up to date on the latest cybersecurity news 
                  and tools. I recently earned my CompTIA Tech+ certification and am studying for 
                  my Network+, A+, and Security+ certifications.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group box-glow-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Club memberships */}
              <div className="glass rounded-xl p-6 border border-border/50">
                <h4 className="text-sm font-mono text-primary mb-4">// club_memberships</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cybersecurity Club",
                    "Cloud Computing Club",
                    "Networking Concepts Club",
                    "National Cyber League",
                  ].map((club, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-mono rounded-full bg-muted text-muted-foreground border border-border/50"
                    >
                      {club}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;