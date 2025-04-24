import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin } from 'lucide-react';
import photo from '../assets/nomena.jpeg';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-0 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="animate-fadeIn text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="inline-block">Miandriarison</span>
            <span className="inline-block ml-3 text-blue-600 dark:text-blue-400">Nomena Léonce</span>
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
            Web & Mobile Developer
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            Passionate, autonomous, and curious developer seeking a stimulating role to leverage my skills, 
            gain new experiences, tackle challenges, and contribute to positive changes with determination and resilience.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              Get in touch
            </button>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto">
            <img 
              src={photo}
              alt="Miandriarison Nomena Léonce" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;