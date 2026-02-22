import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Code, Lock } from "lucide-react";
import profilePic from "@/assets/kalani_pic.png"; 

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

// "There’s coffee in that nebula." – Janeway
// Translation: There’s a solution in this bug.

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Hello, I'm </span>
              <span className="text-primary text-glow">Kalani!</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              Securing the Digital World,
              <br />
              One Byte at a Time.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Entry-Level Cybersecurity Analyst | Passionate About Defense, Detection & Innovation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold box-glow hover:scale-105 transition-all duration-300"
              >
                <Shield className="w-5 h-5 mr-2" />
                View My Portfolio
              </Button>

              <Button
                onClick={() => window.location.href = "mailto:kalaniofborg@protonmail.com"}
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground"
              >
                <Code className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { label: "Projects", value: "4+" },
                { label: "Certifications", value: "2+" },
                { label: "CTF Rooms", value: "100+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary text-glow">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-full blur-3xl animate-pulse-slow" />
              
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
              />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-muted to-background flex items-center justify-center">
                  <img src={profilePic} alt="Kalani - Cybersecurity Student, Star Trek Fanatic" className="w-50 h-50 rounded-full object-cover"
/>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 rounded-xl glass border border-primary/30"
              >
                <Shield className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 p-3 rounded-xl glass border border-secondary/30"
              >
                <Code className="w-6 h-6 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;