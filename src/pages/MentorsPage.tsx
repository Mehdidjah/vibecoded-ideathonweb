import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Star, MessageCircle, Calendar, Clock } from "lucide-react";

interface Mentor {
  id: number;
  name: string;
  title: string;
  expertise: string[];
  rating: number;
  sessions: number;
  available: boolean;
  avatar: string;
  bio: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Prof. Dumbledore",
    title: "AI & Machine Learning Expert",
    expertise: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    rating: 4.9,
    sessions: 156,
    available: true,
    avatar: "D",
    bio: "Former Google AI researcher with 15+ years of experience in deep learning and neural networks.",
  },
  {
    id: 2,
    name: "Prof. McGonagall",
    title: "Full-Stack Development Lead",
    expertise: ["React", "Node.js", "TypeScript", "System Design"],
    rating: 4.8,
    sessions: 203,
    available: true,
    avatar: "M",
    bio: "Senior Software Engineer at Meta. Passionate about clean code and scalable architectures.",
  },
  {
    id: 3,
    name: "Prof. Snape",
    title: "Data Science Wizard",
    expertise: ["Python", "R", "SQL", "Data Visualization"],
    rating: 4.7,
    sessions: 89,
    available: false,
    avatar: "S",
    bio: "Data Science Director with expertise in transforming raw data into actionable insights.",
  },
  {
    id: 4,
    name: "Prof. Flitwick",
    title: "UI/UX Design Master",
    expertise: ["Figma", "Design Systems", "User Research", "Prototyping"],
    rating: 4.9,
    sessions: 134,
    available: true,
    avatar: "F",
    bio: "Design Lead at Airbnb. Specialized in creating delightful user experiences.",
  },
  {
    id: 5,
    name: "Prof. Sprout",
    title: "Product & Growth Strategist",
    expertise: ["Product Management", "Growth Hacking", "Pitch Decks", "Market Research"],
    rating: 4.6,
    sessions: 78,
    available: true,
    avatar: "SP",
    bio: "Serial entrepreneur with 3 successful exits. Mentor at Y Combinator.",
  },
  {
    id: 6,
    name: "Prof. Lupin",
    title: "DevOps & Cloud Architect",
    expertise: ["AWS", "Kubernetes", "CI/CD", "Infrastructure"],
    rating: 4.8,
    sessions: 112,
    available: false,
    avatar: "L",
    bio: "Principal Engineer at AWS. Expert in building resilient cloud infrastructure.",
  },
];

const MentorsPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
    
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-house-ravenclaw to-primary mb-4 sm:mb-6 shadow-[0_0_30px_hsl(230_55%_45%_/_0.4)]">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Mentor's Guild
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Get guidance from industry experts and hackathon veterans
            </p>
          </div>

     
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mentors.map((mentor, index) => (
              <Card 
                key={mentor.id}
                variant="magical"
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-magical text-lg ${
                      mentor.available 
                        ? "bg-gradient-to-br from-primary to-gold-dark text-navy" 
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {mentor.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{mentor.name}</CardTitle>
                        {mentor.available ? (
                          <Badge className="bg-house-slytherin/20 text-house-slytherin border border-house-slytherin/30 text-[10px]">
                            Available
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px]">Busy</Badge>
                        )}
                      </div>
                      <CardDescription className="text-xs mt-1">{mentor.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">{mentor.bio}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.expertise.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-secondary/30 text-[10px]">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <Badge variant="outline" className="bg-secondary/30 text-[10px]">
                        +{mentor.expertise.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-primary/10">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-gold" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{mentor.sessions}</span>
                      </div>
                    </div>
                    <Button 
                      variant={mentor.available ? "magical" : "magical-outline"} 
                      size="sm"
                      disabled={!mentor.available}
                      className="text-xs h-7"
                    >
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        
          <Card variant="magical" className="mt-8 p-4 sm:p-6 text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-magical text-lg sm:text-xl text-foreground mb-2">Become a Mentor</h3>
            <p className="font-body text-sm text-muted-foreground mb-4 max-w-md mx-auto">
              Share your expertise and help the next generation of hackathon wizards succeed.
            </p>
            <Button variant="magical-outline">Apply to Mentor</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MentorsPage;