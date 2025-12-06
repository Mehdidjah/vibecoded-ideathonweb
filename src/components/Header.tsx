import { Link, useLocation } from "react-router-dom";
import { Trophy, User, Users, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-navy font-magical font-bold text-base sm:text-lg group-hover:shadow-[0_0_20px_hsl(43_56%_54%_/_0.5)] transition-all duration-300">
            H
          </div>
          <span className="font-magical text-base sm:text-xl text-gradient-gold tracking-widest hidden sm:block">
            HOUSETEAM
          </span>
        </Link>

        
        <button 
          className="sm:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>


        <nav className="hidden sm:flex items-center gap-4 sm:gap-6">
          <Link
            to="/events"
            className="font-magical text-xs sm:text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            Events
          </Link>
          <Link
            to="/leaderboard"
            className="font-magical text-xs sm:text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase flex items-center gap-1"
          >
            <Trophy className="w-4 h-4" />
            <span>Ranks</span>
          </Link>
          <Link
            to="/team"
            className="font-magical text-xs sm:text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase flex items-center gap-1"
          >
            <Users className="w-4 h-4" />
            <span>My Team</span>
          </Link>
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-gold-dark/50 flex items-center justify-center hover:from-primary hover:to-gold-dark transition-all"
          >
            <User className="w-4 h-4 text-foreground" />
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-background/95 backdrop-blur-md border-b border-primary/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/events"
              className="font-magical text-sm tracking-wider text-foreground hover:text-primary transition-colors uppercase py-2 border-b border-primary/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/leaderboard"
              className="font-magical text-sm tracking-wider text-foreground hover:text-primary transition-colors uppercase py-2 border-b border-primary/10 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Trophy className="w-4 h-4" />
              <span>Leaderboard</span>
            </Link>
            <Link
              to="/team"
              className="font-magical text-sm tracking-wider text-foreground hover:text-primary transition-colors uppercase py-2 border-b border-primary/10 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>My Team</span>
            </Link>
            <Link
              to="/profile"
              className="font-magical text-sm tracking-wider text-foreground hover:text-primary transition-colors uppercase py-2 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
