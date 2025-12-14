import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Health Care Chatbot",
    category: "AI/ML • Python",
    description: "An AI-powered chatbot that helps users with symptom analysis and appointment suggestions using NLP. Built real-time interaction with cloud database integration.",
    technologies: ["Python", "NLP", "Firebase", "MySQL"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaGVhbHRoY2FyZXxlbnwwfHx8fDE3NjM3MjA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    title: "Cybersecurity Bug Shield",
    category: "Web Development",
    description: "A secure vulnerability reporting platform that helps organizations track security issues efficiently. Includes a structured UI, role-based views, and responsive workflows.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc2MzcyMDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    title: "Farmer Marketplace App",
    category: "SIH 2024 Internal",
    description: "A solution enabling farmers to sell directly to consumers, supported by AI-powered price navigation and location-based connectivity. Selected for Smart India Hackathon internal round.",
    technologies: ["HTML", "CSS", "JavaScript", "Java"],
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwbWFya2V0fGVufDB8fHx8MTc2MzcyMDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
  {
    title: "Cockrel Solutions Portfolio",
    category: "Web Development",
    description: "A clean, modern website built for a startup to showcase services, workflow, and brand identity. Focused on UI/UX and lightweight performance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWdufGVufDB8fHx8MTc2MzcyMDg2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            A showcase of my most impactful projects and developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden relative h-full flex flex-col">
                {/* Image Container with 3D effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <motion.div
                    className="inline-block px-3 py-1 bg-[#66FCF1] bg-opacity-10 rounded-full mb-3 self-start"
                  >
                    <span className="text-sm text-[#66FCF1]">{project.category}</span>
                  </motion.div>
                  <h3 className="text-2xl text-[#C5C6C7] group-hover:text-[#66FCF1] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#C5C6C7] mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-[#45A29E] bg-opacity-20 text-[#66FCF1] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#66FCF1] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px rgba(102, 252, 241, 0.3)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}