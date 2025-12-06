import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Satyam Naik
              <span className="block text-primary font-bold border-2 border-primary rounded-lg px-4 py-2 mt-4 inline-block">
                Data Engineer & ML Specialist
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Building intelligent data solutions with Python, Machine Learning, and Deep Learning. Transforming raw data into actionable insights.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Bangalore, Karnataka, India</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="hero-shadow group"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProjects}>
              View projects
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://github.com/satyamnaik-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/satyamnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:satyamnaik.dev@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+917608958490"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
