import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sofas from "./pages/Sofas";
import Beds from "./pages/Beds";
import Lighting from "./pages/Lighting";
import Atelier from "./pages/Atelier";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import useSmoothScroll from "./hooks/useSmoothScroll";

const queryClient = new QueryClient();

const AppContent = () => {
  const [loaded, setLoaded] = useState(false);

  useSmoothScroll();

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Cursor />
      {!loaded && <Loader onComplete={handleLoaderComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sofas" element={<Sofas />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/atelier" element={<Atelier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
