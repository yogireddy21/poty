import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import spotify from './spotify.png';
import drow from './driverdrowsy.jpeg';
import buddy from './testbuddy_image.jpg';
import movie from './movierecommend.jpeg';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  githubLink: string;
}

const projects: Project[] = [
   {
    title: "DocMind",
    description:
      "Developed a Google Docs-like collaboration and editing platform equipped with AI-powered features like document summarization and answering code-related questions using Groq API. Utilized a tech stack including Next.js, Shadcn, Liveblocks, Clerk, Convex, and TypeScript to deliver seamless real-time collaboration and advanced document management capabilities.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f954f2e9?auto=format&fit=crop&w=800&q=80",
    techStack: ["Next.js", "Shadcn", "Liveblocks", "Clerk", "Convex", "TypeScript"],
    demoLink: "https://docmind-two.vercel.app/",
    githubLink: "https://github.com/yogireddy21/docx"
  },
  {
    title: "TestBuddy: Online Test Conducting Platform",
    description:
      "Created an online platform for 150+ educators to manage 5,000+ coding questions, improving teaching and increasing student performance by 25%. Developed a real-time code evaluation system for 800+ students, enhancing coding proficiency by 35% and cutting feedback time in half. Designed a results dashboard for 1,200+ students, improving performance tracking and data analysis.",
    image: buddy,
    techStack: ["React.js", "MongoDB", "Tailwind CSS", "Express.js", "Node.js", "JavaScript"],
    demoLink: "https://testbuddy-frontend.vercel.app/",
    githubLink: "https://github.com/yogireddy21/testbuddy"
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Engineered a robust Driver Drowsiness Detection System utilizing CNN technology to detect signs of drowsiness, prompt audio alerts, and enhance safety during travel. Minimized the occurrence of accidents and ensured secure and vigilant journeys, resulting in a 60% decrease in drowsiness-related incidents.",
    image: drow,
    techStack: ["Convolutional Neural Networks (CNN)", "XML Schema", "Machine Learning", "TensorFlow"],
    githubLink: "https://github.com/yogireddy21/Driver-Drowsy"
  },
  {
    title: "Simple Estate",
    description:
      "Crafted an intuitive web interface for effortless property image uploads, enriched search features, and streamlined buying/renting options, resulting in a remarkable 40% boost in user engagement.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/yogireddy21/simple-estate"
  },
  {
    title: "Movie Recommendation System",
    description:
      "In this Streamlit movie recommendation project, users pick their favorite movie, triggering advanced machine learning algorithms. The application then delivers a personalized list of the top 5 recommended movies based on the selected film’s characteristics and user preferences, enhancing the movie-watching experience.",
    image: movie,
    techStack: ["Natural Language Processing (NLP)", "Machine Learning"],
    githubLink: "https://github.com/yogireddy21/MovieRecommendationSystem"
  },
  {
    title: "Spotify Clone",
    description:
      "Built a React.js Spotify clone that enhances user playlists seamlessly with Spotify API integration, providing an uninterrupted listening experience devoid of search distractions. Enjoy pure musical pleasure on this sleek platform.",
    image: spotify,
    techStack: ["Spotify API", "React.js"],
    githubLink: "https://github.com/yogireddy21/Spotify-colne"
  }
 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (project.title === "TestBuddy: Online Test Conducting Platform" || project.title === "DocMind") && (
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
