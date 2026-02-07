import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "alex.chen.dev@email.com",
    color: "bg-primary-purple/20 text-primary-purple"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/alexchen-dev",
    color: "bg-accent-cyan/20 text-accent-cyan"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/alexchen-dev",
    color: "bg-gray-600/20 text-gray-400"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, exciting projects,
              or just connecting with fellow developers. Whether you're looking for
              a dedicated backend developer or want to collaborate on something amazing,
              I'd love to hear from you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-12 h-12 ${info.color.split(' ')[0]} rounded-lg flex items-center justify-center`}>
                    <info.icon className={`${info.color.split(' ')[1]}`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card-bg/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
            >
              <div className="mb-6">
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:border-primary-purple focus:ring-1 focus:ring-primary-purple outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-primary-purple hover:bg-primary-purple/80 text-dark-bg font-semibold py-3 rounded-lg transition-all hover:animate-glow"
              >
                <Send className="mr-2 h-4 w-4" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
