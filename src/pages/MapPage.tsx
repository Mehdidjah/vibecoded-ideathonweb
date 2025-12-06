import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, MapPin, Calendar, Users, Globe } from "lucide-react";

interface EventLocation {
  id: number;
  name: string;
  type: string;
  location: string;
  coordinates: { x: number; y: number };
  date: string;
  participants: number;
}

const eventLocations: EventLocation[] = [
  { id: 1, name: "Tech Summit Hackathon", type: "hackathon", location: "San Francisco, CA", coordinates: { x: 15, y: 35 }, date: "Feb 15, 2025", participants: 250 },
  { id: 2, name: "AI Innovation Jam", type: "ideathon", location: "New York, NY", coordinates: { x: 75, y: 30 }, date: "Feb 20, 2025", participants: 180 },
  { id: 3, name: "Data Wizards Challenge", type: "datathon", location: "London, UK", coordinates: { x: 48, y: 22 }, date: "Mar 1, 2025", participants: 120 },
  { id: 4, name: "Design Sprint", type: "designathon", location: "Berlin, Germany", coordinates: { x: 52, y: 25 }, date: "Mar 10, 2025", participants: 90 },
  { id: 5, name: "Startup Weekend", type: "hackathon", location: "Tokyo, Japan", coordinates: { x: 85, y: 35 }, date: "Mar 15, 2025", participants: 200 },
  { id: 6, name: "Green Tech Hack", type: "hackathon", location: "Sydney, Australia", coordinates: { x: 88, y: 75 }, date: "Mar 22, 2025", participants: 150 },
];

const typeColors: Record<string, string> = {
  hackathon: "bg-house-gryffindor",
  ideathon: "bg-house-ravenclaw",
  datathon: "bg-house-slytherin",
  designathon: "bg-house-hufflepuff",
};

const MapPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventLocation | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents = filter === "all" 
    ? eventLocations 
    : eventLocations.filter(e => e.type === filter);

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
    
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-house-slytherin to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(120_60%_35%_/_0.4)]">
              <Map className="w-7 h-7 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Marauder's Map
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Discover hackathon events happening around the world
            </p>
          </div>

      
          <div className="flex flex-wrap justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {["all", "hackathon", "ideathon", "datathon", "designathon"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 rounded-full font-magical text-xs sm:text-sm uppercase tracking-wider transition-all ${
                  filter === type 
                    ? "bg-primary text-navy" 
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {type === "all" ? "All Events" : type}
              </button>
            ))}
          </div>

      
          <Card variant="magical" className="mb-6 overflow-hidden animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-0">
              <div className="relative aspect-[2/1] sm:aspect-[3/1] bg-gradient-to-b from-navy-dark to-navy overflow-hidden">
       
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                      linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "10% 10%"
                  }} />
                </div>
                
         
                <div className="absolute top-4 left-4 flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-5 h-5" />
                  <span className="font-magical text-xs sm:text-sm">Global Events</span>
                </div>

         
                {filteredEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 ${
                      selectedEvent?.id === event.id ? "scale-150 z-10" : ""
                    }`}
                    style={{ left: `${event.coordinates.x}%`, top: `${event.coordinates.y}%` }}
                  >
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${typeColors[event.type]} shadow-[0_0_10px_currentColor] animate-pulse`} />
                  </button>
                ))}

              
                {selectedEvent && (
                  <div 
                    className="absolute z-20 bg-background/95 backdrop-blur-md rounded-lg border border-primary/30 p-3 sm:p-4 min-w-[200px] sm:min-w-[250px] shadow-xl animate-scale-in"
                    style={{ 
                      left: `${Math.min(Math.max(selectedEvent.coordinates.x, 20), 80)}%`, 
                      top: `${Math.min(Math.max(selectedEvent.coordinates.y + 10, 30), 70)}%`,
                      transform: "translateX(-50%)"
                    }}
                  >
                    <Badge className={`${typeColors[selectedEvent.type]} mb-2 text-xs`}>
                      {selectedEvent.type}
                    </Badge>
                    <h4 className="font-magical text-sm sm:text-base text-foreground mb-2">{selectedEvent.name}</h4>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{selectedEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        <span>{selectedEvent.participants} participants</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

      
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEvents.map((event, index) => (
              <Card 
                key={event.id}
                variant="event"
                className={`cursor-pointer transition-all animate-fade-in-up ${
                  selectedEvent?.id === event.id ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-4">
                  <Badge className={`${typeColors[event.type]} mb-2 text-xs`}>
                    {event.type}
                  </Badge>
                  <h4 className="font-magical text-base text-foreground mb-2">{event.name}</h4>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;