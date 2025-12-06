import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Users, Sparkles } from "lucide-react";

const ClubsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    maxTeamSize: "",
    date: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    const events = JSON.parse(localStorage.getItem("houseteam-events") || "[]");
    const newEvent = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };
    events.push(newEvent);
    localStorage.setItem("houseteam-events", JSON.stringify(events));

    toast({
      title: "Event Created Successfully!",
      description: "Your magical event has been added to the registry.",
    });

    // Reset form
    setFormData({
      eventName: "",
      eventType: "",
      maxTeamSize: "",
      date: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <Sparkles className="w-8 h-8 text-navy" />
            </div>
            <h1 className="font-magical text-4xl md:text-5xl text-gradient-gold mb-4 tracking-wider">
              Create Your Event
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
              Summon participants to your hackathon, ideathon, or datathon
            </p>
          </div>

          {/* Form Card */}
          <Card variant="magical" className="animate-fade-in-up animation-delay-200">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                Fill in the enchanted scroll with your event information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Name */}
                <div className="space-y-2">
                  <Label htmlFor="eventName" className="font-magical text-sm tracking-wider">
                    Event Name
                  </Label>
                  <Input
                    id="eventName"
                    placeholder="The Grand Hackathon"
                    value={formData.eventName}
                    onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
                    required
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="font-magical text-sm tracking-wider">
                    Event Type
                  </Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    required
                  >
                    <SelectTrigger className="bg-secondary/50 border-primary/30">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="ideathon">Ideathon</SelectItem>
                      <SelectItem value="datathon">Datathon</SelectItem>
                      <SelectItem value="designathon">Designathon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Max Team Size */}
                <div className="space-y-2">
                  <Label htmlFor="maxTeamSize" className="font-magical text-sm tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Maximum Team Members
                  </Label>
                  <Select
                    value={formData.maxTeamSize}
                    onValueChange={(value) => setFormData({ ...formData, maxTeamSize: value })}
                    required
                  >
                    <SelectTrigger className="bg-secondary/50 border-primary/30">
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 members</SelectItem>
                      <SelectItem value="3">3 members</SelectItem>
                      <SelectItem value="4">4 members</SelectItem>
                      <SelectItem value="5">5 members</SelectItem>
                      <SelectItem value="6">6 members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="font-magical text-sm tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Event Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="font-magical text-sm tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="Hogwarts Great Hall / Online"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="font-magical text-sm tracking-wider">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your magical event..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="magical" size="lg" className="w-full">
                  Create Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ClubsPage;
