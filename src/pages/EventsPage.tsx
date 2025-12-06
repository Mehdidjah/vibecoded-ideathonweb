import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Calendar, MapPin, Users, Wand2 } from "lucide-react";

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
    description: "Join us for 48 hours of coding magic! Build innovative solutions to real-world problems.",
  },
  {
    id: "2",
    eventName: "Innovation Ideathon",
    eventType: "ideathon",
    maxTeamSize: "5",
    date: "2024-02-20",
    location: "Online - Virtual",
    description: "Brainstorm and pitch your revolutionary ideas. No coding required!",
  },
  {
    id: "3",
    eventName: "Data Wizards Challenge",
    eventType: "datathon",
    maxTeamSize: "3",
    date: "2024-03-01",
    location: "Data Science Center",
    description: "Analyze magical datasets and uncover hidden insights.",
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("houseteam-events") || "[]");
    if (storedEvents.length === 0) {
      setEvents(demoEvents);
    } else {
      setEvents([...demoEvents, ...storedEvents]);
    }
  }, []);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-house-gryffindor";
      case "ideathon":
        return "bg-house-ravenclaw";
      case "datathon":
        return "bg-house-slytherin";
      case "designathon":
        return "bg-house-hufflepuff";
      default:
        return "bg-primary";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="container max-w-5xl mx-auto">
   
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold-dark to-gold mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)]">
              <Wand2 className="w-8 h-8 text-navy" />
            </div>
            <h1 className="font-magical text-4xl md:text-5xl text-gradient-gold mb-4 tracking-wider">
              Discover Events
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
              Choose your challenge and let the Sorting Hat find your team
            </p>
          </div>

 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Link 
                key={event.id} 
                to={`/event/${event.id}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="event" className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className={`px-3 py-1 rounded-full text-xs font-magical uppercase tracking-wider text-foreground ${getEventTypeColor(event.eventType)}`}
                      >
                        {event.eventType}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-body">{event.maxTeamSize}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{event.eventName}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-body">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-body">{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-lg text-muted-foreground">
                No events available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
