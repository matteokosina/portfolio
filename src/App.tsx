import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './global.css';

function App() {
  const basename = import.meta.env.PROD ? '/portfolio' : '';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative">
        {/* Animated sepia overlay */}
        <div className="absolute inset-0 sepia-shift pointer-events-none"></div>
        <div className="hero-pattern min-h-screen relative z-10">
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                  </motion.div>
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}

export default App;
