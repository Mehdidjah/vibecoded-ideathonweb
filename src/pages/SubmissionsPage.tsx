import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Plus, Github, ExternalLink, Clock, CheckCircle, AlertCircle, Upload } from "lucide-react";

interface Submission {
  id: number;
  projectName: string;
  eventName: string;
  status: "draft" | "submitted" | "judging" | "completed";
  submittedAt?: string;
  repoUrl?: string;
  demoUrl?: string;
  teamMembers: string[];
  score?: number;
}

const submissions: Submission[] = [
  {
    id: 1,
    projectName: "AI Study Buddy",
    eventName: "The Grand Hackathon",
    status: "completed",
    submittedAt: "Jan 20, 2025",
    repoUrl: "https://github.com/example/ai-study-buddy",
    demoUrl: "https://ai-study-buddy.demo",
    teamMembers: ["You", "Luna", "Harry", "Hermione"],
    score: 92,
  },
  {
    id: 2,
    projectName: "EcoTrack",
    eventName: "Green Tech Hack",
    status: "judging",
    submittedAt: "Feb 5, 2025",
    repoUrl: "https://github.com/example/ecotrack",
    demoUrl: "https://ecotrack.demo",
    teamMembers: ["You", "Ron", "Ginny"],
  },
  {
    id: 3,
    projectName: "DataViz Pro",
    eventName: "Data Wizards Challenge",
    status: "submitted",
    submittedAt: "Feb 10, 2025",
    repoUrl: "https://github.com/example/dataviz",
    teamMembers: ["You", "Neville"],
  },
  {
    id: 4,
    projectName: "Untitled Project",
    eventName: "Innovation Ideathon",
    status: "draft",
    teamMembers: ["You"],
  },
];

const statusConfig: Record<string, { icon: typeof Clock; color: string; bg: string }> = {
  draft: { icon: AlertCircle, color: "text-muted-foreground", bg: "bg-muted" },
  submitted: { icon: Upload, color: "text-house-ravenclaw", bg: "bg-house-ravenclaw/20" },
  judging: { icon: Clock, color: "text-house-hufflepuff", bg: "bg-house-hufflepuff/20" },
  completed: { icon: CheckCircle, color: "text-house-slytherin", bg: "bg-house-slytherin/20" },
};

const SubmissionsPage = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredSubmissions = filter === "all" 
    ? submissions 
    : submissions.filter(s => s.status === filter);

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-5xl mx-auto">
        
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-house-gryffindor to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(0_65%_48%_/_0.4)]">
              <FolderOpen className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              My Submissions
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Track your hackathon projects and submissions
            </p>
          </div>

       
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-wrap gap-2">
              {["all", "draft", "submitted", "judging", "completed"].map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "magical" : "magical-outline"}
                  size="sm"
                  onClick={() => setFilter(status)}
                  className="text-xs capitalize"
                >
                  {status}
                </Button>
              ))}
            </div>
            <Button variant="magical" size="sm" className="text-xs">
              <Plus className="w-3 h-3 mr-1" />
              New Submission
            </Button>
          </div>

        
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {filteredSubmissions.map((submission, index) => {
              const config = statusConfig[submission.status];
              const StatusIcon = config.icon;
              
              return (
                <Card 
                  key={submission.id}
                  variant="magical"
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base sm:text-lg">{submission.projectName}</CardTitle>
                        <CardDescription className="text-sm">{submission.eventName}</CardDescription>
                      </div>
                      <Badge className={`${config.bg} ${config.color} border-0 capitalize text-xs`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {submission.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
               
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {submission.teamMembers.slice(0, 4).map((member, i) => (
                          <div 
                            key={i}
                            className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/50 to-gold-dark/50 border border-background flex items-center justify-center text-[10px] font-magical"
                          >
                            {member.charAt(0)}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {submission.teamMembers.length} member{submission.teamMembers.length !== 1 ? "s" : ""}
                      </span>
                    </div>

         
                    {(submission.repoUrl || submission.demoUrl) && (
                      <div className="flex gap-2">
                        {submission.repoUrl && (
                          <Button variant="outline" size="sm" className="text-xs h-7">
                            <Github className="w-3 h-3 mr-1" />
                            Repo
                          </Button>
                        )}
                        {submission.demoUrl && (
                          <Button variant="outline" size="sm" className="text-xs h-7">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        )}
                      </div>
                    )}

          
                    <div className="flex items-center justify-between pt-2 border-t border-primary/10">
                      {submission.submittedAt ? (
                        <span className="text-xs text-muted-foreground">
                          Submitted {submission.submittedAt}
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Not submitted</span>
                      )}
                      {submission.score && (
                        <div className="flex items-center gap-1">
                          <span className="font-magical text-sm text-primary">{submission.score}</span>
                          <span className="text-xs text-muted-foreground">/100</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredSubmissions.length === 0 && (
            <Card variant="magical" className="p-8 text-center animate-fade-in-up">
              <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-body text-muted-foreground">No submissions found</p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default SubmissionsPage;