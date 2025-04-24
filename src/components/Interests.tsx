import React from 'react';
import { Dribbble as Dribble, Gamepad2, Music } from 'lucide-react';

const interestsData = [
  {
    title: "Basketball",
    description: "Active member of the BCAS club, passionate about team play and strategy.",
    icon: <Dribble className="w-8 h-8 text-orange-500 dark:text-orange-400" />
  },
  {
    title: "Video Games",
    description: "Enthusiast of both strategy and action games, enjoying the challenge and creativity.",
    icon: <Gamepad2 className="w-8 h-8 text-green-500 dark:text-green-400" />
  },
  {
    title: "Music",
    description: "Avid music listener with diverse tastes spanning multiple genres.",
    icon: <Music className="w-8 h-8 text-purple-500 dark:text-purple-400" />
  }
];

const Interests: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Interests</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            When I'm not coding, here's what keeps me engaged and inspired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {interestsData.map((interest, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg 
                         transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 shadow-md">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {interest.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;