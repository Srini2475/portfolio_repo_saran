import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.", {
      style: {
        background: "#1F2833",
        color: "#C5C6C7",
        border: "1px solid #66FCF1",
      },
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      {/* Abstract 3D Wave Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Layers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${30 + i * 20}% ${40 + i * 10}%, rgba(102, 252, 241, ${0.02 + i * 0.01}), transparent 60%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 180],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#66FCF1] opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#45A29E] opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#C5C6C7] max-w-3xl mx-auto px-4">
            I'm always open to internship opportunities, collaborations, and exciting projects.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-[#C5C6C7]">Name</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0C10] border-[#45A29E] text-[#C5C6C7] focus:border-[#66FCF1] focus:ring-[#66FCF1]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#C5C6C7]">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0C10] border-[#45A29E] text-[#C5C6C7] focus:border-[#66FCF1] focus:ring-[#66FCF1]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[#C5C6C7]">Message</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0B0C10] border-[#45A29E] text-[#C5C6C7] focus:border-[#66FCF1] focus:ring-[#66FCF1] min-h-32"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#66FCF1] hover:bg-[#45A29E] text-[#0B0C10] glow-button py-6"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl mb-6 text-[#66FCF1]">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:saranbhuvana21@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-[#66FCF1] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <Mail className="w-6 h-6 text-[#66FCF1]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#C5C6C7]">Email</p>
                    <p className="text-[#66FCF1] group-hover:underline">
                      saranbhuvana21@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+919123561839"
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-[#66FCF1] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <Phone className="w-6 h-6 text-[#66FCF1]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#C5C6C7]">Phone</p>
                    <p className="text-[#66FCF1] group-hover:underline">
                      +91 91235 61839
                    </p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/saran-g-85597b315"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-[#66FCF1] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <Linkedin className="w-6 h-6 text-[#66FCF1]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#C5C6C7]">LinkedIn</p>
                    <p className="text-[#66FCF1] group-hover:underline">
                      linkedin.com/in/saran-g-85597b315
                    </p>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/sarang0719"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-[#66FCF1] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-opacity-20 transition-all">
                    <Github className="w-6 h-6 text-[#66FCF1]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#C5C6C7]">GitHub</p>
                    <p className="text-[#66FCF1] group-hover:underline">
                      github.com/sarang0719
                    </p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Additional CTA */}
            <motion.div
              className="glass-card p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#66FCF1] to-[#45A29E] opacity-5"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="relative z-10">
                <h4 className="text-xl mb-3 text-[#66FCF1]">
                  Open to Opportunities
                </h4>
                <p className="text-[#C5C6C7] mb-4">
                  I'm actively looking for internship opportunities and exciting projects to work on. Let's build something amazing together!
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                  onClick={() => window.location.href = 'mailto:saranbhuvana21@gmail.com'}
                >
                  Start a Conversation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
