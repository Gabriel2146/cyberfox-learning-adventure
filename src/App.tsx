import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgeSelection from "./components/AgeSelection";
import LessonList from "./components/LessonList";
import Lesson from "./components/Lesson";
import Rewards from "./components/Rewards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeSelection />} />
          <Route path="/lessons" element={<LessonList />} />
          <Route path="/lesson/:lessonId" element={<Lesson />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;