import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Abstract 3D Wave Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layers */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${50 + i * 10}% ${50 + i * 5}%, rgba(102, 252, 241, ${0.03 + i * 0.01}), transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}

        {/* Flowing Wave Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#66FCF1" stopOpacity="0" />
              <stop offset="50%" stopColor="#66FCF1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#45A29E" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M 0 ${200 + i * 150} Q 400 ${150 + i * 150} 800 ${200 + i * 150} T 1600 ${200 + i * 150}`}
              stroke="url(#waveGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#66FCF1] opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#45A29E] opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Large Centered LUREVIA Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 md:mb-8"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider mb-3 md:mb-4"
              style={{
                background: "linear-gradient(135deg, #66FCF1 0%, #45A29E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 80px rgba(102, 252, 241, 0.5)",
              }}
            >
              SARAN G.
            </motion.h1>
            <motion.div
              className="text-base sm:text-lg md:text-2xl text-[#66FCF1] tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              FULL STACK DEVELOPER
            </motion.div>
          </motion.div>

          {/* Main Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-[#C5C6C7] leading-tight px-4">
              I build interactive, intelligent, and scalable digital experiences.
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 text-[#C5C6C7] max-w-3xl mx-auto px-4"
          >
            Full Stack Developer • AI/ML Enthusiast • Cybersecurity Learner<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Let's turn ideas into clean, modern, high-performance applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20 px-4"
          >
            <Button
              size="lg"
              className="bg-[#66FCF1] hover:bg-[#45A29E] text-[#0B0C10] glow-button group px-6 py-5 md:px-8 md:py-6 w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10] px-6 py-5 md:px-8 md:py-6 transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Floating 3D UI Mockups and Glowing Particles */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Cursor-reactive Particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${i % 2 === 0 ? '#66FCF1' : '#45A29E'}, transparent)`,
                    left: `${10 + (i * 8)}%`,
                    top: `${15 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

            {/* 3D Floating Mockup Elements */}
            <motion.div
              className="absolute top-20 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 glass-card opacity-30"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 15, 0],
                rotateX: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 0 40px rgba(102, 252, 241, 0.3)",
              }}
            />
            <motion.div
              className="absolute bottom-32 right-10 md:right-20 w-28 h-28 md:w-40 md:h-40 glass-card opacity-30"
              animate={{
                y: [0, 20, 0],
                rotateY: [0, -15, 0],
                rotateX: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 0 40px rgba(69, 162, 158, 0.3)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#66FCF1] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 md:h-3 bg-[#66FCF1] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}