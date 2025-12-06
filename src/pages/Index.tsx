import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { CountdownTimer } from "@/components/CountdownTimer";
import { QuickMatch } from "@/components/QuickMatch";
import { Trophy, Users, Sparkles, Wand2, Map, MessageCircle, Award, BookOpen } from "lucide-react";
import sortingHatHero from "@/assets/sorting-hat-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
 
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sortingHatHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

   
      <MagicalSparkles />

    
      <div className="absolute inset-0 stars-bg opacity-50" />

  
      <div className="relative z-10 min-h-screen flex flex-col">
        
        <header className="pt-6 sm:pt-8 px-4 sm:px-6">
          <div className="container mx-auto flex justify-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-navy font-magical font-bold text-lg sm:text-xl shadow-[0_0_20px_hsl(43_56%_54%_/_0.4)]">
                H
              </div>
            </div>
          </div>
        </header>

     
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">
          <div className="text-center w-full max-w-4xl mx-auto animate-fade-in-up">
       
            <h1 className="font-magical text-4xl sm:text-5xl md:text-8xl text-gradient-gold mb-4 sm:mb-6 tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
              HOUSETEAM
            </h1>


            <p className="font-magical text-sm sm:text-base md:text-2xl text-foreground/90 tracking-[0.08em] sm:tracking-[0.15em] mb-3 sm:mb-4 uppercase px-2">
              Find the Missing Piece to Your Winning Team
            </p>

        
            <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
              Let the Sorting Hat guide you to your perfect hackathon team.
            </p>

     
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-10 px-4">
              <Link to="/events" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full sm:min-w-[200px]">
                  Participants
                </Button>
              </Link>
              <Link to="/clubs" className="w-full sm:w-auto">
                <Button variant="hero-outline" size="xl" className="w-full sm:min-w-[200px]">
                  Clubs
                </Button>
              </Link>
            </div>

    
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "200ms" }}>
              <Link to="/leaderboard" className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="font-magical text-xs sm:text-sm text-foreground">Leaderboard</span>
              </Link>
              <Link to="/team" className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all">
                <Users className="w-4 h-4 text-house-ravenclaw" />
                <span className="font-magical text-xs sm:text-sm text-foreground">My Team</span>
              </Link>
              <Link to="/profile" className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-magical text-xs sm:text-sm text-foreground">Profile</span>
              </Link>
              <Link to="/spellbook" className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all">
                <BookOpen className="w-4 h-4 text-house-hufflepuff" />
                <span className="font-magical text-xs sm:text-sm text-foreground">Spellbook</span>
              </Link>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "300ms" }}>
              <Link to="/challenges" className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                <Wand2 className="w-5 h-5 text-house-gryffindor" />
                <span className="font-magical text-xs text-foreground">Challenges</span>
              </Link>
              <Link to="/map" className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                <Map className="w-5 h-5 text-house-slytherin" />
                <span className="font-magical text-xs text-foreground">Map</span>
              </Link>
              <Link to="/chat" className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                <MessageCircle className="w-5 h-5 text-house-ravenclaw" />
                <span className="font-magical text-xs text-foreground">Chat</span>
              </Link>
              <Link to="/achievements" className="flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-magical text-xs text-foreground">Badges</span>
              </Link>
            </div>
          </div>

        
          <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 px-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <CountdownTimer targetDate="2025-02-15" eventName="The Grand Hackathon" />
            <QuickMatch />
          </div>
        </main>

        
        <footer className="py-4 sm:py-6 px-4 sm:px-6 border-t border-primary/10">
          <div className="container mx-auto text-center">
            <p className="font-body text-xs sm:text-sm text-muted-foreground">
              Join hackathons, ideathons, and datathons with the perfect team
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
