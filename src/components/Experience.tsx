import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SAP BTP, Cloud Foundry",
      company: "SAP SE",
      location: "Walldorf, Germany",
      period: "Sep 2023 - Dec 2023",
      description:
        "Performed performance profiling of Cloud Foundry core services with pprof, isolating critical bottlenecks and validating against established anomaly signatures.",
      achievements: [
        "Profiling with pprof, golangs built-in profiling analysis tool",
        "Identifying code smells and performance bottlenecks",
      ],
      technologies: ["Cloud Foundry", "Golang", "pprof"],
    },
    {
      title: "SAP Concur",
      company: "SAP SE",
      location: "Walldorf, Germany",
      period: "Jul 2024 - Sep 2024",
      description:
        "Developed and delivered UI features for the Concur Web application, now deployed and running in production.",
      achievements: [
        "React-based frontend development",
        "Experience with Agile methodologies and CI/CD pipelines",
        "Collaborated with cross-functional teams to define, design, and ship new features",
      ],
      technologies: ["React", "AWS", "CI/CD"],
    },
    {
      title: "SAP Cloud Orchestrator",
      company: "SAP SE",
      location: "Walldorf, Germany",
      period: "Jan 2025 - Mar 2025",
      description:
        "Designed and developed a tool that integrates pre-existing cloud resources into Crossplane and Kubernetes’ declarative management systems, enabling organizations to seamlessly adopt Infrastructure-as-Data practices on live cloud environments without service disruption. This solution bridges the gap between traditional infrastructure and modern GitOps workflows, reducing manual migration effort and accelerating operational consistency.",
      achievements: [
        "Modular and reusable software design and architecture",
        "CLI development with Cobra",
        "Public Speaking at internal tech talks + internal developer conference",
      ],
      technologies: ["Golang", "Crossplane", "Kubernetes", "Cloud Foundry", "BTP"],
    },
    {
      title: "SAP Concur",
      company: "SAP SE",
      location: "Vancouver, Canada",
      period: "Jul 2025 - Sep 2025",
      description:
        "Developed an automated pipeline that analyzes changes in CloudFormation templates within Git repositories and estimates the resulting operational cost before deployment. This solution increases transparency in the deployment lifecycle and empowers developers to proactively evaluate the financial impact of infrastructure changes, reducing the risk of unexpected cost escalations.",
      achievements: [
        "AWS Pricing API integration",
        "Infrastructure-as-Code analysis",
        "CI/CD pipeline automation",
      ],
      technologies: ["Golang", "AWS", "CI/CD"],
    },
  ];

  const education = [
    {
      degree: "High School Diploma",
      school: "Eichendorff Gymnasium, Ettlingen",
      period: "2015 - 2023",
      details: "Final Grade: 1.0 (German Abitur)",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Corporate State University (DHBW), Karlsruhe",
      period: "2023 - ongoing (planned graduation: Sep 2026)",
      details: "",
    },
  ];

  const certifications: string[] = [];

  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <motion.p
          className="text-blue-400 text-center text-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional journey
        </motion.p>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Work Experience (Vocational Training Rotations)</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.slice().reverse().map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                      <MapPin size={16} className="ml-2" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <h5 className="text-purple-400 font-semibold mb-3">{exp.company}</h5>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Award size={16} className="text-yellow-400" />
                        Key Learnings:
                      </h6>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-400 font-medium mb-1">{edu.school}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-300 text-sm">{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>

          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="glass-morphism rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-300">{cert}</span>
                      <ExternalLink size={16} className="text-blue-400 ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;