import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "GeoRoute App",
    description: "A geospatial analysis tool that processes encoded route data to visualize multiple path options and automatically identify the shortest or most efficient route. Features geospatial computation, polyline reconstruction, and map-based insights through an interactive Python-driven interface with Folium/Streamlit.",
    tags: ["Python", "Data Engineering", "ETL", "GIS", "Data Visualization"],
    duration: "Oct 2025 – Present",
    github: "https://github.com/satyamnaik-dev",
  },
  {
    title: "Dash App - Data Visualization",
    description: "Built interactive, production-ready data applications using Python, Plotly Dash, and modern data-viz patterns. Features scalable dashboard layouts, dynamic callbacks, interactive components, and external API integrations for real-world data insights.",
    tags: ["Python", "Plotly", "Dash", "Dashboards", "Data Visualization"],
    duration: "Aug 2025 – Present",
    github: "https://github.com/satyamnaik-dev",
  },
  {
    title: "Blood Bank Management System",
    description: "Developed a Blood Bank Management System using Python, Django, HTML/CSS, JavaScript, and Django ORM. Implemented donor registration, blood inventory tracking, and request management with secure data handling and efficient donor-recipient matching.",
    tags: ["Python", "Django", "JavaScript", "Django REST Framework", "Bootstrap"],
    duration: "Feb 2024 – May 2024",
    github: "https://github.com/satyamnaik-dev",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of data science and machine learning projects showcasing predictive modeling and data visualization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="card-hover-effect flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
