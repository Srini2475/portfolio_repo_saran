import { motion, useInView } from "motion/react";
import { Briefcase, Award } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    icon: Briefcase,
    title: "Machine Learning Intern",
    company: "Future Interns",
    period: "2024",
    description: "Worked on sales forecasting using machine learning techniques. Built predictive models, analyzed datasets, and learned real-world ML deployment workflows.",
    highlights: [
      "Developed sales forecasting models",
      "Analyzed large datasets",
      "Learned ML deployment workflows",
    ],
  },
  {
    icon: Award,
    title: "Smart India Hackathon",
    company: "Internal Round Participant",
    period: "2024",
    description: "Developed a complete functional prototype within a team environment, focusing on problem-solving, UI design, and system integration.",
    highlights: [
      "Built farmer marketplace application",
      "Collaborated in team environment",
      "Focused on UI/UX and system integration",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#66FCF1] opacity-5 blur-3xl rounded-full"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#45A29E] opacity-5 blur-3xl rounded-full"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            Professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                rotateY: 3,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="glass-card p-6 md:p-8 relative group cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#66FCF1] to-[#45A29E] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#66FCF1] to-[#45A29E] rounded-xl flex items-center justify-center"
                    style={{
                      boxShadow: "0 0 30px rgba(102, 252, 241, 0.3)",
                    }}
                  >
                    <exp.icon className="w-6 h-6 md:w-8 md:h-8 text-[#0B0C10]" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl text-[#66FCF1] mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base md:text-lg text-[#C5C6C7]">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs md:text-sm text-[#45A29E] bg-[#45A29E] bg-opacity-10 px-3 py-1 rounded-full self-start mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-[#C5C6C7] mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center text-sm md:text-base text-[#C5C6C7]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#66FCF1] mr-3 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3D Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[#66FCF1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  boxShadow: "0 0 30px rgba(102, 252, 241, 0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}