import { motion, useInView } from "motion/react";
import { Code2, Cpu, Shield } from "lucide-react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            I'm an aspiring Full Stack Developer and B.Tech IT student passionate about building real-world applications using modern technologies. I enjoy solving complex problems, designing clean user interfaces, and developing intelligent systems with AI/ML.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#C5C6C7] max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            My journey spans across web development, machine learning, cybersecurity, and automation projects. I love transforming ideas into working prototypes, exploring emerging technologies, and contributing to impactful solutions.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#C5C6C7] max-w-3xl mx-auto mt-4 md:mt-6 px-4">
            Along with strong technical skills, I value clarity, teamwork, and continuous learning. My goal is to evolve into a developer who builds meaningful, user-centered digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}