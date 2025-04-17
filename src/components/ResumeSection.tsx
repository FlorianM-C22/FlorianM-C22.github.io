import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Experience {
  id: number
  period: string
  role: string
  company: string
  description: string
}

interface Education {
  id: number
  period: string
  degree: string
  institution: string
  description: string
}

const ResumeSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      period: "2024 - Present",
      role: "Junior Web Developer",
      company: "Shortways",
      description:
        "Contributing to the development and maintenance of a digital adoption platform designed for large enterprises. The solution integrates seamlessly with ERP and HRIS software, acting as an intelligent assistant that enhances user experience by simplifying navigation and improving usability across complex business tools. Worked primarily with React and TypeScript, focusing on delivering scalable, user-friendly features tailored to enterprise needs.",
    },
  ]

  const education: Education[] = [
    {
      id: 1,
      period: "2024 - 2026",
      degree: "Extension Programs: Web Full Stack",
      institution: "Holberton School",
      description:
        "Second-year specialization centered on modern web development technologies and best practices. Training included front-end frameworks such as React, back-end development with Node.js, API design, state management, and database integration. Projects focused on building full-featured, scalable web applications while applying agile methodologies and ensuring code quality and maintainability.",
    },
    {
      id: 2,
      period: "2023 - 2024",
      degree: "Foundations of Computer Science",
      institution: "Holberton School",
      description:
        "Completion of an intensive first-year program focused on core software engineering principles. Curriculum included low-level programming in C, algorithms and data structures, Linux and system administration, as well as Git and collaborative workflows. Emphasis placed on peer learning, autonomy, and project-based assessments to simulate real-world development environments.",
    },
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUpVariants}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Resume</span>
          </motion.h2>
          <motion.div
            variants={fadeInUpVariants}
            custom={1}
            className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeInUpVariants}
            custom={2}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            My education and professional experience in web development and
            design.
          </motion.p>
          <motion.div variants={fadeInUpVariants} custom={3} className="mb-12">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2"
            >
              <div className="h-8 w-8 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              Professional Experience
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] h-6 w-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full mb-2">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {exp.role}
                  </h4>
                  <h5 className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {exp.company}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2"
            >
              <div className="h-8 w-8 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              Education
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-900">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] h-6 w-6 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full mb-2">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <h5 className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {edu.institution}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
