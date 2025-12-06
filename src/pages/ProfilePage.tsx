import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { User, Trophy, Flame, Star, Code, Palette, Database, Zap, Target, Award } from "lucide-react";

const userProfile = {
  name: "Harry Developer",
  house: "Gryffindor",
  level: 12,
  xp: 2850,
  xpToNext: 3500,
  eventsJoined: 8,
  teamsFormed: 5,
  wins: 3,
};

const skillBadges = [
  { name: "Frontend Wizard", icon: Code, level: 3, color: "text-house-ravenclaw", earned: true },
  { name: "Design Sorcerer", icon: Palette, level: 2, color: "text-house-hufflepuff", earned: true },
  { name: "Data Alchemist", icon: Database, level: 1, color: "text-house-slytherin", earned: true },
  { name: "Speed Demon", icon: Zap, level: 2, color: "text-yellow-500", earned: true },
  { name: "Team Leader", icon: Target, level: 1, color: "text-house-gryffindor", earned: true },
  { name: "Champion", icon: Award, level: 0, color: "text-gray-500", earned: false },
];

const achievements = [
  { name: "First Victory", description: "Win your first hackathon", icon: Trophy, unlocked: true },
  { name: "Hat Trick", description: "Win 3 events in a row", icon: Flame, unlocked: true },
  { name: "Social Butterfly", description: "Join 5 different teams", icon: Star, unlocked: true },
  { name: "Grand Master", description: "Reach level 20", icon: Award, unlocked: false },
];

const ProfilePage = () => {
  const xpPercentage = (userProfile.xp / userProfile.xpToNext) * 100;

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
       
          <Card variant="magical" className="p-6 mb-6 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-house-gryffindor to-accent flex items-center justify-center shadow-[0_0_30px_hsl(0_70%_45%_/_0.3)]">
                <User className="w-12 h-12 text-foreground" />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h1 className="font-magical text-3xl text-gradient-gold mb-1">{userProfile.name}</h1>
                <p className="font-body text-muted-foreground mb-3">House {userProfile.house}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="font-body text-foreground">Level {userProfile.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="font-body text-foreground">{userProfile.wins} Wins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-house-gryffindor" />
                    <span className="font-body text-foreground">{userProfile.eventsJoined} Events</span>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-48">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-body text-muted-foreground">XP</span>
                  <span className="font-magical text-primary">{userProfile.xp}/{userProfile.xpToNext}</span>
                </div>
                <Progress value={xpPercentage} className="h-2" />
              </div>
            </div>
          </Card>

          
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h2 className="font-magical text-xl text-foreground mb-4">Skill Badges</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skillBadges.map((badge) => (
                <Card
                  key={badge.name}
                  className={`p-4 text-center ${badge.earned ? "bg-secondary/50" : "bg-secondary/20 opacity-50"}`}
                >
                  <badge.icon className={`w-8 h-8 ${badge.earned ? badge.color : "text-gray-600"} mx-auto mb-2`} />
                  <p className="font-magical text-sm text-foreground">{badge.name}</p>
                  {badge.earned && (
                    <div className="flex justify-center gap-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < badge.level ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

      
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="font-magical text-xl text-foreground mb-4">Achievements</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.name}
                  className={`p-4 flex items-center gap-4 ${achievement.unlocked ? "bg-secondary/50" : "bg-secondary/20 opacity-50"}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.unlocked ? "bg-primary/20" : "bg-gray-800"}`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.unlocked ? "text-primary" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <p className="font-magical text-foreground">{achievement.name}</p>
                    <p className="font-body text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && (
                    <Badge className="ml-auto bg-primary/20 text-primary border-primary/30">Unlocked</Badge>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
