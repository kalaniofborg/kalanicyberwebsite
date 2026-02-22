import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, Shield, CheckCircle, ExternalLink, Search, Server, Network, Router, FileSearch, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import CyberBackground from "@/components/CyberBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectsData: Record<string, {
  title: string;
  category: string;
  icon: any;
  description: string;
  fullDescription: string;
  tools: string[];
  objectives: string[];
  outcomes: string[];
  challenges: string[];
}> = {
  "vulnerability-scanning": {
    title: "Vulnerability Scanning Project",
    category: "Offensive Security",
    icon: Search,
    description: "Scanned vulnerabilities with command-line tools and documented the remediation steps.",
    fullDescription: "This project involved conducting comprehensive vulnerability assessments on networked systems using industry-standard scanning tools. The goal was to identify security weaknesses, prioritize them based on risk, and document remediation strategies for each finding.",
    tools: ["Nmap", "Nessus", "OpenVAS", "Nikto"],
    objectives: [
      "Identify open ports and running services on target systems",
      "Detect known vulnerabilities and misconfigurations",
      "Prioritize findings based on CVSS scores",
      "Document remediation steps for each vulnerability",
    ],
    outcomes: [
      "Discovered 15+ critical vulnerabilities across test systems",
      "Created comprehensive vulnerability reports",
      "Developed remediation playbooks for common findings",
      "Gained hands-on experience with enterprise scanning tools",
    ],
    challenges: [
      "Learning to differentiate false positives from real vulnerabilities",
      "Understanding CVSS scoring and risk prioritization",
      "Configuring scan policies for different environments",
    ],
  },
  "club-lab-setup": {
    title: "Club Lab Setup",
    category: "Lab Environment",
    icon: Server,
    description: "Helped the school lab setup Workbench for basic penetration tools and network exercises.",
    fullDescription: "Collaborated with the cybersecurity club to design and implement a secure lab environment for hands-on security training. This involved setting up virtual machines, configuring network isolation, and installing penetration testing tools.",
    tools: ["Kali Linux", "Workbench", "VirtualBox", "pfSense", "Docker"],
    objectives: [
      "Create isolated lab environment for security exercises",
      "Install and configure penetration testing tools",
      "Set up vulnerable machines for practice",
      "Document setup procedures for future members",
    ],
    outcomes: [
      "Deployed fully functional cybersecurity lab",
      "Created documentation for 10+ lab exercises",
      "Trained 5+ club members on lab usage",
      "Established foundation for home lab build",
    ],
    challenges: [
      "Managing network isolation to prevent accidental exposure",
      "Optimizing resource usage on limited hardware",
      "Ensuring tools are properly licensed for educational use",
    ],
  },
  "network-analysis": {
    title: "Network Analysis Project",
    category: "Network Security",
    icon: Network,
    description: "Captured and analyzed traffic from home network, including mobile phones, modems, and routers.",
    fullDescription: "This project focused on deep packet inspection and network traffic analysis to understand normal network behavior and identify potential security issues. Analyzed traffic patterns from various devices to detect anomalies.",
    tools: ["Wireshark", "TCPDump", "NetworkMiner", "Zeek"],
    objectives: [
      "Capture and analyze network traffic in real-time",
      "Identify protocols and communication patterns",
      "Detect potential security issues or anomalies",
      "Create baselines for normal network behavior",
    ],
    outcomes: [
      "Analyzed 100GB+ of network traffic",
      "Identified unauthorized beacon traffic from IoT devices",
      "Created network baseline documentation",
      "Developed custom Wireshark filters for analysis",
    ],
    challenges: [
      "Handling large volumes of captured traffic",
      "Distinguishing malicious traffic from legitimate",
      "Understanding encrypted traffic patterns",
    ],
  },
  "router-switch-config": {
    title: "Router & Switch Configuration Lab",
    category: "Networking",
    icon: Router,
    description: "Configured a small office/home office (SOHO) network using Cisco routers and switches.",
    fullDescription: "Designed and implemented a complete SOHO network infrastructure with proper segmentation, security controls, and routing. This project demonstrated core networking concepts including VLANs, inter-VLAN routing, and access control lists.",
    tools: ["Cisco Packet Tracer", "PUTTY", "CLI", "GNS3"],
    objectives: [
      "Design network topology for small office",
      "Configure VLANs for network segmentation",
      "Implement static and dynamic routing",
      "Set up port security and access controls",
    ],
    outcomes: [
      "Deployed 3-VLAN network with proper segmentation",
      "Configured inter-VLAN routing using layer 3 switch",
      "Implemented port security on all access ports",
      "Created network documentation and diagrams",
    ],
    challenges: [
      "Troubleshooting routing issues between VLANs",
      "Understanding spanning tree protocol behavior",
      "Configuring proper access control lists",
    ],
  },
  "log-analysis": {
    title: "Security Log Analysis",
    category: "Blue Team",
    icon: FileSearch,
    description: "Analyzed Windows Event Logs and Linux syslogs to identify potential security incidents.",
    fullDescription: "This project involved collecting, parsing, and analyzing security logs from various sources to detect indicators of compromise and potential security incidents. Created detection rules and dashboards for ongoing monitoring.",
    tools: ["Splunk", "ELK Stack", "PowerShell", "Python"],
    objectives: [
      "Aggregate logs from multiple sources",
      "Create queries to detect common attack patterns",
      "Build dashboards for security monitoring",
      "Develop alerting rules for critical events",
    ],
    outcomes: [
      "Built SIEM lab environment with Splunk",
      "Created 20+ detection rules for common attacks",
      "Developed custom dashboards for monitoring",
      "Automated log collection with scripts",
    ],
    challenges: [
      "Normalizing log formats from different sources",
      "Reducing false positive alerts",
      "Optimizing search queries for performance",
    ],
  },
  "malware-analysis": {
    title: "Basic Malware Analysis",
    category: "Forensics",
    icon: Bug,
    description: "Performed static and dynamic analysis on malware samples in isolated sandbox environments.",
    fullDescription: "Conducted both static and dynamic malware analysis in isolated environments to understand malware behavior, identify indicators of compromise, and develop detection signatures. Worked with various malware families in a controlled setting.",
    tools: ["REMnux", "Process Monitor", "Cuckoo Sandbox", "YARA"],
    objectives: [
      "Set up isolated malware analysis environment",
      "Perform static analysis on binary samples",
      "Conduct dynamic analysis to observe behavior",
      "Extract and document indicators of compromise",
    ],
    outcomes: [
      "Analyzed 10+ malware samples safely",
      "Created YARA rules for detection",
      "Documented TTPs for each sample",
      "Built malware analysis playbook",
    ],
    challenges: [
      "Ensuring complete isolation of analysis environment",
      "Unpacking obfuscated samples",
      "Interpreting assembly code output",
    ],
  },
};


// “Sometimes you have to take a leap of faith first. The trust part comes later.” - Captain Janeway //


const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen relative">
      <CyberBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/#projects">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 text-glow">{project.title}</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.fullDescription}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Objectives */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass rounded-2xl p-6 border border-primary/20"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Objectives
                </h2>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-2xl p-6 border border-secondary/20"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  Key Outcomes
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-2xl p-6 border border-accent/20"
              >
                <h2 className="text-xl font-bold mb-4">Challenges Overcome</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg bg-muted text-foreground border border-border/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <h3 className="font-mono text-sm text-primary mb-4">// project_stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-primary font-medium">Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tools</span>
                    <span className="text-foreground">{project.tools.length}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;