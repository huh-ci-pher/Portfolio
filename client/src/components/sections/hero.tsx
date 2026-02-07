import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const phrases = [
  "Java Backend Developer",
  "Spring Boot Enthusiast",
  "API Architect",
  "Problem Solver"
];

export function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const phrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentPhrase(phrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === phrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentPhrase(phrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Alex_Chen_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download resume:', error);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      {/* Background with Gradient and Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-bg"></div>
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-java-orange/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-tech-blue/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-java-orange">Alex Chen</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl mb-8 text-gray-300 h-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="border-r-2 border-java-orange animate-typing">
                {currentPhrase}
              </span>
            </motion.h2>

            <motion.p
              className="text-xl mb-12 text-gray-400 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about building scalable backend systems and RESTful APIs.
              Currently specializing in Java, Spring Boot, and microservices architecture.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-java-orange hover:bg-java-orange/80 text-dark-bg px-8 py-4 rounded-lg font-semibold transition-all hover:animate-glow"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-dark-bg px-8 py-4 rounded-lg font-semibold transition-all"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
