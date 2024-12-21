import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="space-y-6 animate-fade-in">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hello! I'm a passionate full-stack developer and competitive programmer with a strong foundation in software development and a drive to solve complex problems. With a track record of high-performing projects and global competition rankings, I've had the privilege to contribute to impactful applications and collaborate with diverse teams.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey began during my undergraduate studies when I developed a keen interest in building efficient systems and creating solutions with real-world applications. Since then, I've immersed myself in mastering technologies like React.js, Python, C++, Java, and frameworks that power innovative web and software development.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From leading platforms like TestBuddy to solving over 900 problems on LeetCode, I constantly strive to stay at the forefront of technology and best practices while crafting meaningful digital experiences.
          </p>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white inline-block">
            <p className="text-lg font-medium">
              "I believe in writing clean, maintainable code and creating intuitive
              user experiences that make a difference."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
