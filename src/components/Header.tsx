import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-1"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        >
          <span className="bg-blue-600 dark:bg-blue-400 text-white w-8 h-8 rounded-lg flex items-center justify-center">
            N
          </span>
          <span className="hidden sm:inline">omena</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={toggleTheme} 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="relative group">
            <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Languages size={20} />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default">
                  Malgache (native)
                </span>
                <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default">
                  Français (fluent)
                </span>
                <span className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 cursor-default">
                  English (basic)
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-[300px] shadow-lg' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="block w-full text-left py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="block w-full text-left py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="block w-full text-left py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-3 text-blue-600 dark:text-blue-400 font-medium"
          >
            Contact
          </button>
          <div className="py-3 flex items-center text-gray-700 dark:text-gray-300">
            <Languages size={20} className="mr-2" />
            <span className="text-sm">Malgache, Français, English</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;