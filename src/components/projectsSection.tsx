import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FolderGit2, Search, Server, Network, Router, FileSearch, Bug, Shield } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "vulnerability-scanning",
    title: "Vulnerability Scanning Project",
    description: "Scanned vulnerabilities with command-line tools and documented the remediation steps. Identified critical security flaws and created comprehensive reports.",
    tools: ["Nmap", "Nessus", "OpenVAS"],
    icon: Search,
    category: "Offensive Security",
  },
  {
    id: "club-lab-setup",
    title: "Club Lab Setup",
    description: "Helped the school lab setup Workbench for basic penetration tools and network exercises. Currently designing my home lab too.",
    tools: ["Kali Linux", "Workbench", "VirtualBox"],
    icon: Server,
    category: "Lab Environment",
  },
  {
    id: "network-analysis",
    title: "Network Analysis Project",
    description: "Captured and analyzed traffic from home network, including mobile phones, modems, and routers. Identified suspicious patterns and anomalies.",
    tools: ["Wireshark", "TCPDump", "NetworkMiner"],
    icon: Network,
    category: "Network Security",
  },
  {
    id: "router-switch-config",
    title: "Router & Switch Configuration Lab",
    description: "Configured a small office/home office (SOHO) network using Cisco routers and switches. Set up VLANs, static routes, and port security.",
    tools: ["Cisco Packet Tracer", "PUTTY", "CLI"],
    icon: Router,
    category: "Networking",
  },
  {
    id: "log-analysis",
    title: "Security Log Analysis",
    description: "Analyzed Windows Event Logs and Linux syslogs to identify potential security incidents. Created detection rules and alerts for common attack patterns.",
    tools: ["Splunk", "ELK Stack", "PowerShell"],
    icon: FileSearch,
    category: "Blue Team",
  },
  {
    id: "malware-analysis",
    title: "Basic Malware Analysis",
    description: "Performed static and dynamic analysis on malware samples in isolated sandbox environments. Documented behaviors and indicators of compromise.",
    tools: ["REMnux", "Process Monitor"],
    icon: Bug,
    category: "Forensics",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30">
              <FolderGit2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-glow">Projects</h2>
              <p className="text-muted-foreground font-mono text-sm">// my_work</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-12 max-w-2xl">
            Hands-on cybersecurity projects demonstrating practical skills in vulnerability assessment, 
            network security, and defensive operations.
          </p>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>

          {/* TryHackMe Badge Section */}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="glass rounded-2xl p-6 border border-primary/20 inline-flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-mono text-sm text-muted-foreground">TryHackMe CTF Progress</span>
              </div>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                  <br>
                  
                  
                  
                  </br>
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-xs text-muted-foreground">CTF Challenges</div>
                </div>
                <div>
                <div className="project-card">
                <img src="https://tryhackme-badges.s3.amazonaws.com/kalaniofborg.png" alt="KalaniofBorg TryHackMe Badge for Progress" />
                </div>

                </div>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;