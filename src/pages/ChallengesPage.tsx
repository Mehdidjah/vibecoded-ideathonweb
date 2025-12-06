import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Wand2, Star, Lock, CheckCircle, Clock, Flame } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  xp: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  category: string;
  completed: boolean;
  locked: boolean;
  timeLimit?: string;
}

const challenges: Challenge[] = [
  { id: 1, title: "First Spell", description: "Complete your profile with all required information", xp: 50, difficulty: "Easy", category: "Onboarding", completed: true, locked: false },
  { id: 2, title: "Seeker's Quest", description: "Join your first hackathon event", xp: 100, difficulty: "Easy", category: "Participation", completed: true, locked: false },
  { id: 3, title: "House Pride", description: "Form or join a complete team", xp: 150, difficulty: "Medium", category: "Teamwork", completed: false, locked: false },
  { id: 4, title: "The Pitch Master", description: "Present your project to judges", xp: 200, difficulty: "Medium", category: "Presentation", completed: false, locked: false },
  { id: 5, title: "Code Alchemist", description: "Submit a working prototype", xp: 300, difficulty: "Hard", category: "Development", completed: false, locked: false },
  { id: 6, title: "Champion's Glory", description: "Win 1st place in any hackathon", xp: 500, difficulty: "Legendary", category: "Achievement", completed: false, locked: true },
  { id: 7, title: "Mentor's Wisdom", description: "Help 3 other participants with their projects", xp: 250, difficulty: "Medium", category: "Community", completed: false, locked: false },
  { id: 8, title: "Innovation Wizard", description: "Win the Most Innovative Award", xp: 400, difficulty: "Hard", category: "Achievement", completed: false, locked: true },
];

const difficultyColors = {
  Easy: "bg-house-hufflepuff text-navy",
  Medium: "bg-house-ravenclaw text-foreground",
  Hard: "bg-house-slytherin text-foreground",
  Legendary: "bg-gradient-to-r from-gold-dark to-gold text-navy",
};

const ChallengesPage = () => {
  const [filter, setFilter] = useState<string>("All");
  const completedCount = challenges.filter(c => c.completed).length;
  const totalXP = challenges.filter(c => c.completed).reduce((acc, c) => acc + c.xp, 0);

  const filteredChallenges = filter === "All" 
    ? challenges 
    : challenges.filter(c => c.category === filter);

  const categories = ["All", ...new Set(challenges.map(c => c.category))];

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-5xl mx-auto">
      
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-house-gryffindor to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(0_65%_48%_/_0.4)]">
              <Wand2 className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Daily Challenges
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Complete quests to earn XP and unlock magical rewards
            </p>
          </div>


          <Card variant="magical" className="mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Flame className="w-6 h-6 text-house-gryffindor" />
                  <div>
                    <p className="font-magical text-lg text-foreground">Your Progress</p>
                    <p className="font-body text-sm text-muted-foreground">{completedCount}/{challenges.length} Challenges</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-magical text-lg text-primary">{totalXP} XP</span>
                </div>
              </div>
              <Progress value={(completedCount / challenges.length) * 100} className="h-3" />
            </CardContent>
          </Card>


          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "magical" : "magical-outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className="text-xs sm:text-sm"
              >
                {cat}
              </Button>
            ))}
          </div>


          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredChallenges.map((challenge, index) => (
              <Card 
                key={challenge.id}
                variant="magical"
                className={`animate-fade-in-up ${challenge.locked ? "opacity-60" : ""}`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className={difficultyColors[challenge.difficulty]}>
                      {challenge.difficulty}
                    </Badge>
                    {challenge.completed ? (
                      <CheckCircle className="w-5 h-5 text-house-slytherin" />
                    ) : challenge.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <CardTitle className="text-base sm:text-lg">{challenge.title}</CardTitle>
                  <CardDescription className="text-sm">{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-secondary/30 text-xs">
                      {challenge.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="font-magical text-sm text-primary">+{challenge.xp} XP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChallengesPage;