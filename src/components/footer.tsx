import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              © 2026 Cyber Kalani | All Rights Reserved
            </span>
          </div>
          <div className="font-mono text-sm text-primary text-glow">
            Live Long & Prosper 🖖
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;