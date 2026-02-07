import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { experience, education } from '../data/portfolio';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    ...experience.map(item => ({ ...item, type: 'work' })),
    ...education.map(item => ({ ...item, type: 'education' }))
  ].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0].split(' ').pop());
    const yearB = parseInt(b.period.split(' - ')[0].split(' ').pop());
    return yearB - yearA;
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Experience & Education</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-500 to-purple-500" />

          {timeline.map((item, index) => {
            const Icon = item.type === 'work' ? Briefcase : GraduationCap;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative mb-12 ${
                  isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${
                  isLeft ? 'md:right-0 left-6' : 'md:left-0 left-6'
                } transform ${
                  isLeft ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'
                } -translate-x-1/2 md:translate-y-0`}>
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'work'
                        ? 'bg-gradient-to-br from-primary-500 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 to-pink-600'
                    } shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 md:mr-16">
                  <motion.div
                    className="card hover:shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold font-display mb-2">
                        {item.title || item.degree}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1 font-medium text-primary-600 dark:text-primary-400">
                          <Briefcase size={14} />
                          {item.company || item.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'work'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-display">Want to know more?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Download my resume for a complete overview of my experience, skills, and accomplishments.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block btn-primary"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
