
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AIAssistant from './components/AIAssistant';

export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'portfolio': return <PortfolioPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 bg-[#030303]">
      <Navbar 
        isScrolled={isScrolled} 
        activePage={activePage} 
        onNavigate={setActivePage} 
      />
      
      <main className="animate-in fade-in duration-700">
        {renderPage()}
      </main>

      <Footer onNavigate={setActivePage} />
      
      {/* AI Assistant Hub */}
      <AIAssistant />
    </div>
  );
};

export default App;
