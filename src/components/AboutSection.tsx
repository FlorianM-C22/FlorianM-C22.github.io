import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const AboutSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
      },
    }),
  }

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInVariants}
            custom={0}
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            About{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInVariants}
            custom={1}
            className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg overflow-hidden">
              <img
                src="/profilepic.png"
                alt="Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-200 dark:bg-indigo-900 rounded-lg -z-10"></div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
            >
              Who I Am
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              Hi! I'm a passionate Full Stack Developer currently in my second
              year at Holberton School Laval, where I'm deepening my knowledge
              in software development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              Alongside my studies, I’m gaining hands-on experience through a
              work-study program at Shortways, a company specialized in digital
              adoption solutions. As a Junior Full Stack Developer, I contribute
              to the development of modern web applications, working on both
              frontend and backend technologies. I’m always eager to learn,
              improve, and take on new challenges. Whether it’s building
              intuitive user interfaces or designing robust APIs, I strive to
              write clean, efficient, and scalable code. Let’s build something
              great together!
            </motion.p>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-semibold text-gray-800 dark:text-white mb-4"
            >
              My Skills
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 px-3 py-1 text-sm rounded-full">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
