import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce REST API",
    description: "A comprehensive REST API for an e-commerce platform built with Spring Boot, featuring user authentication, product management, and order processing.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "API development environment", 
    technologies: [
      { name: "Java", color: "bg-java-orange/20 text-java-orange" },
      { name: "Spring Boot", color: "bg-green-500/20 text-green-500" },
      { name: "MySQL", color: "bg-tech-blue/20 text-tech-blue" }
    ],
    codeSnippet: `@PostMapping("/api/orders")
public ResponseEntity<Order>
createOrder(@RequestBody Order order)`
  },
  {
    title: "Task Management Microservice",
    description: "A microservice architecture for task management with Spring Cloud, featuring service discovery, API gateway, and distributed configuration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Microservices architecture visualization",
    technologies: [
      { name: "Java", color: "bg-java-orange/20 text-java-orange" },
      { name: "Spring Cloud", color: "bg-green-500/20 text-green-500" },
      { name: "Docker", color: "bg-blue-400/20 text-blue-400" }
    ],
    codeSnippet: `@EnableEurekaClient
@SpringBootApplication
public class TaskService`
  },
  {
    title: "Library Management System", 
    description: "A complete library management system with Spring Boot backend, featuring book catalog, user management, and automated email notifications.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Database development and data analysis",
    technologies: [
      { name: "Java", color: "bg-java-orange/20 text-java-orange" },
      { name: "Spring Boot", color: "bg-green-500/20 text-green-500" },
      { name: "JPA", color: "bg-purple-500/20 text-purple-500" }
    ],
    codeSnippet: `@Entity
public class Book {
  @Id @GeneratedValue`
  }
];

const achievements = [
  { label: "Projects Completed", value: "15+", color: "text-java-orange" },
  { label: "Hours of Coding", value: "500+", color: "text-tech-blue" },
  { label: "Technologies Learned", value: "8+", color: "text-green-500" },
  { label: "Committed to Growth", value: "100%", color: "text-purple-500" }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span className="text-java-orange">Projects</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card bg-card-bg rounded-xl overflow-hidden hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech.name}
                      className={`${tech.color} px-2 py-1 rounded text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="bg-gray-800 p-3 rounded-lg mb-4">
                  <code className="text-sm font-mono">
                    <div className="text-tech-blue">
                      {project.codeSnippet.split('\n').map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {line.includes('@') ? (
                            <span className="text-tech-blue">{line}</span>
                          ) : line.includes('public') ? (
                            <>
                              <span className="text-white">public </span>
                              <span className="text-java-orange">{line.replace('public ', '')}</span>
                            </>
                          ) : (
                            <span className="text-gray-300">{line}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </code>
                </div>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-java-orange hover:bg-java-orange/80 text-dark-bg"
                    size="sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-dark-bg"
                    size="sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Technical Achievements */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="bg-card-bg p-6 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.value}
                </div>
                <p className="text-gray-400">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
