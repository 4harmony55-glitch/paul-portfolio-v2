'use client';
import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Award, Star, Code, Briefcase, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "DropCart Ecosystem",
      shortTitle: "E-commerce Platform",
      description: "Comprehensive e-commerce system with Web, Mobile, Desktop, and Trading Bot.",
      tech: ["React", "React Native", "Electron", "Python", "Google Apps Script"],
      liveUrl: "https://dropcart-webapp.vercel.app/",
      githubUrl: "https://github.com/4harmony55-glitch/dropcart-webapp",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565294473/JighaTcVWWmp8GioNQRU2e/project-ecommerce-96KTY2ZtDV87KhWAss5VR9.webp"
    },
    {
      title: "VEGA-AI",
      shortTitle: "AI Assistant",
      description: "Personal AI assistant powered by OpenAI API with natural language understanding.",
      tech: ["Python", "OpenAI API", "Voice Processing"],
      githubUrl: "https://github.com/4harmony55-glitch/VEGA-AI",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565294473/JighaTcVWWmp8GioNQRU2e/project-ai-FfHeSi6cnxmaYbQjixrvfs.webp"
    },
    {
      title: "Connected Cloud Sync",
      shortTitle: "Cloud Management",
      description: "Modern web application for cloud synchronization and data management.",
      tech: ["React", "TypeScript", "Vite", "Express.js"],
      githubUrl: "https://github.com/4harmony55-glitch/connected-cloud-sync",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565294473/JighaTcVWWmp8GioNQRU2e/project-dashboard-9BT8YonHwB5MNfnrFgNDVJ.webp"
    },
    {
      title: "GitHub Analytic Dashboard",
      shortTitle: "Analytics Dashboard",
      description: "Dashboard for visualizing GitHub analytics and repository insights.",
      tech: ["React", "TypeScript", "Recharts", "Express.js"],
      githubUrl: "https://github.com/4harmony55-glitch/github-analytic-dashboard",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663565294473/JighaTcVWWmp8GioNQRU2e/project-dashboard-9BT8YonHwB5MNfnrFgNDVJ.webp"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    "Backend": ["Node.js", "Express.js", "Google Apps Script", "Python"],
    "Mobile": ["React Native", "Expo", "Electron"],
    "AI/ML": ["OpenAI API", "Python", "Data Visualization"],
    "Tools": ["Git", "GitHub", "Vercel", "Docker", "Supabase"]
  };

  const certificates = [
    { title: "Web Developer", issuer: "Sololearn", icon: "🌐" },
    { title: "Python Developer", issuer: "Sololearn", icon: "🐍" },
    { title: "Prompt Engineering", issuer: "Sololearn", icon: "🤖" },
    { title: "Angular", issuer: "Sololearn × Google", icon: "⚡", special: true },
    { title: "Data Coding", issuer: "Sololearn", icon: "📊" },
    { title: "Vibe Coding", issuer: "Sololearn", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Paul Adedokun
          </div>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#certificates" className="text-sm font-medium hover:text-primary transition-colors">Certificates</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663565294473/JighaTcVWWmp8GioNQRU2e/hero-background-Y53AZ94tSFJAbiaL924QmU.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Full-Stack Developer & AI Enthusiast
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Building luxurious, professional web applications that solve real-world problems. Specializing in modern JavaScript, Python, and AI integration.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" /> Resume
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/4harmony55-glitch" className="text-primary hover:text-primary/80 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-primary hover:text-primary/80 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:Pauladedokun007@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <div className="relative bg-card rounded-2xl p-8 shadow-2xl border border-border">
                <div className="space-y-4">
                  <div className="h-12 bg-muted rounded-lg" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16">
            <h2 className="text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Showcasing my best work across different domains</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                          </Button>
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="w-4 h-4" /> Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16">
            <h2 className="text-5xl font-bold">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">Proficient in modern technologies and frameworks</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6 border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16">
            <h2 className="text-5xl font-bold">Certifications</h2>
            <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <Card 
                key={idx} 
                className={`p-6 border-border transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  cert.special ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{cert.icon}</div>
                  {cert.special && <Star className="w-5 h-5 text-primary fill-primary" />}
                </div>
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Pauladedokun007@gmail.com">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                <Mail className="w-5 h-5" /> Send Email
              </Button>
            </a>
            <a href="https://wa.me/2348028265637" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                💬 WhatsApp
              </Button>
            </a>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <a href="https://github.com/4harmony55-glitch" className="text-primary hover:text-primary/80 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-primary hover:text-primary/80 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:Pauladedokun007@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2026 Adedokun Paul. Crafted with luxury and precision.</p>
        </div>
      </footer>
    </div>
  );
}
