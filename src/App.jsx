import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';

// Lazy Loaded Pages for Performance
const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Rewards = lazy(() => import('./pages/Rewards'));
const Premium = lazy(() => import('./pages/Premium'));
const Download = lazy(() => import('./pages/Download'));
const Guide = lazy(() => import('./pages/Guide'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const DeleteAccount = lazy(() => import('./pages/DeleteAccount'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Professional Global Loader
const PageLoader = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-brand-lightGray rounded-full"></div>
      <div className="absolute inset-0 border-4 border-neon border-t-transparent rounded-full animate-spin"></div>
    </div>
    <span className="mt-4 text-[10px] font-black text-brand-dark uppercase tracking-[0.2em] animate-pulse">
      Syncing Market Data...
    </span>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-neon/30 selection:text-brand-dark">
      {/* Utility: Resets scroll position on route change */}
      <ScrollToTop />
      
      {/* Global Header */}
      <Navbar />
      
      <main>
        {/* AnimatePresence enables smooth Framer Motion page transitions */}
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/download" element={<Download />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/delete-account" element={<DeleteAccount />} />
              
              {/* Catch-all Route for 404 - MUST be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
