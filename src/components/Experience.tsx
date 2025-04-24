import React from 'react';
import { Calendar, MapPin, Smartphone, Server, Database } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the real-world projects I've contributed to.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="h-full w-1 bg-blue-200 dark:bg-blue-900 absolute left-0 sm:left-16 top-0"></div>
            
            {/* Timeline dot */}
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full absolute left-[-14px] sm:left-[60px] top-7 flex items-center justify-center">
              <Smartphone className="text-white w-4 h-4" />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Stagiaire Développeur Web et Mobile
                </h3>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 sm:mt-0">
                  MEAH
                </span>
              </div>
              
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  Novembre 2023 - Février 2024
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  Antananarivo
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                During my internship at MEAH (Ministère de l'Eau, de l'Assainissement et de l'Hygiène), 
                I developed a mobile application for monitoring water service providers in Antananarivo. 
                The application helps with visualizing sites, tracking supply, planning corrective actions, 
                and managing budgets.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Designed and developed a comprehensive mobile application for water service providers monitoring</li>
                  <li>Implemented features for visualizing sites and tracking water supply status</li>
                  <li>Created interfaces for planning corrective actions and budget management</li>
                  <li>Collaborated with stakeholders to ensure the application met all requirements</li>
                  <li>Conducted testing and debugging to ensure a smooth user experience</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center">
                    <Server className="w-3.5 h-3.5 mr-1" />
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center">
                    <Smartphone className="w-3.5 h-3.5 mr-1" />
                    Ionic React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center">
                    <Database className="w-3.5 h-3.5 mr-1" />
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Looking for new opportunities to contribute and grow. 
              <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                Get in touch!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;