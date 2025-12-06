import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Users, Circle, Search } from "lucide-react";

interface ChatRoom {
  id: number;
  name: string;
  type: "team" | "event" | "general";
  lastMessage: string;
  time: string;
  unread: number;
  online: number;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  isMine: boolean;
}

const chatRooms: ChatRoom[] = [
  { id: 1, name: "General Hall", type: "general", lastMessage: "Welcome to HouseTeam! 🎉", time: "now", unread: 3, online: 42 },
  { id: 2, name: "Tech Wizards Team", type: "team", lastMessage: "Ready for the hackathon?", time: "5m ago", unread: 1, online: 4 },
  { id: 3, name: "Grand Hackathon", type: "event", lastMessage: "Registration closes tomorrow", time: "1h ago", unread: 0, online: 156 },
  { id: 4, name: "Innovation Ideathon", type: "event", lastMessage: "New theme announced!", time: "2h ago", unread: 5, online: 89 },
  { id: 5, name: "Code Dragons Team", type: "team", lastMessage: "Great work on the demo!", time: "1d ago", unread: 0, online: 3 },
];

const sampleMessages: Message[] = [
  { id: 1, sender: "Luna", content: "Hey everyone! Excited for the hackathon! 🚀", time: "10:30", isMine: false },
  { id: 2, sender: "Me", content: "Same here! What project ideas do you have?", time: "10:32", isMine: true },
  { id: 3, sender: "Harry", content: "I was thinking about an AI-powered study assistant", time: "10:35", isMine: false },
  { id: 4, sender: "Hermione", content: "That sounds amazing! We could use NLP for that", time: "10:36", isMine: false },
  { id: 5, sender: "Me", content: "I can handle the frontend with React!", time: "10:38", isMine: true },
];

const typeColors: Record<string, string> = {
  team: "bg-house-gryffindor",
  event: "bg-house-ravenclaw",
  general: "bg-house-hufflepuff",
};

const ChatPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom>(chatRooms[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(sampleMessages);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      sender: "Me",
      content: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMine: true,
    }]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-4 px-4 sm:px-6 h-screen flex flex-col">
        <div className="container max-w-6xl mx-auto flex-1 flex flex-col min-h-0">
        
          <div className="text-center mb-4 sm:hidden animate-fade-in-up">
            <h1 className="font-magical text-2xl text-gradient-gold tracking-wider">
              Great Hall Chat
            </h1>
          </div>

          <div className="flex-1 grid lg:grid-cols-[300px_1fr] gap-4 min-h-0">
   
            <Card variant="magical" className="animate-fade-in-up overflow-hidden flex flex-col">
              <div className="p-3 sm:p-4 border-b border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h2 className="font-magical text-base sm:text-lg text-foreground">Chat Rooms</h2>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search rooms..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-secondary/50 border border-primary/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedRoom.id === room.id 
                        ? "bg-primary/20 border border-primary/30" 
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Badge className={`${typeColors[room.type]} text-[10px] px-1.5`}>
                          {room.type}
                        </Badge>
                        <span className="font-magical text-sm text-foreground">{room.name}</span>
                      </div>
                      {room.unread > 0 && (
                        <span className="w-5 h-5 rounded-full bg-primary text-navy text-xs flex items-center justify-center font-bold">
                          {room.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{room.lastMessage}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[10px] text-muted-foreground">{room.time}</span>
                      <div className="flex items-center gap-1">
                        <Circle className="w-2 h-2 fill-house-slytherin text-house-slytherin" />
                        <span className="text-[10px] text-muted-foreground">{room.online}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

           
            <Card variant="magical" className="animate-fade-in-up flex flex-col overflow-hidden" style={{ animationDelay: "100ms" }}>
 
              <div className="p-3 sm:p-4 border-b border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge className={`${typeColors[selectedRoom.type]}`}>{selectedRoom.type}</Badge>
                  <h3 className="font-magical text-base sm:text-lg text-foreground">{selectedRoom.name}</h3>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">{selectedRoom.online} online</span>
                </div>
              </div>

           
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isMine ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] sm:max-w-[70%] ${
                      msg.isMine 
                        ? "bg-primary/30 border border-primary/40" 
                        : "bg-secondary/50 border border-primary/20"
                    } rounded-lg p-3`}>
                      {!msg.isMine && (
                        <p className="font-magical text-xs text-primary mb-1">{msg.sender}</p>
                      )}
                      <p className="font-body text-sm text-foreground">{msg.content}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 text-right">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

        
              <div className="p-3 sm:p-4 border-t border-primary/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Cast your message..."
                    className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-primary/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                  />
                  <Button variant="magical" size="icon" onClick={handleSend}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;