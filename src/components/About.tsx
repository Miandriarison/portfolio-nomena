import React from 'react';
import { MapPin, Mail, Phone, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              A Passionate Developer Ready for Challenges
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a motivated Web and Mobile Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in technology is driven by my curiosity and passion for creating intuitive, user-friendly applications 
              that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm constantly expanding my skills through both formal education and self-learning. 
              My recent internship experience at MEAH provided me with valuable insights into developing 
              real-world applications, while working within agile environments.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me on the basketball court with my club BCAS, 
              exploring new games, or enjoying music.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400">Cité Isotry Lot 153</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+261 38 49 569 92</p>
                  <p className="text-gray-600 dark:text-gray-400">+261 33 41 293 87</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 break-all">miandriarisonnomenaleonce@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-gray-800 dark:text-gray-200 font-medium">Languages</h4>
                  <div className="space-y-2 mt-2">
                    <div>
                      <span className="text-gray-700 dark:text-gray-300">Malgache</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-300">Français</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-700 dark:text-gray-300">English</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;