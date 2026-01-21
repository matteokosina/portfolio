import { motion } from 'framer-motion';
import { Code, Palette, Waypoints } from 'lucide-react';
import profileImage from '../assets/matteo.jpeg';

const About = () => {
  const skills = [
    { name: 'Backend Development', icon: Code, description: 'Golang, TypeScript' },
    { name: 'Cloud Infrastructure', icon: Palette, description: 'AWS, BTP, Docker, Kubernetes, Crossplane' },
    { name: 'CI / CD', icon: Waypoints, description: 'GitHub Actions' },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
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
          About Me
        </motion.h2>

        <motion.p
          className="text-blue-400 text-center text-lg mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get to know me better
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Hello! I'm Matteo Kosina</h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student (B.Sc.) at DHBW Karlsruhe and STAR Student at SAP, 
                passionate about building cloud infrastructure and scalable systems. Through my 
                vocational training rotations at SAP, I've gained hands-on experience with 
                cutting-edge cloud technologies and enterprise software development.
              </p>
              <p>
                My journey spans across various SAP teams - from performance profiling of Cloud Foundry 
                core services to developing UI features for Concur, and designing tools that integrate 
                cloud resources into Kubernetes' declarative management systems. I specialize in 
                Golang, TypeScript, and cloud-native technologies like Crossplane and WebAssembly.
              </p>
              <p>
                When I'm not working on enterprise solutions, I'm building open-source projects like 
                Enclave Runner - a platform for executing isolated tasks with WebAssembly. I love 
                turning complex infrastructure challenges into elegant, automated solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Profile Image */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Matteo Kosina"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-500/20 shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-blue-400">Karlsruhe / Walldorf, Germany</span>
                </div>
                <div className="flex justify-between">
                  <span>Experience:</span>
                  <span className="text-blue-400">3 Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="text-green-400">Open to Work (October 2026)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.h3
          className="text-3xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/10 rounded-xl p-6 text-center hover:bg-slate-700/80 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <IconComponent size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;