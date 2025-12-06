import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { History, Trophy, Users, Rocket, Star, Award, Code, Lightbulb, CheckCircle } from "lucide-react";

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  type: "achievement" | "team" | "event" | "milestone";
  icon: typeof Trophy;
}

const timelineEvents: TimelineEvent[] = [
  { id: 1, date: "Jan 2025", title: "Joined HouseTeam", description: "Started your hackathon journey", type: "milestone", icon: Star },
  { id: 2, date: "Jan 2025", title: "Completed Profile", description: "First achievement unlocked!", type: "achievement", icon: CheckCircle },
  { id: 3, date: "Jan 2025", title: "Joined Tech Wizards", description: "Found your first team", type: "team", icon: Users },
  { id: 4, date: "Jan 2025", title: "Grand Hackathon", description: "Registered for your first event", type: "event", icon: Code },
  { id: 5, date: "Jan 2025", title: "Speed Demon Badge", description: "Submitted project in record time", type: "achievement", icon: Rocket },
  { id: 6, date: "Feb 2025", title: "Innovation Award", description: "Won Most Creative Solution", type: "achievement", icon: Lightbulb },
  { id: 7, date: "Feb 2025", title: "Data Wizards Challenge", description: "Joined second hackathon", type: "event", icon: Code },
  { id: 8, date: "Mar 2025", title: "First Victory!", description: "Won 1st place at Startup Weekend", type: "achievement", icon: Trophy },
];

const typeColors: Record<string, string> = {
  achievement: "bg-primary/20 border-primary/50 text-primary",
  team: "bg-house-gryffindor/20 border-house-gryffindor/50 text-house-gryffindor",
  event: "bg-house-ravenclaw/20 border-house-ravenclaw/50 text-house-ravenclaw",
  milestone: "bg-gold/20 border-gold/50 text-gold",
};

const TimelinePage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto">

          <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <History className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Your Journey
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Every step of your hackathon adventure
            </p>
          </div>

        
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Card variant="magical" className="p-2 sm:p-4 text-center">
              <p className="font-magical text-xl sm:text-2xl text-primary">3</p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">Events</p>
            </Card>
            <Card variant="magical" className="p-2 sm:p-4 text-center">
              <p className="font-magical text-xl sm:text-2xl text-house-gryffindor">2</p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">Teams</p>
            </Card>
            <Card variant="magical" className="p-2 sm:p-4 text-center">
              <p className="font-magical text-xl sm:text-2xl text-gold">4</p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">Badges</p>
            </Card>
            <Card variant="magical" className="p-2 sm:p-4 text-center">
              <p className="font-magical text-xl sm:text-2xl text-house-slytherin">1</p>
              <p className="font-body text-[10px] sm:text-xs text-muted-foreground">Wins</p>
            </Card>
          </div>

       
          <div className="relative">
            
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-primary/20" />

        
            <div className="space-y-6 sm:space-y-8">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                
                return (
                  <div 
                    key={event.id}
                    className="relative pl-12 sm:pl-16 animate-fade-in-up"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
              
                    <div className={`absolute left-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border ${typeColors[event.type]}`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

             
                    <Card variant="magical" className="hover:border-primary/30 transition-all">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className="font-magical text-sm sm:text-base text-foreground">{event.title}</h3>
                            <p className="font-body text-xs text-muted-foreground">{event.description}</p>
                          </div>
                          <Badge variant="outline" className="text-[10px] shrink-0">{event.date}</Badge>
                        </div>
                        <Badge className={`${typeColors[event.type]} text-[10px]`}>
                          {event.type}
                        </Badge>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

   
            <div className="relative pl-12 sm:pl-16 pt-6 sm:pt-8 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
              <div className="absolute left-1.5 sm:left-3.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
              </div>
              <p className="font-magical text-xs sm:text-sm text-muted-foreground">The journey continues...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TimelinePage;