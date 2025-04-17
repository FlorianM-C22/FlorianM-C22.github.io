import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import PortfolioSection from "@/components/PortfolioSection"
import ResumeSection from "@/components/ResumeSection"
import ContactSection from "@/components/ContactSection"

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "portfolio", "resume", "contact"]
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              Florian Meignan
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-2 md:space-x-6"
            >
              <Button
                variant="ghost"
                className={`${
                  activeSection === "hero"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => scrollToSection("hero")}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className={`${
                  activeSection === "about"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className={`${
                  activeSection === "portfolio"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => scrollToSection("portfolio")}
              >
                Portfolio
              </Button>
              <Button
                variant="ghost"
                className={`${
                  activeSection === "resume"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => scrollToSection("resume")}
              >
                Resume
              </Button>
              <Button
                variant="ghost"
                className={`${
                  activeSection === "contact"
                    ? "text-indigo-600 dark:text-indigo-400"
                    : ""
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <ThemeToggle />
              <a
                href="https://github.com/florianM-C22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/florian-meignan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Florian Meignan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/florianM-C22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/florian-meignan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:florian.meignan@gmail.com"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
