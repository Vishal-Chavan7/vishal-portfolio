import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';
import { about } from '../data/portfolio';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const highlights = [
    { icon: Code2, text: about.highlights[0], color: 'text-blue-500' },
    { icon: Rocket, text: about.highlights[1], color: 'text-purple-500' },
    { icon: Sparkles, text: about.highlights[2], color: 'text-pink-500' },
    { icon: Heart, text: about.highlights[3], color: 'text-red-500' },
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-950" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl blur-2xl opacity-20 dark:opacity-10"></div>
              
              {/* Main Content Box */}
              <div className="relative glass-effect rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Code2 size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display">Full Stack Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">MERN Specialist</p>
                  </div>
                </div>

                {/* Code Snippet Visual */}
                <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-green-400">
{`const developer = {
  name: "MERN Developer",
  skills: ["React", "Node.js", 
           "MongoDB", "Express"],
  passion: "Building Solutions",
  status: "Available for work"
};`}
                  </pre>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <div className={`${highlight.color} flex-shrink-0 mt-1`}>
                      <Icon size={24} />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {highlight.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="#contact"
                className="inline-block btn-primary"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
