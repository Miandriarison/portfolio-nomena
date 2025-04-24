import React from 'react';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    title: "Licence Informatique – Option Web et Design",
    institution: "IT University Andoharanofotsy",
    period: "Décembre 2020 – Septembre 2024",
    location: "Andoharanofotsy, Madagascar",
    icon: <BookOpen className="w-5 h-5 text-white" />
  },
  {
    title: "Initiation Arduino",
    institution: "Orange Madagascar",
    period: "Septembre 2024",
    location: "Madagascar",
    icon: <Award className="w-5 h-5 text-white" />
  },
  {
    title: "Baccalauréat Série D – Mention Assez Bien",
    institution: "Lycée Arcade Antanimena II",
    period: "2020",
    location: "Antanimena, Madagascar",
    icon: <Award className="w-5 h-5 text-white" />
  }
];

const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and the knowledge I've acquired along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              {/* Timeline line */}
              {index < educationData.length - 1 && (
                <div className="h-full w-1 bg-blue-200 dark:bg-blue-900 absolute left-0 sm:left-16 top-0"></div>
              )}
              
              {/* Timeline dot */}
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full absolute left-[-14px] sm:left-[60px] top-7 flex items-center justify-center">
                {item.icon}
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-2 sm:mt-0">
                    {item.institution}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                </div>
                
                {index === 0 && (
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Currently pursuing a Bachelor's degree in Computer Science with specialization in Web and Design. 
                      This program has equipped me with a strong foundation in software development, web technologies,
                      and design principles.
                    </p>
                    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Areas of Study:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Web Development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Mobile Application Development</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Database Management</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Software Engineering</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">Project Management</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {index === 1 && (
                  <p className="text-gray-700 dark:text-gray-300">
                    Completed a specialized training course on Arduino programming and electronics, 
                    gaining hands-on experience with hardware programming and IoT concepts.
                  </p>
                )}
                
                {index === 2 && (
                  <p className="text-gray-700 dark:text-gray-300">
                    Graduated with honors (Mention Assez Bien) in Scientific Studies (Série D), 
                    with focus on mathematics, physics, and natural sciences.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;