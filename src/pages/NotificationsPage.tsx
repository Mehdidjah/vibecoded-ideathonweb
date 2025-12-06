import { useState } from "react";
import { Header } from "@/components/Header";
import { MagicalSparkles } from "@/components/MagicalSparkles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Users, Trophy, Calendar, MessageCircle, Star, Check, Trash2, Settings } from "lucide-react";

interface Notification {
  id: number;
  type: "team" | "event" | "achievement" | "message" | "reminder";
  title: string;
  description: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: 1, type: "team", title: "Team Invite", description: "Luna invited you to join 'Code Wizards'", time: "2 min ago", read: false },
  { id: 2, type: "achievement", title: "New Badge!", description: "You earned the 'Speed Demon' achievement", time: "1 hour ago", read: false },
  { id: 3, type: "event", title: "Event Starting Soon", description: "The Grand Hackathon starts in 24 hours", time: "3 hours ago", read: false },
  { id: 4, type: "message", title: "New Message", description: "Harry sent you a message in Tech Wizards chat", time: "5 hours ago", read: true },
  { id: 5, type: "reminder", title: "Submission Deadline", description: "Don't forget to submit your project by midnight", time: "1 day ago", read: true },
  { id: 6, type: "team", title: "Team Update", description: "Hermione joined your team", time: "2 days ago", read: true },
  { id: 7, type: "achievement", title: "Level Up!", description: "You've reached Level 5", time: "3 days ago", read: true },
  { id: 8, type: "event", title: "New Event", description: "Innovation Ideathon registration is now open", time: "1 week ago", read: true },
];

const typeConfig: Record<string, { icon: typeof Bell; color: string }> = {
  team: { icon: Users, color: "text-house-gryffindor" },
  event: { icon: Calendar, color: "text-house-ravenclaw" },
  achievement: { icon: Trophy, color: "text-gold" },
  message: { icon: MessageCircle, color: "text-house-slytherin" },
  reminder: { icon: Star, color: "text-primary" },
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<string>("all");

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = filter === "all" 
    ? notifications 
    : filter === "unread" 
      ? notifications.filter(n => !n.read)
      : notifications.filter(n => n.type === filter);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-background relative">
      <MagicalSparkles />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      <Header />

      <main className="relative z-10 pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
        <div className="container max-w-3xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-gold mb-4 sm:mb-6 shadow-[0_0_30px_hsl(43_56%_54%_/_0.4)] relative">
              <Bell className="w-7 h-7 sm:w-8 sm:h-8 text-navy" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-house-gryffindor text-foreground text-xs flex items-center justify-center font-bold">
                  {unreadCount}
                </span>
              )}
            </div>
            <h1 className="font-magical text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-3 sm:mb-4 tracking-wider">
              Notifications
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-md mx-auto">
              Stay updated on your hackathon journey
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-wrap gap-2">
              {["all", "unread", "team", "event", "achievement"].map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "magical" : "magical-outline"}
                  size="sm"
                  onClick={() => setFilter(type)}
                  className="text-xs capitalize"
                >
                  {type}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="magical-outline" size="sm" onClick={markAllAsRead} className="text-xs">
                <Check className="w-3 h-3 mr-1" />
                Mark All Read
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

     
          <div className="space-y-3">
            {filteredNotifications.map((notification, index) => {
              const config = typeConfig[notification.type];
              const IconComponent = config.icon;
              
              return (
                <Card 
                  key={notification.id}
                  variant="magical"
                  className={`animate-fade-in-up transition-all ${
                    !notification.read ? "border-primary/40 bg-primary/5" : ""
                  }`}
                  style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg bg-secondary/50 ${config.color} shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-magical text-sm text-foreground flex items-center gap-2">
                              {notification.title}
                              {!notification.read && (
                                <span className="w-2 h-2 rounded-full bg-primary" />
                              )}
                            </h4>
                            <p className="font-body text-xs text-muted-foreground mt-0.5">
                              {notification.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            {!notification.read && (
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="h-6 w-6"
                                onClick={() => markAsRead(notification.id)}
                              >
                                <Check className="w-3 h-3" />
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6 text-muted-foreground hover:text-destructive"
                              onClick={() => deleteNotification(notification.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-[10px] capitalize">{notification.type}</Badge>
                          <span className="text-[10px] text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredNotifications.length === 0 && (
            <Card variant="magical" className="p-8 text-center animate-fade-in-up">
              <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-body text-muted-foreground">No notifications</p>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;