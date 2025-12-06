import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClubsPage from "./pages/ClubsPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import SortingPage from "./pages/SortingPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import TeamDashboardPage from "./pages/TeamDashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SpellbookPage from "./pages/SpellbookPage";
import ChallengesPage from "./pages/ChallengesPage";
import MapPage from "./pages/MapPage";
import ChatPage from "./pages/ChatPage";
import AchievementsPage from "./pages/AchievementsPage";
import MentorsPage from "./pages/MentorsPage";
import ResourcesPage from "./pages/ResourcesPage";
import TimelinePage from "./pages/TimelinePage";
import SubmissionsPage from "./pages/SubmissionsPage";
import NotificationsPage from "./pages/NotificationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/sorting/:id" element={<SortingPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/team" element={<TeamDashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/spellbook" element={<SpellbookPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
