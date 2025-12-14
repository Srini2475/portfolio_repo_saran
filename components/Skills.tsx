import { motion, useInView } from "motion/react";
import { Code, Database, Brain, Wrench, Shield, Palette } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & Programming",
    skills: ["Node.js", "Python", "Java", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: ["Power BI", "Firebase", "MySQL"],
  },
  {
    icon: Brain,
    title: "AI & ML",
    skills: ["NLP basics", "ML workflow", "Conversational AI", "Predictive modelling"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "Linux", "VS Code", "MATLAB", "Prompt Engineering"],
  },
  {
    icon: Shield,
    title: "Other Interests",
    skills: ["Cybersecurity", "UI/UX", "Automation", "Open-source"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 5,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="glass-card p-6 md:p-8 relative group cursor-pointer overflow-hidden"
            >
              {/* Animated Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#66FCF1] to-[#45A29E] opacity-0 group-hover:opacity-5"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="mb-4 md:mb-6 inline-flex p-3 md:p-4 bg-gradient-to-br from-[#66FCF1] to-[#45A29E] rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    boxShadow: "0 0 30px rgba(102, 252, 241, 0.3)",
                  }}
                >
                  <category.icon className="w-8 h-8 md:w-10 md:h-10 text-[#0B0C10]" />
                </motion.div>

                <h3 className="text-xl md:text-2xl mb-3 md:mb-4 text-[#66FCF1]">
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="px-3 py-1 bg-[#66FCF1] bg-opacity-10 rounded-full text-xs md:text-sm text-[#C5C6C7] border border-[#66FCF1] border-opacity-20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#66FCF1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}