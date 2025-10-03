
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const ModernHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[var(--nav-h)]" >
      
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-80 h-80 shape-circle" />
      <div className="absolute bottom-20 left-20 w-60 h-60 shape-square" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 shape-circle" />
      
      <div className="container-modern relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="text-chunky text-6xl md:text-8xl lg:text-9xl text-gradient-hero animate-text-glow">
                LEX
              </div>
              <div className="text-chunky text-5xl md:text-7xl lg:text-8xl text-gradient-primary transform -rotate-2">
                MARVIN
              </div>
              <div className="text-chunky text-4xl md:text-6xl lg:text-7xl text-gradient-secondary transform rotate-2">
                GUSTILO
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-display text-3xl md:text-4xl text-primary">
                <ReactTyped
                  strings={["Web Developer", "Mobile Developer", "Aspiring Automation Engineer"]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                I code things. Sometimes they even work. Let’s call it "innovation."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                variant="chunky-outline"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                asChild
                variant="chunky-outline"
              >
                <a href="#contact">Get in Touch</a>
              </Button>

              <Button
                asChild
                variant="chunky-outline"
              >
                <a 
                  href="/Gustilo_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  Resume
                </a>
              </Button>
              
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="card-modern overflow-hidden rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="/gradpic.JPG" 
                alt="Lex Marvin Gustilo" 
                className="w-70 md:w-96 h-96 object-cover object-top mx-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;

