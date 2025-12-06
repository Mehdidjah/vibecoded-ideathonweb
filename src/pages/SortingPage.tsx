import { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";
import sortingHatIcon from "@/assets/sorting-hat-nobg.png";

interface Message {
  id: string;
  role: "hat" | "user";
  content: string;
}

const createTeamQuestions = [
  "Ah, a leader seeks their fellowship! Tell me, what is the name you shall bestow upon your team?",
  "Excellent choice! Now, what skills do you seek in your first companion? (e.g., Frontend, Backend, Design, Data Science)",
  "And what of your second ally? What magic should they wield?",
  "One more teammate perhaps? What expertise would complete your fellowship?",
  "The stars align! I have recorded your needs. When brave souls with matching talents appear, I shall guide them to you. Your team shall be legendary!"
];

const joinTeamQuestions = [
  "A brave soul seeks their destiny! Tell me, what name shall I call you?",
  "Wonderful! Now reveal your primary skill - what magic do you wield best? (e.g., Frontend, Backend, Design, Data Science, Mobile)",
  "Fascinating! And do you possess any secondary talents?",
  "One final question - what role do you envision for yourself? Leader, collaborator, or specialist?",
  "Magnificent! I see your potential clearly. I am searching the enchanted registry for teams that seek your unique talents... A match is forming!"
];

const SortingPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const mode = searchParams.get("mode") || "join";
  const isCreateMode = mode === "create";

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const questions = isCreateMode ? createTeamQuestions : joinTeamQuestions;

  useEffect(() => {
  
    setTimeout(() => {
      addHatMessage(questions[0]);
    }, 500);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addHatMessage = (content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "hat", content },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    if (!currentInput.trim() || isTyping) return;

   
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: currentInput },
    ]);
    setCurrentInput("");


    const nextIndex = questionIndex + 1;
    if (nextIndex < questions.length) {
      setQuestionIndex(nextIndex);
      setTimeout(() => {
        addHatMessage(questions[nextIndex]);
        if (nextIndex === questions.length - 1) {
          setIsComplete(true);
        }
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFinish = () => {
    toast({
      title: isCreateMode ? "Team Created!" : "Profile Saved!",
      description: isCreateMode 
        ? "The Sorting Hat will guide worthy teammates to you."
        : "You have been matched! Check your email for team details.",
    });
    navigate("/events");
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 flex-1 flex flex-col pt-24 pb-6 px-6">
        <div className="container max-w-2xl mx-auto flex-1 flex flex-col">
     
          <div className="text-center mb-6 animate-fade-in-up">
            <h1 className="font-magical text-2xl md:text-3xl text-gradient-gold tracking-wider">
              {isCreateMode ? "The Team Sorting Ceremony" : "Find Your Destiny"}
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-2">
              {isCreateMode 
                ? "Describe the teammates you seek..."
                : "Share your skills with the Sorting Hat..."
              }
            </p>
          </div>

       
          <Card variant="magical" className="flex-1 flex flex-col overflow-hidden">
    
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-fade-in-up ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {message.role === "hat" ? (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold p-1 flex-shrink-0">
                      <img
                        src={sortingHatIcon}
                        alt="Sorting Hat"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-house-ravenclaw to-house-slytherin flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-4 rounded-2xl ${
                      message.role === "hat"
                        ? "bg-secondary/50 rounded-tl-sm"
                        : "bg-primary/20 rounded-tr-sm"
                    }`}
                  >
                    <p className="font-body text-foreground leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 animate-fade-in-up">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold p-1 flex-shrink-0">
                    <img
                      src={sortingHatIcon}
                      alt="Sorting Hat"
                      className="w-full h-full object-cover rounded-full animate-pulse"
                    />
                  </div>
                  <div className="bg-secondary/50 rounded-2xl rounded-tl-sm p-4">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

        
            <div className="p-4 border-t border-primary/20">
              {!isComplete ? (
                <div className="flex gap-3">
                  <Input
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your answer..."
                    disabled={isTyping}
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!currentInput.trim() || isTyping}
                    variant="magical"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleFinish}
                  variant="hero"
                  className="w-full"
                >
                  {isCreateMode ? "Create My Team" : "Find My Match"}
                </Button>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SortingPage;
