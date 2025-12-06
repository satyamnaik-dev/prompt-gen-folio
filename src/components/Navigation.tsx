import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-mono font-semibold text-lg">Satyam<span className="text-primary">.dev</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("certifications")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
