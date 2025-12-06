import { ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Customer Churn Prediction Model",
    description: "Built a predictive ML model to analyze customer data and forecast churn probability with 85% accuracy. Performed extensive data cleaning, feature engineering, and applied logistic regression, random forest, and XGBoost. Visualized insights using Matplotlib and Seaborn.",
    tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    duration: "Apr 2025 – Jul 2025",
    github: "https://github.com/satyamnaik-dev",
  },
  {
    title: "Stock Price Prediction System",
    description: "Developed an LSTM-based deep learning model to predict stock market trends using historical data. Implemented feature scaling, time-series analysis, and evaluated RMSE to ensure accuracy. Deployed model using Streamlit for interactive visualization.",
    tags: ["Python", "TensorFlow", "Keras", "LSTM", "Streamlit"],
    duration: "Jan 2025 – Mar 2025",
    github: "https://github.com/satyamnaik-dev",
  },
  {
    title: "Covid-19 Data Analysis Dashboard",
    description: "Analyzed Covid-19 datasets to track global trends of cases, recoveries, and vaccination. Built an interactive dashboard using Dash and Plotly to visualize real-time data. Performed statistical analysis for healthcare resource allocation.",
    tags: ["Python", "Pandas", "Plotly", "Dash"],
    duration: "Sep 2024 – Dec 2024",
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
