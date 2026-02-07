import { motion } from "framer-motion";
import { AnimatedProgress } from "@/components/ui/animated-progress";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const backendSkills = [
  { name: "Java", percentage: 85, color: "bg-java-orange", icon: "☕" },
  { name: "Spring Boot", percentage: 80, color: "bg-green-500", icon: "🍃" },
  { name: "MySQL/PostgreSQL", percentage: 75, color: "bg-tech-blue", icon: "🗄️" },
  { name: "REST APIs", percentage: 85, color: "bg-purple-500", icon: "🔄" }
];

const toolsSkills = [
  { name: "Git/GitHub", percentage: 90, color: "bg-orange-500", icon: "📝" },
  { name: "Docker", percentage: 70, color: "bg-blue-400", icon: "🐳" },
  { name: "Maven/Gradle", percentage: 75, color: "bg-gray-400", icon: "⚙️" },
  { name: "AWS Basics", percentage: 60, color: "bg-yellow-500", icon: "☁️" }
];



function SkillGroup({ title, skills, delay = 0 }: { title: string; skills: typeof backendSkills; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-2">
              <span className="flex items-center">
                <span className="mr-2 text-lg">{skill.icon}</span>
                {skill.name}
              </span>
              <span>{skill.percentage}%</span>
            </div>
            <AnimatedProgress
              percentage={skill.percentage}
              color={skill.color}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="text-java-orange">Skills</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <SkillGroup title="Backend Development" skills={backendSkills} delay={0.2} />
          <SkillGroup title="Tools & Technologies" skills={toolsSkills} delay={0.4} />
        </div>


      </div>
    </section>
  );
}
