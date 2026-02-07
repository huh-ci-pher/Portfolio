import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      {/* Footer */}
      <footer className="relative z-10 bg-dark-bg/80 backdrop-blur-md py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-java-orange to-tech-blue bg-clip-text text-transparent mb-2">Alex Chen</div>
              <p className="text-gray-400">Building scalable solutions with Java & Spring Boot.</p>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tech-blue transition-colors transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-java-orange transition-colors transform hover:scale-110">
                <span className="sr-only">Email</span>
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Alex Chen. Crafted with React, Tailwind & Spring Boot.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
