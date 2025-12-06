import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Library, FileText, Video, Download, ExternalLink, BookOpen, Code, Presentation, Lightbulb } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "guide" | "video" | "template" | "tool";
  category: string;
  link: string;
  featured?: boolean;
}

const resources: Resource[] = [
  { id: 1, title: "Hackathon Survival Guide", description: "Complete guide to winning your first hackathon", type: "guide", category: "Getting Started", link: "#", featured: true },
  { id: 2, title: "Pitch Deck Template", description: "Professional template for your final presentation", type: "template", category: "Presentation", link: "#", featured: true },
  { id: 3, title: "How to Form the Perfect Team", description: "Video tutorial on team dynamics", type: "video", category: "Teamwork", link: "#" },
  { id: 4, title: "API Starter Kits", description: "Ready-to-use code templates for common APIs", type: "tool", category: "Development", link: "#" },
  { id: 5, title: "Design System Components", description: "Pre-built UI components for rapid prototyping", type: "tool", category: "Design", link: "#" },
  { id: 6, title: "Judging Criteria Explained", description: "What judges really look for", type: "guide", category: "Strategy", link: "#" },
  { id: 7, title: "Time Management for Hackathons", description: "48-hour timeline breakdown", type: "guide", category: "Strategy", link: "#" },
  { id: 8, title: "Demo Day Best Practices", description: "How to crush your demo presentation", type: "video", category: "Presentation", link: "#" },
  { id: 9, title: "Git Workflow for Teams", description: "Collaborate without conflicts", type: "guide", category: "Development", link: "#" },
  { id: 10, title: "Idea Validation Framework", description: "Quickly test if your idea is viable", type: "template", category: "Strategy", link: "#" },
  { id: 11, title: "Backend Boilerplate", description: "Node.js/Express starter with auth", type: "tool", category: "Development", link: "#" },
  { id: 12, title: "User Research Templates", description: "Quick interview and survey templates", type: "template", category: "Design", link: "#" },
];

const typeConfig: Record<string, { icon: typeof FileText; color: string }> = {
  guide: { icon: BookOpen, color: "text-house-ravenclaw" },
  video: { icon: Video, color: "text-house-gryffindor" },
  template: { icon: Presentation, color: "text-house-hufflepuff" },
  tool: { icon: Code, color: "text-house-slytherin" },
};

const ResourcesPage = () => {
  const categories = [...new Set(resources.map(r => r.category))];
  const featuredResources = resources.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
     
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-house-hufflepuff to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(48_80%_50%_/_0.4)]">
              <Library className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Resource Library
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Everything you need to win your next hackathon
            </p>
          </div>

        
          <div className="mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="font-magical text-xl sm:text-2xl text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Featured Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredResources.map((resource) => {
                const config = typeConfig[resource.type];
                const IconComponent = config.icon;
                
                return (
                  <Card key={resource.id} variant="magical" className="border-primary/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-secondary/50 ${config.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-base sm:text-lg">{resource.title}</CardTitle>
                            <Badge className="bg-primary/20 text-primary text-[10px]">Featured</Badge>
                          </div>
                          <CardDescription>{resource.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-secondary/30">{resource.category}</Badge>
                        <Button variant="magical" size="sm" className="text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Access
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

    
          {categories.map((category, catIndex) => (
            <div key={category} className="mb-8 animate-fade-in-up" style={{ animationDelay: `${(catIndex + 2) * 100}ms` }}>
              <h3 className="font-magical text-lg sm:text-xl text-foreground mb-4">{category}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {resources.filter(r => r.category === category && !r.featured).map((resource) => {
                  const config = typeConfig[resource.type];
                  const IconComponent = config.icon;
                  
                  return (
                    <Card key={resource.id} variant="magical" className="hover:border-primary/30 transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg bg-secondary/50 ${config.color}`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-magical text-sm text-foreground mb-1 truncate">{resource.title}</h4>
                            <p className="font-body text-xs text-muted-foreground line-clamp-2">{resource.description}</p>
                            <div className="flex items-center justify-between mt-2">
                              <Badge variant="outline" className="text-[10px]">{resource.type}</Badge>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <ExternalLink className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;