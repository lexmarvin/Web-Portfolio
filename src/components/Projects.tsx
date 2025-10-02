import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const ModernProjects = () => {
    const projects = [
    {
      title: "FITQUEST",
      subtitle: "Gamified Fitness Tracker App",
      description: "A fitness app using AI motion tracking to perfect your workout form, count reps automatically and rewards you for consistency.",
      tech: ["Kotlin", "Sency SDK", "AI Motion", "Mobile"],
      year: "2024",
      status: "Open Source",
      color: "primary",
      live: "/fitquest",
      github: "https://github.com/lexmarvin/FitQuestAlpha3",
      image: "fitquest.png",
      imageClass: "object-[center_-133px]" 
    },
    {
      title: "TAGATYPE", 
      subtitle: "Speed Typing Game",
      description: "Interactive Tagalog typing test that helps users improve their speed and accuracy.",
      tech: ["JavaScript", "HTML/CSS"],
      year: "2025",
      status: "Open Source",
      color: "secondary",
      live: "https://tagatype.vercel.app/",
      github: "https://github.com/lexmarvin/TagaType",
      image: "/TagaType.jpg"  
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 shape-circle" />
      <div className="absolute bottom-20 left-10 w-48 h-48 shape-square" />
      
      <div className="container-modern">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-chunky text-6xl md:text-8xl text-gradient-hero mb-4">
            PROJECTS
          </h2>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Featured work that showcases innovation, creativity, and technical excellence
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:direction-reverse' : ''}`}
            >
              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <span className="text-fun text-lg text-accent">{project.year}</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </motion.div>
                  
                  <h3 className={`text-chunky text-5xl md:text-6xl text-gradient-${project.color}`}>
                    {project.title}
                  </h3>
                  <h4 className="text-display text-2xl text-foreground/90">
                    {project.subtitle}
                  </h4>
                </div>

                <p className="text-lg text-foreground/90 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm border-2 border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              <div className="flex space-x-4">
                {/* View Project button */}
                {project.live && (
                  project.live.startsWith("http") ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button variant="chunky">Live Demo</Button>
                    </a>
                  ) : (
                    <a href={project.live}>
                      {/* <Button variant="chunky">View Project</Button> */}
                    </a>
                  )
                )}

                {/* GitHub button */}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="chunky">GitHub</Button>
                  </a>
                )}
              </div>
              </div>

              {/* Project Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className={`card-modern p-12 text-center bg-gradient-to-br from-${project.color}/10 to-${project.color}/5`}>
                  <div className="mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-64 object-cover rounded-xl shadow-lg ${project.imageClass}`}
                    />
                  </div>
                  <div className={`text-display text-4xl text-gradient-${project.color} mb-4`}>
                    {project.title}
                  </div>
                  <div className="text-muted-foreground">
                    {project.subtitle}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;