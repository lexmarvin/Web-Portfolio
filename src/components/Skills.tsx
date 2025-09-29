import { motion } from "framer-motion";

// React Icons
import { FaPhp, FaDatabase, FaHtml5, FaSwift } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMysql, SiFirebase, SiKotlin, SiFramer, SiGreensock } from "react-icons/si";
import { MdSmartToy } from "react-icons/md"; // AI Tools placeholder

const ModernSkills = () => {
  const skillCategories = [
    {
      title: "WEB",
      subtitle: "Website Development",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-indigo-600 w-7 h-7" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-7 h-7" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-7 h-7" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 w-7 h-7" /> },
      ],
      color: "primary",
      emoji: "⚡",
    },
    {
      title: "DATABASE",
      subtitle: "Data Management",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-700 w-7 h-7" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500 w-7 h-7" /> },
      ],
      color: "secondary",
      emoji: "🗄️",
    },
    {
      title: "MOBILE",
      subtitle: "App Development",
      skills: [
        { name: "Kotlin", icon: <SiKotlin className="text-purple-600 w-7 h-7" /> },
        { name: "Swift", icon: <FaSwift className="text-orange-500 w-7 h-7" /> },
      ],
      color: "accent",
      emoji: "📱",
    },
    {
      title: "OTHERS / TOOLS",
      subtitle: "Creative & Productivity Tools",
      skills: [
        { name: "GSAP", icon: <SiGreensock className="text-green-500 w-7 h-7" /> },
        { name: "Framer", icon: <SiFramer className="text-pink-500 w-7 h-7" /> },
        { name: "AI Tools", icon: <MdSmartToy className="text-purple-500 w-7 h-7" /> },
      ],
      color: "primary",
      emoji: "🛠️",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container-modern">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-chunky text-6xl md:text-8xl text-gradient-hero mb-4">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for creating modern, engaging web and mobile experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-modern group"
            >
              <div className="text-4xl mb-4">{category.emoji}</div>
              <h3
                className={`text-display text-3xl text-gradient-${category.color} mb-2`}
              >
                {category.title}
              </h3>
              <h4 className="text-fun text-xl text-muted-foreground mb-6">
                {category.subtitle}
              </h4>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    {skill.icon}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;

