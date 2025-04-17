import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "Homie",
      description:
        "A an open source homelab deployment tool. This is my end of year 1 project for Holberton School.",
      image: "/homie-logo.png",
      category: "web",
      technologies: ["React", "Typescript", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/florianM-C22/homie",
      featured: true,
    },
    {
      id: 2,
      title: "Pokéscratch",
      description:
        "A fun and interactive Pokémon guessing game where players scratch virtual cards to reveal Pokémon and test their knowledge!",
      image: "/pokescratch-logo.png",
      category: "app",
      technologies: ["React", "Typescript", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/florianM-C22/pokescratch",
      featured: true,
    },
    {
      id: 3,
      title: "Buddy",
      description:
        "Work in progress: Mobile app that allows you to find your friends in real time.",
      image: "/buddy-logo.png",
      category: "app",
      technologies: ["React Native", "Typescript", "C#"],
      githubUrl: "",
      featured: true,
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === filter)

  const fadeInVariants = {
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
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            My{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Portfolio
            </span>
          </motion.h2>
          <motion.div
            variants={fadeInVariants}
            custom={1}
            className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeInVariants}
            custom={2}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Check out some of my recent work.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={`rounded-full ${
              filter === "all"
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            All
          </Button>
          <Button
            variant={filter === "featured" ? "default" : "outline"}
            onClick={() => setFilter("featured")}
            className={`rounded-full ${
              filter === "featured"
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Featured
          </Button>
          <Button
            variant={filter === "web" ? "default" : "outline"}
            onClick={() => setFilter("web")}
            className={`rounded-full ${
              filter === "web"
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Web
          </Button>
          <Button
            variant={filter === "app" ? "default" : "outline"}
            onClick={() => setFilter("app")}
            className={`rounded-full ${
              filter === "app"
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Apps
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex justify-end mt-auto">
                        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          View Details
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      {project.title}
                    </DialogTitle>
                    <DialogDescription>
                      <div className="mt-4">
                        <div className="mb-4 h-56 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              <ExternalLink size={16} />
                              <span>Live Demo</span>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                            >
                              <Github size={16} />
                              <span>Source Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
