import React from 'react';
import { Code, Database, Layout, Server, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["HTML", "CSS", "JavaScript", "Java"]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["Spring MVC", "Spring Boot", "React", "React Native", "Angular", "Node.js"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Other Skills",
    icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    skills: ["Gestion de projet", "Gestion du temps", "Travail d'équipe"]
  }
];

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit includes a diverse range of languages, frameworks, and technologies
            that I've acquired through both formal education and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow 
                         transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">HTML/CSS</span>
                  <span className="text-gray-500 dark:text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                  <span className="text-gray-500 dark:text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Java</span>
                  <span className="text-gray-500 dark:text-gray-400">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">React & React Native</span>
                  <span className="text-gray-500 dark:text-gray-400">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Spring Framework</span>
                  <span className="text-gray-500 dark:text-gray-400">70%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                  <span className="text-gray-500 dark:text-gray-400">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Angular</span>
                  <span className="text-gray-500 dark:text-gray-400">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Databases (SQL/NoSQL)</span>
                  <span className="text-gray-500 dark:text-gray-400">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;