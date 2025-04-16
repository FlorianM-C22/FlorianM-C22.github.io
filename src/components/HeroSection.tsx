
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10"
      >
        <div className="text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6"
          >
            Hello, I'm <span className="text-indigo-700 dark:text-indigo-300">Your Name</span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
              I'm a <span className="font-semibold">Web Developer</span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8"
              onClick={() => scrollToAbout()}
            >
              About Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 px-8"
              onClick={() => {
                const portfolioSection = document.getElementById("portfolio");
                if (portfolioSection) {
                  window.scrollTo({
                    top: portfolioSection.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="text-indigo-600 dark:text-indigo-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
