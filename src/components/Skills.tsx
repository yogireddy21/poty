import React from 'react';
import {
  Code2,
  Database,
  Layout,
  Server,
  GitBranch,
  BrainCircuit
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'C, C++, Java (Basic), Python, MySQL', icon: <Code2 />, level: 90, category: 'Languages' },
  { name: 'Data Structures and Algorithms', icon: <Code2 />, level: 95, category: 'Core Concepts' },
  { name: 'Object-Oriented Programming (OOP)', icon: <Layout />, level: 85, category: 'Core Concepts' },
  { name: 'Operating Systems', icon: <Server />, level: 85, category: 'Core Concepts' },
  { name: 'Database Management Systems (DBMS)', icon: <Database />, level: 85, category: 'Core Concepts' },
  { name: 'Networks', icon: <Server />, level: 80, category: 'Core Concepts' },
  { name: 'Machine Learning', icon: <BrainCircuit />, level: 80, category: 'Core Concepts' },
  { name: 'HTML', icon: <Layout />, level: 85, category: 'Tools & Technologies' },
  { name: 'CSS', icon: <Layout />, level: 85, category: 'Tools & Technologies' },
  { name: 'Java Script', icon: <Code2 />, level: 85, category: 'Tools & Technologies' },
  { name: 'React.js', icon: <Code2 />, level: 85, category: 'Tools & Technologies' },
  { name: 'Node.js', icon: <Code2 />, level: 80, category: 'Tools & Technologies' },
  { name: 'Express.js', icon: <Code2 />, level: 80, category: 'Tools & Technologies' },
  { name: 'Git', icon: <GitBranch />, level: 85, category: 'Tools & Technologies' },
  { name: 'REST API', icon: <Code2 />, level: 80, category: 'Tools & Technologies' },
  { name: 'NoSQL', icon: <Database />, level: 85, category: 'Tools & Technologies' },
  { name: 'AWS', icon: <Server />, level: 75, category: 'Tools & Technologies' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                  style={
                    {
                      width: '0%',
                      animation: 'growWidth 1.5s ease-out forwards',
                      animationDelay: `${index * 100 + 500}ms`,
                    }
                  }
                />
                <style>{`
                  @keyframes growWidth {
                    from { width: 0% }
                    to { width: ${skill.level}% }
                  }
                `}</style>
              </div>
              <div className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
