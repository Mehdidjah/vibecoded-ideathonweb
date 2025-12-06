import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Calendar, MapPin, Crown, Code, Palette, Database, Smartphone } from "lucide-react";

const mockTeam = {
  name: "Phoenix Coders",
  event: "The Grand Hackathon",
  eventDate: "2024-02-15",
  location: "Tech Campus, Building A",
  members: [
    { id: 1, name: "Alice Chen", role: "Team Lead", skills: ["Frontend", "React"], isLeader: true },
    { id: 2, name: "Bob Smith", role: "Backend Dev", skills: ["Python", "Node.js"], isLeader: false },
    { id: 3, name: "Charlie Wilson", role: "Designer", skills: ["UI/UX", "Figma"], isLeader: false },
    { id: 4, name: "Diana Ross", role: "Data Scientist", skills: ["ML", "Python"], isLeader: false },
  ],
};

const getSkillIcon = (skill: string) => {
  if (skill.toLowerCase().includes("frontend") || skill.toLowerCase().includes("react")) return <Code className="w-3 h-3" />;
  if (skill.toLowerCase().includes("design") || skill.toLowerCase().includes("figma") || skill.toLowerCase().includes("ui")) return <Palette className="w-3 h-3" />;
  if (skill.toLowerCase().includes("data") || skill.toLowerCase().includes("python") || skill.toLowerCase().includes("ml")) return <Database className="w-3 h-3" />;
  if (skill.toLowerCase().includes("mobile")) return <Smartphone className="w-3 h-3" />;
  return <Code className="w-3 h-3" />;
};

const TeamDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<"members" | "chat">("members");

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Team Header */}
          <Card variant="magical" className="p-6 mb-6 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-house-gryffindor to-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h1 className="font-magical text-2xl md:text-3xl text-gradient-gold">{mockTeam.name}</h1>
                    <p className="font-body text-muted-foreground">{mockTeam.event}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-body">{new Date(mockTeam.eventDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-body">{mockTeam.location}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Button
              variant={activeTab === "members" ? "magical" : "magical-outline"}
              onClick={() => setActiveTab("members")}
              className="flex-1 sm:flex-none"
            >
              <Users className="w-4 h-4 mr-2" />
              Team Members
            </Button>
            <Button
              variant={activeTab === "chat" ? "magical" : "magical-outline"}
              onClick={() => setActiveTab("chat")}
              className="flex-1 sm:flex-none"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Team Chat
            </Button>
          </div>

   
          {activeTab === "members" ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {mockTeam.members.map((member, index) => (
                <Card
                  key={member.id}
                  variant="event"
                  className="p-4 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center text-background font-magical text-xl">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-magical text-lg text-foreground">{member.name}</h3>
                        {member.isLeader && <Crown className="w-4 h-4 text-yellow-500" />}
                      </div>
                      <p className="font-body text-sm text-muted-foreground mb-2">{member.role}</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs bg-primary/10 border-primary/30 text-primary">
                            {getSkillIcon(skill)}
                            <span className="ml-1">{skill}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card variant="magical" className="p-6 animate-fade-in-up">
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <h3 className="font-magical text-xl text-foreground mb-2">Team Chat Coming Soon</h3>
                <p className="font-body text-muted-foreground max-w-md mx-auto">
                  Connect with your teammates and plan your strategy for the event.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default TeamDashboardPage;
