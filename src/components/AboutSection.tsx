
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
  };

  const skills = [
    "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS",
    "Node.js", "Express", "MongoDB", "Git", "Responsive Design", "UI/UX"
  ];

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
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
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
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Your Photo
              </div>
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
              I'm a passionate web developer with a strong foundation in building modern, 
              responsive web applications. With a focus on creating intuitive user 
              experiences, I combine technical skills with creative problem-solving.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              My journey in web development began several years ago, and I've since 
              worked on a variety of projects ranging from small business websites to 
              complex web applications. I'm constantly learning and adapting to new 
              technologies to deliver the best possible solutions.
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
  );
};

export default AboutSection;
