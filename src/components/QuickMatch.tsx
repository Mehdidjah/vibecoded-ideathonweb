import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, RefreshCw, Check, X } from "lucide-react";

const potentialMatches = [
  { id: 1, name: "Sarah K.", skills: ["React", "TypeScript"], compatibility: 95 },
  { id: 2, name: "Mike R.", skills: ["Python", "ML"], compatibility: 88 },
  { id: 3, name: "Emma L.", skills: ["UI/UX", "Figma"], compatibility: 82 },
];

export const QuickMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matched, setMatched] = useState<number[]>([]);

  const currentMatch = potentialMatches[currentIndex];

  const handleAccept = () => {
    setMatched([...matched, currentMatch.id]);
    nextMatch();
  };

  const handleSkip = () => {
    nextMatch();
  };

  const nextMatch = () => {
    if (currentIndex < potentialMatches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const resetMatches = () => {
    setCurrentIndex(0);
    setMatched([]);
  };

  if (currentIndex >= potentialMatches.length) {
    return (
      <Card variant="magical" className="p-6 text-center">
        <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="font-magical text-xl text-foreground mb-2">All Caught Up!</h3>
        <p className="font-body text-muted-foreground mb-4">
          You've reviewed all potential matches. {matched.length} connection{matched.length !== 1 ? "s" : ""} made!
        </p>
        <Button variant="magical-outline" onClick={resetMatches}>
          <RefreshCw className="w-4 h-4 mr-2" />
          Start Over
        </Button>
      </Card>
    );
  }

  return (
    <Card variant="magical" className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="font-magical text-lg text-foreground">Quick Match</h3>
        </div>
        <Badge className="bg-primary/20 text-primary border-primary/30">
          {currentMatch.compatibility}% Match
        </Badge>
      </div>

      <div className="text-center py-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-gold-dark mx-auto mb-4 flex items-center justify-center text-background text-2xl font-magical">
          {currentMatch.name.charAt(0)}
        </div>
        <h4 className="font-magical text-xl text-foreground mb-2">{currentMatch.name}</h4>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {currentMatch.skills.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-secondary/50 border-border">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 border-destructive/50 text-destructive hover:bg-destructive/10"
          onClick={handleSkip}
        >
          <X className="w-4 h-4 mr-2" />
          Skip
        </Button>
        <Button variant="magical" className="flex-1" onClick={handleAccept}>
          <Check className="w-4 h-4 mr-2" />
          Connect
        </Button>
      </div>
    </Card>
  );
};
