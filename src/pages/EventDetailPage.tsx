import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Calendar, MapPin, Users, ArrowLeft, UserPlus, Users2 } from "lucide-react";
import sortingHatIcon from "@/assets/sorting-hat-nobg.png";

interface Event {
  id: string;
  eventName: string;
  eventType: string;
  maxTeamSize: string;
  date: string;
  location: string;
  description: string;
}

const demoEvents: Event[] = [
  {
    id: "1",
    eventName: "The Grand Hackathon",
    eventType: "hackathon",
    maxTeamSize: "4",
    date: "2024-02-15",
    location: "Tech Campus, Building A",
    description: "Join us for 48 hours of coding magic! Build innovative solutions to real-world problems. Teams will compete to create the most impressive projects, with prizes for the top performers.",
  },
  {
    id: "2",
    eventName: "Innovation Ideathon",
    eventType: "ideathon",
    maxTeamSize: "5",
    date: "2024-02-20",
    location: "Online - Virtual",
    description: "Brainstorm and pitch your revolutionary ideas. No coding required! This is your chance to think big and present concepts that could change the world.",
  },
  {
    id: "3",
    eventName: "Data Wizards Challenge",
    eventType: "datathon",
    maxTeamSize: "3",
    date: "2024-03-01",
    location: "Data Science Center",
    description: "Analyze magical datasets and uncover hidden insights. Perfect for data enthusiasts and analysts looking to showcase their skills.",
  },
];

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
   
    let foundEvent = demoEvents.find((e) => e.id === id);
    
    if (!foundEvent) {
     
      const storedEvents = JSON.parse(localStorage.getItem("houseteam-events") || "[]");
      foundEvent = storedEvents.find((e: Event) => e.id === id);
    }
    
    setEvent(foundEvent || null);
  }, [id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "text-house-gryffindor";
      case "ideathon":
        return "text-house-ravenclaw";
      case "datathon":
        return "text-house-slytherin";
      case "designathon":
        return "text-house-hufflepuff";
      default:
        return "text-primary";
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-magical text-xl text-muted-foreground">Event not found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/events" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          {/* Event Card */}
          <Card variant="magical" className="mb-8 animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className={`font-magical text-sm uppercase tracking-wider ${getEventTypeColor(event.eventType)}`}>
                  {event.eventType}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="font-body">Max {event.maxTeamSize} members per team</span>
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-2">{event.eventName}</CardTitle>
              <CardDescription className="text-base">
                {event.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-magical text-xs uppercase tracking-wider text-muted-foreground">Date</p>
                    <p className="font-body text-foreground">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-magical text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="font-body text-foreground">{event.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sorting Hat Section */}
          <div className="text-center mb-8 animate-fade-in-up animation-delay-200">
            <div className="relative inline-block">
              <img 
                src={sortingHatIcon} 
                alt="Sorting Hat" 
                className="w-32 h-32 mx-auto animate-float drop-shadow-[0_0_20px_hsl(43_56%_54%_/_0.4)]"
              />
            </div>
            <h2 className="font-magical text-2xl md:text-3xl text-gradient-gold mt-4 mb-2">
              Let the Sorting Begin
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              The Sorting Hat awaits to match you with your destined teammates
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
            <Link to={`/sorting/${id}?mode=create`}>
              <Card variant="event" className="p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-house-gryffindor to-accent mx-auto mb-4 flex items-center justify-center">
                  <Users2 className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-magical text-xl text-primary mb-2">Create a Team</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Tell the Sorting Hat what skills you seek in your teammates
                </p>
                <Button variant="magical" className="w-full">
                  I want to lead
                </Button>
              </Card>
            </Link>

            <Link to={`/sorting/${id}?mode=join`}>
              <Card variant="event" className="p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-house-ravenclaw to-house-slytherin mx-auto mb-4 flex items-center justify-center">
                  <UserPlus className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-magical text-xl text-primary mb-2">Join a Team</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Share your skills and let the Sorting Hat find your perfect match
                </p>
                <Button variant="magical-outline" className="w-full">
                  Find my team
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailPage;
