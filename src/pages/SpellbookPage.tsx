import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb, Code, Palette, Database, Smartphone, Brain, Megaphone } from "lucide-react";

const skills = [
  {
    category: "Development",
    icon: Code,
    color: "text-house-gryffindor",
    skills: ["React", "Python", "JavaScript", "TypeScript", "Node.js", "Java", "C++", "Go", "Rust", "Swift"],
  },
  {
    category: "Design",
    icon: Palette,
    color: "text-house-ravenclaw",
    skills: ["UI/UX", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Motion Design", "Prototyping", "Wireframing"],
  },
  {
    category: "Data Science",
    icon: Database,
    color: "text-house-slytherin",
    skills: ["Machine Learning", "Python", "R", "TensorFlow", "PyTorch", "Data Visualization", "SQL", "Statistics"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "text-house-hufflepuff",
    skills: ["React Native", "Flutter", "iOS/Swift", "Android/Kotlin", "Cross-Platform", "App Store Optimization"],
  },
  {
    category: "AI & Innovation",
    icon: Brain,
    color: "text-primary",
    skills: ["GPT/LLMs", "Computer Vision", "NLP", "Prompt Engineering", "AI Ethics", "Generative AI"],
  },
  {
    category: "Business & Marketing",
    icon: Megaphone,
    color: "text-gold",
    skills: ["Pitch Deck", "Market Research", "Growth Hacking", "Social Media", "Content Strategy", "Analytics"],
  },
];

const SpellbookPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              The Spellbook
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Master these skills to become a legendary hackathon wizard
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((category, index) => (
              <Card 
                key={category.category} 
                variant="magical" 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-secondary/50 ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                  <CardDescription>Essential skills for hackathon success</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="bg-secondary/30 border-primary/20 hover:border-primary/50 cursor-pointer transition-all text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

      
          <div className="mt-8 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Card variant="magical" className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-magical text-lg sm:text-xl text-foreground">Pro Tip</h3>
              </div>
              <p className="font-body text-sm sm:text-base text-muted-foreground">
                The best hackathon teams have a balanced mix of skills. Look for teammates who complement your abilities 
                rather than duplicate them. A strong team typically needs: a developer, a designer, a data person, and a presenter!
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SpellbookPage;