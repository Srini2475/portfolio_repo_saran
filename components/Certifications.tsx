import { motion, useInView } from "motion/react";
import { Award, CheckCircle } from "lucide-react";
import { useRef } from "react";

const certifications = [
  {
    title: "IBM – Python 101 for Data Science",
    issuer: "IBM",
    icon: "🐍",
  },
  {
    title: "IBM – Prompt Engineering",
    issuer: "IBM",
    icon: "🤖",
  },
  {
    title: "MATLAB – Machine Learning Onramp",
    issuer: "MathWorks",
    icon: "📊",
  },
  {
    title: "MATLAB – Computer Vision Onramp",
    issuer: "MathWorks",
    icon: "👁️",
  },
  {
    title: "SkillUp – Generative AI for Beginners",
    issuer: "SkillUp",
    icon: "✨",
  },
  {
    title: "Kaggle – Python Coder Badge",
    issuer: "Kaggle",
    icon: "🏅",
  },
  {
    title: "Kaggle – Community Badge",
    issuer: "Kaggle",
    icon: "👥",
  },
];

const achievements = [
  "Selected for Smart India Hackathon 2024 Internal Round",
  "Completed multiple advanced technical workshops",
  "Built multiple AI and full-stack projects independently",
  "Strong foundation in programming, teamwork, and problem-solving",
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#66FCF1] opacity-5 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#45A29E] opacity-5 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
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
            Certifications & Achievements
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            Professional certifications and notable accomplishments
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl text-[#66FCF1] mb-6 md:mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="glass-card p-5 md:p-6 relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#66FCF1] to-[#45A29E] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                    {cert.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-base md:text-lg text-[#C5C6C7] mb-2 group-hover:text-[#66FCF1] transition-colors">
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <p className="text-xs md:text-sm text-[#45A29E]">
                    {cert.issuer}
                  </p>

                  {/* Check Icon */}
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#66FCF1] opacity-50 group-hover:opacity-100 transition-opacity" />
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

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-[#66FCF1] mr-3 md:mr-4" />
              <h3 className="text-2xl md:text-3xl text-[#66FCF1]">
                Key Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#66FCF1] bg-opacity-10 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#66FCF1]" />
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-[#C5C6C7] ml-3">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}