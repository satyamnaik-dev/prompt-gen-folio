import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Building Autonomous AI Agents with LangChain",
    excerpt: "Exploring the architecture and patterns for creating reliable autonomous agents that can handle complex workflows.",
    date: "2024-11-05",
    readTime: "8 min read",
  },
  {
    title: "Scaling Python APIs: Lessons from Production",
    excerpt: "Key strategies and pitfalls to avoid when scaling FastAPI applications to handle millions of requests.",
    date: "2024-10-20",
    readTime: "6 min read",
  },
  {
    title: "Real-time Data Processing with Kafka",
    excerpt: "Implementing a robust event streaming architecture for high-throughput data pipelines.",
    date: "2024-10-08",
    readTime: "10 min read",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing insights on backend development, AI systems, and data engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.title} className="card-hover-effect">
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold group">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              View all articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
