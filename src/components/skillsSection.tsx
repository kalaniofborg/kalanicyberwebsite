import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Shield, Network, Terminal, Database, Lock, Bug, Eye } from "lucide-react";

const skillCategories = [
  {
    title: "Offensive Security",
    icon: Bug,
    skills: ["Vulnerability Scanning", "Penetration Testing", "Social Engineering Awareness", "Exploit Research"],
    color: "primary",
  },
  {
    title: "Defensive Security",
    icon: Shield,
    skills: ["Incident Response", "Log Analysis", "SIEM Operations", "Threat Detection"],
    color: "secondary",
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["TCP/IP Protocols", "Firewall Configuration", "VLANs & Routing", "Packet Analysis"],
    color: "primary",
  },
  {
    title: "Tools & Technologies",
    icon: Terminal,
    skills: ["Kali Linux", "Wireshark", "Nmap", "Metasploit", "Burp Suite"],
    color: "secondary",
  },
];

const tools = [
  { name: "Nmap", category: "Scanning" },
  { name: "Wireshark", category: "Analysis" },
  { name: "Kali Linux", category: "OS" },
  { name: "Metasploit", category: "Exploitation" },
  { name: "Burp Suite", category: "Web Testing" },
  { name: "TCPDump", category: "Capture" },
  { name: "Splunk", category: "SIEM" },
  { name: "Nessus", category: "Vuln Scan" },
  { name: "Cisco IOS", category: "Networking" },
  { name: "VirtualBox", category: "Virtualization" },
  { name: "Python", category: "Scripting" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-glow">Skills & Tools</h2>
              <p className="text-muted-foreground font-mono text-sm">// technical_expertise</p>
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <category.icon className={`w-5 h-5 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 border border-border/50"
          >
            <h3 className="font-mono text-sm text-primary mb-6">// tools_&_technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="px-4 py-2 rounded-lg bg-muted border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default">
                    <span className="text-sm font-mono text-foreground">{tool.name}</span>
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-primary text-primary-foreground text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tool.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;