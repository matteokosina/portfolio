import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import enclaveLogo from '../assets/enclave.png';
import unical from '../assets/unical.png';
import blog from '../assets/blog.png';
import homeserver from '../assets/homeserver.jpeg';  
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ["All", "React", "Kubernetes", "WebAssembly", "CI/CD"];

  const projects = [
    {
      id: 1,
      title: "Enclave Runner",
      description:
        "An Open-source platform to seamlessly execute isolated tasks and workflows with fine-grained control over resource access and permissions leveraging WebAssembly.",
      category: "WebAssembly",
      technologies: [
        "Golang",
        "gRPC",
        "Redis",
        "OpenAPI",
        "WASM",
        "PostgreSQL",
      ],
      liveUrl: "https://enclave-runner.de/",
      githubUrl: "https://github.com/EnclaveRunner",
      featured: true,
      image: enclaveLogo,
    },
    {
      id: 2,
      title: "Travel Blog",
      description:
        "Travel blog for my time working abroad in Vancouver, Canada.",
      category: "React",
      technologies: ["React", "Github Actions", "Shadcn UI", "TypeScript", "Docusaurus", "GitHub Pages"],
      liveUrl: "https://matteokosina.github.io/canada",
      githubUrl: "https://github.com/matteokosina/canada",
      image: blog,
      featured: true,
    },
    {
      id: 3,
      title: "Kubernetes Home-Server",
      description:
        "Single-Node Kubernetes home server setup running fluxCD for GitOps-based management of various services and Prometheus + Grafana for monitoring.",
      category: "Kubernetes",
      technologies: [
        "FluxCD",
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Helm",
        "KubeSeal",
        "Traefik",
        "much more :)",
      ],
      image: homeserver,
      featured: true,
    },
    {
      id: 4,
      title: "UniCal",
      description:
        "An iCal proxy to filter calendar events from ICal providers to fit your personal preference. This project originated from a university ICal service that provided lectures of which I was not part of. Thus I created this proxy to filter out only the lectures I was enrolled in. It leverages Github Actions so that the proxy service is running wihtout any server costs.",
      category: "CI/CD",
      technologies: ["Github Actions", "Golang", "ICal", "BubbleTea TUI"],
      githubUrl: "https://github.com/matteokosina/unical",
      image: unical,
      featured: false,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="text-blue-400 text-center text-lg mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Things I've built
        </motion.p>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-white mb-4">
            <Filter size={18} />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/10 rounded-xl overflow-hidden hover:bg-slate-700/80 transition-colors duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative bg-slate-700/60 h-48 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Eye size={48} className="text-gray-500" />
                    </div>
                  )}
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-slate-700/60 border border-blue-500/20 text-blue-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  {(project.liveUrl && project.liveUrl !== '#') || (project.githubUrl && project.githubUrl !== '#') ? (
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Like what you see? Let's build something amazing together!
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;