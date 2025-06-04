import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import FloatingOrderButton from './components/FloatingOrderButton';
import Index from "./pages/Index";
import Story from "./pages/Story";
import Benefits from "./pages/Benefits";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <FloatingOrderButton />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/story" element={<Story />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
