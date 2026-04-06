import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { Preloader } from './components/Preloader';

// Screens
import { HomeScreen } from './screens/HomeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { DetailScreen } from './screens/DetailScreen';
import { AdminScreen } from './screens/AdminScreen';

// Firebase test
import { testConnection } from './hooks/useFirebaseProjects';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

export default function App() {
  const location = useLocation();

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Navbar />
        
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={location.pathname} 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/projects" element={<ProjectsScreen />} />
                <Route path="/project/:slug" element={<DetailScreen />} />
                <Route path="/admin" element={<AdminScreen />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
        <Chatbot />
      </div>
    </QueryClientProvider>
  );
}
