
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
}

interface Education {
  id: number;
  period: string;
  degree: string;
  institution: string;
  description: string;
}

const ResumeSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      period: "2021 - Present",
      role: "Senior Web Developer",
      company: "TechCorp Inc.",
      description: "Developed and maintained complex web applications with React and TypeScript. Led a team of 3 developers and implemented CI/CD pipelines to streamline deployment processes.",
    },
    {
      id: 2,
      period: "2019 - 2021",
      role: "Web Developer",
      company: "Digital Solutions Ltd.",
      description: "Built responsive websites and web applications using modern JavaScript frameworks. Collaborated with designers to implement UI/UX improvements and optimize website performance.",
    },
    {
      id: 3,
      period: "2017 - 2019",
      role: "Junior Developer",
      company: "WebStart Agency",
      description: "Assisted in the development of client websites, fixed bugs, and implemented new features using HTML, CSS, and JavaScript.",
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      period: "2015 - 2017",
      degree: "Master's in Computer Science",
      institution: "Tech University",
      description: "Specialized in web technologies and software engineering. Completed thesis on optimizing web application performance.",
    },
    {
      id: 2,
      period: "2011 - 2015",
      degree: "Bachelor's in Computer Science",
      institution: "State University",
      description: "Foundations in computer science, algorithms, and data structures. Participated in web development club projects.",
    },
  ];

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
  };

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
            My <span className="text-indigo-600 dark:text-indigo-400">Resume</span>
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
            My education and professional experience in web development and design.
          </motion.p>
          <motion.div
            variants={fadeInUpVariants}
            custom={3}
            className="mb-12"
          >
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
  );
};

export default ResumeSection;
