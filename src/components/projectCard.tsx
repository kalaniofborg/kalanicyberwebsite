import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Terminal } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: LucideIcon;
  category: string;
  index: number;
}

const ProjectCard = ({ id, title, description, tools, icon: Icon, category, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/project/${id}`} className="block h-full">
        <div className="h-full glass rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group box-glow-hover relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Category badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary px-2 py-1 rounded bg-primary/10 border border-primary/20">
                {category}
              </span>
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {description}
            </p>

            {/* Tools */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-mono text-muted-foreground">Tools:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* View more link */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;