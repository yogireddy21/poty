import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hi, I'm Yogeswar Reddy
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Full Stack Developer specializing in building exceptional digital experiences.
          I am passionate about solving complex problems and creating impactful solutions.
        </p>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          With expertise in modern web development frameworks, competitive programming, and a deep understanding of
          data structures and algorithms, I am committed to delivering top-notch software solutions.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1CPbW49az6QmQN1aX9f1pEnHFoXf1dL2C/view?usp=drive_link"
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/yogireddy21" className="social-link">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yogeswar-reddy-rachamallu-97550826b/" className="social-link">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://drive.google.com/file/d/1CPbW49az6QmQN1aX9f1pEnHFoXf1dL2C/view?usp=drive_link" className="social-link">
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
