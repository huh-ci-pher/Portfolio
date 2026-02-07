import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const timelineItems = [
  {
    year: "2023 - Present",
    title: "Intensive Java & Spring Boot Learning",
    color: "bg-java-orange"
  },
  {
    year: "2022 - 2023", 
    title: "Computer Science Foundation & Programming Fundamentals",
    color: "bg-tech-blue"
  },
  {
    year: "2022",
    title: "Started Programming Journey", 
    color: "bg-gray-500"
  }
];

export function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span className="text-java-orange">Me</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Developer coding Java applications" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey into Backend Development</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I discovered my passion for backend development during my computer science studies, 
              particularly drawn to the elegance and robustness of Java. What started as curiosity 
              about how applications handle data has evolved into expertise in building scalable, 
              efficient backend systems.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My focus is on creating clean, maintainable code while leveraging modern frameworks 
              like Spring Boot to deliver robust APIs and microservices. I'm constantly learning 
              and staying updated with the latest in backend technologies and best practices.
            </p>
            
            {/* Timeline */}
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-4 h-4 ${item.color} rounded-full flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-semibold">{item.year}</h4>
                    <p className="text-gray-400">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
