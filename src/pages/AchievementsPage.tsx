import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, Trophy, Zap, Heart, Users, Code, Lightbulb, Rocket, Crown, Shield, Flame } from "lucide-react";

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: typeof Award;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  unlockedDate?: string;
}

const achievements: Achievement[] = [
  { id: 1, name: "First Steps", description: "Complete your profile", icon: Star, rarity: "Common", unlocked: true, unlockedDate: "Jan 15, 2025" },
  { id: 2, name: "Team Player", description: "Join your first team", icon: Users, rarity: "Common", unlocked: true, unlockedDate: "Jan 16, 2025" },
  { id: 3, name: "Code Warrior", description: "Submit 5 projects", icon: Code, rarity: "Rare", unlocked: false, progress: 2, maxProgress: 5 },
  { id: 4, name: "Innovator", description: "Win 'Most Innovative' award", icon: Lightbulb, rarity: "Epic", unlocked: false },
  { id: 5, name: "Hackathon Hero", description: "Win 1st place", icon: Trophy, rarity: "Legendary", unlocked: false },
  { id: 6, name: "Speed Demon", description: "Submit a project in under 12 hours", icon: Zap, rarity: "Rare", unlocked: true, unlockedDate: "Jan 20, 2025" },
  { id: 7, name: "Mentor", description: "Help 10 participants", icon: Heart, rarity: "Epic", unlocked: false, progress: 3, maxProgress: 10 },
  { id: 8, name: "Serial Hacker", description: "Participate in 10 hackathons", icon: Rocket, rarity: "Epic", unlocked: false, progress: 4, maxProgress: 10 },
  { id: 9, name: "Champion", description: "Win 3 hackathons", icon: Crown, rarity: "Legendary", unlocked: false, progress: 0, maxProgress: 3 },
  { id: 10, name: "Guardian", description: "Lead 5 successful teams", icon: Shield, rarity: "Epic", unlocked: false, progress: 1, maxProgress: 5 },
  { id: 11, name: "On Fire", description: "Participate in 3 consecutive hackathons", icon: Flame, rarity: "Rare", unlocked: false, progress: 1, maxProgress: 3 },
  { id: 12, name: "All-Star", description: "Earn all Common achievements", icon: Award, rarity: "Legendary", unlocked: false },
];

const rarityColors: Record<string, { bg: string; border: string; text: string }> = {
  Common: { bg: "bg-muted", border: "border-muted-foreground/30", text: "text-muted-foreground" },
  Rare: { bg: "bg-house-ravenclaw/20", border: "border-house-ravenclaw/50", text: "text-house-ravenclaw" },
  Epic: { bg: "bg-purple-500/20", border: "border-purple-500/50", text: "text-purple-400" },
  Legendary: { bg: "bg-gradient-to-br from-gold-dark/30 to-gold/30", border: "border-gold/50", text: "text-gold" },
};

const AchievementsPage = () => {
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements.filter(a => a.unlocked).reduce((acc, a) => {
    const points = { Common: 10, Rare: 25, Epic: 50, Legendary: 100 };
    return acc + points[a.rarity];
  }, 0);

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
       
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Achievement Vault
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Collect badges and prove your hackathon mastery
            </p>
          </div>

      
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Card variant="magical" className="p-3 sm:p-4 text-center">
              <p className="font-magical text-2xl sm:text-3xl text-primary">{unlockedCount}</p>
              <p className="font-body text-xs text-muted-foreground">Unlocked</p>
            </Card>
            <Card variant="magical" className="p-3 sm:p-4 text-center">
              <p className="font-magical text-2xl sm:text-3xl text-gold">{totalPoints}</p>
              <p className="font-body text-xs text-muted-foreground">Points</p>
            </Card>
            <Card variant="magical" className="p-3 sm:p-4 text-center">
              <p className="font-magical text-2xl sm:text-3xl text-house-gryffindor">3</p>
              <p className="font-body text-xs text-muted-foreground">Streak</p>
            </Card>
            <Card variant="magical" className="p-3 sm:p-4 text-center">
              <p className="font-magical text-2xl sm:text-3xl text-house-ravenclaw">12</p>
              <p className="font-body text-xs text-muted-foreground">Total</p>
            </Card>
          </div>

       
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const colors = rarityColors[achievement.rarity];
              const IconComponent = achievement.icon;
              
              return (
                <Card 
                  key={achievement.id}
                  variant="magical"
                  className={`animate-fade-in-up transition-all ${
                    !achievement.unlocked ? "opacity-60 grayscale" : ""
                  }`}
                  style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <Badge className={`${colors.bg} ${colors.text} border ${colors.border}`}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg">{achievement.name}</CardTitle>
                    <CardDescription className="text-sm">{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {achievement.unlocked ? (
                      <p className="text-xs text-house-slytherin flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Unlocked {achievement.unlockedDate}
                      </p>
                    ) : achievement.progress !== undefined ? (
                      <div>
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.maxProgress}</span>
                        </div>
                        <Progress value={(achievement.progress / (achievement.maxProgress || 1)) * 100} className="h-2" />
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">Not yet unlocked</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AchievementsPage;