import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sarang0719",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saran-g-85597b315",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:saranbhuvana21@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative py-12 md:py-16 border-t border-[#45A29E] border-opacity-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center mb-4"
            >
              <span className="text-xl md:text-2xl text-gradient">
                SARAN G.
              </span>
            </motion.div>
            <p className="text-sm md:text-base text-[#C5C6C7] max-w-md">
              Full Stack Developer • AI/ML Enthusiast •
              Cybersecurity Learner
              <br />
              Building interactive, intelligent, and scalable
              digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg text-[#66FCF1] mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-[#C5C6C7] hover:text-[#66FCF1] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base md:text-lg text-[#66FCF1] mb-3 md:mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-sm md:text-base text-[#C5C6C7] hover:text-[#66FCF1] transition-colors group"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#66FCF1] bg-opacity-10 rounded-lg flex items-center justify-center mr-2 md:mr-3 group-hover:bg-opacity-20 transition-all group-hover:shadow-[0_0_20px_rgba(102,252,241,0.3)]">
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#45A29E] border-opacity-20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#C5C6C7] text-xs md:text-sm text-center md:text-left">
            © 2025 Saran G. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 md:w-12 md:h-12 bg-[#66FCF1] bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all group"
            style={{
              boxShadow: "0 0 20px rgba(102, 252, 241, 0.0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(102, 252, 241, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(102, 252, 241, 0.0)";
            }}
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-[#66FCF1]" />
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#66FCF1] opacity-5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#45A29E] opacity-5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}