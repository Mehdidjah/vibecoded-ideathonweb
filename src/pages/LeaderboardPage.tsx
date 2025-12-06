import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, Star, Crown, Flame } from "lucide-react";

const leaderboardData = [
  { rank: 1, teamName: "Phoenix Coders", points: 2850, wins: 12, members: ["Alice", "Bob", "Charlie"] },
  { rank: 2, teamName: "Dragon Bytes", points: 2650, wins: 10, members: ["David", "Eve", "Frank"] },
  { rank: 3, teamName: "Unicorn Devs", points: 2400, wins: 9, members: ["Grace", "Henry", "Ivy"] },
  { rank: 4, teamName: "Griffins Unite", points: 2200, wins: 8, members: ["Jack", "Kate", "Leo"] },
  { rank: 5, teamName: "Serpent Squad", points: 2050, wins: 7, members: ["Mike", "Nina", "Oscar"] },
  { rank: 6, teamName: "Badger Brigade", points: 1900, wins: 6, members: ["Paul", "Quinn", "Rose"] },
  { rank: 7, teamName: "Raven Minds", points: 1750, wins: 5, members: ["Sam", "Tina", "Uma"] },
  { rank: 8, teamName: "Lion Hearts", points: 1600, wins: 4, members: ["Victor", "Wendy", "Xander"] },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-yellow-400" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-300" />;
    case 3:
      return <Medal className="w-6 h-6 text-amber-600" />;
    default:
      return <Star className="w-5 h-5 text-primary/50" />;
  }
};

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/50";
    case 2:
      return "bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-400/50";
    case 3:
      return "bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-600/50";
    default:
      return "bg-secondary/30 border-border/50";
  }
};

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
     
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <Trophy className="w-8 h-8 text-background" />
            </div>
            <h1 className="font-magical text-4xl md:text-5xl text-gradient-gold mb-4 tracking-wider">
              Hall of Champions
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
              The most legendary teams in the realm
            </p>
          </div>

   
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card variant="magical" className="p-4 text-center animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Flame className="w-8 h-8 text-house-gryffindor mx-auto mb-2" />
              <p className="font-magical text-2xl text-primary">156</p>
              <p className="font-body text-sm text-muted-foreground">Active Teams</p>
            </Card>
            <Card variant="magical" className="p-4 text-center animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="font-magical text-2xl text-primary">48</p>
              <p className="font-body text-sm text-muted-foreground">Events Complete</p>
            </Card>
            <Card variant="magical" className="p-4 text-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Star className="w-8 h-8 text-house-hufflepuff mx-auto mb-2" />
              <p className="font-magical text-2xl text-primary">892</p>
              <p className="font-body text-sm text-muted-foreground">Participants</p>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="space-y-3">
            {leaderboardData.map((team, index) => (
              <Card 
                key={team.rank}
                className={`p-4 border ${getRankStyle(team.rank)} animate-fade-in-up`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/50">
                    {getRankIcon(team.rank)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-magical text-sm text-muted-foreground">#{team.rank}</span>
                      <h3 className="font-magical text-lg text-foreground">{team.teamName}</h3>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {team.members.join(", ")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-magical text-xl text-primary">{team.points.toLocaleString()}</p>
                    <p className="font-body text-xs text-muted-foreground">{team.wins} wins</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;
