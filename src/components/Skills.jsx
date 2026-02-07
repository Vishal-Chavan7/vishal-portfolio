import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Monitor, Server, Wrench } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: Monitor, skills: skills.frontend },
    { id: 'backend', label: 'Backend', icon: Server, skills: skills.backend },
    { id: 'tools', label: 'Tools & Others', icon: Wrench, skills: skills.tools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My technical expertise and tools I work with
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tabs.find(tab => tab.id === activeTab)?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card group"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              {/* Hover Effect */}
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Proficiency: {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : 'Intermediate'}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-display">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and best practices to stay at the forefront of web development. 
              Currently diving deeper into microservices architecture, Docker containerization, 
              and cloud-native technologies.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
