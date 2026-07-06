import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import BottomNav from "./components/BottomNav";
import AIChatbot from "./components/AIChatbot";
import LoadingScreen from "./components/LoadingScreen";
import Index from "./pages/Index";
import SymptomChecker from "./pages/SymptomChecker";
import NearbyHealthcare from "./pages/NearbyHealthcare";
import Emergency from "./pages/Emergency";
import HealthAwareness from "./pages/HealthAwareness";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/symptoms" element={<SymptomChecker />} />
              <Route path="/nearby" element={<NearbyHealthcare />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/awareness" element={<HealthAwareness />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
            <AIChatbot />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
