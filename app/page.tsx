"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypingAnimation } from "@/components/typing-animation"
import LoadingScreen from "@/components/loading-screen"
import FloatingElements from "@/components/floating-elements"
import SkillsScroll from "@/components/skills-scroll"
import ScrollProgress from "@/components/scroll-progress"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Menu,
  X,
  MapPin,
  Calendar,
  Briefcase,
  Coffee,
  Heart,
  Send,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const typingTexts = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
  ]

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2023 - Present",
      description: [
        "Architected and developed scalable web applications serving 100K+ active users with 99.9% uptime",
        "Led implementation of microservices architecture, reducing system load times by 40% and improving scalability",
        "Mentored a team of 5 junior developers and established comprehensive coding standards and best practices",
        "Collaborated with product managers and designers to deliver feature-rich applications ahead of schedule",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "Remote",
      period: "Jun 2021 - Dec 2022",
      description: [
        "Developed responsive web applications achieving 95+ PageSpeed scores and optimal user experience",
        "Collaborated with UX/UI designers to implement pixel-perfect, accessible interfaces across all platforms",
        "Optimized database queries and implemented caching strategies, improving application performance by 60%",
        "Built and maintained RESTful APIs with comprehensive documentation and automated testing suites",
      ],
      technologies: ["React", "TypeScript", "PostgreSQL", "Express"],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      location: "New York, NY",
      period: "Jan 2020 - May 2021",
      description: [
        "Developed interactive user interfaces for SaaS platform used by 10K+ businesses worldwide",
        "Implemented responsive design principles ensuring seamless experience across all device types",
        "Contributed to open-source projects and developed internal tools, improving team productivity by 30%",
        "Maintained high code quality standards and participated in comprehensive code review processes",
      ],
      technologies: ["JavaScript", "Vue.js", "Sass", "Git"],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution featuring real-time inventory management, secure payment processing, advanced analytics, and responsive design optimized for conversion across all devices.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Project Management Suite",
      description:
        "A collaborative workspace platform with real-time updates, file sharing, team communication, task automation, and comprehensive project tracking capabilities for modern teams.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "An intelligent business intelligence platform leveraging machine learning for predictive analytics, automated insights, and interactive data visualizations with real-time reporting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "React", "TensorFlow", "D3.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "FinTech Mobile App",
      description:
        "A secure financial application with biometric authentication, real-time transactions, budget tracking, investment management, and comprehensive financial planning tools.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase", "Stripe", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
    },
  ]

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />
  }

  return (
    <div className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
      <ScrollProgress />
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-1 w-full bg-background/90 backdrop-blur-md border-b border-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary tracking-tight">AS</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                      activeSection === item ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-left hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-muted font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced & Hot Look */}
      <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  <p className="text-muted-foreground text-base sm:text-lg font-medium tracking-wide">Hello, I'm</p>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight">
                  Anupam Saha
                </h1>

                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary font-bold tracking-tight">
                  <TypingAnimation texts={typingTexts} speed={100} deleteSpeed={50} pauseTime={2000} />
                </div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                I craft scalable web applications and intuitive user experiences that solve real-world problems. Turning
                innovative ideas into digital reality through clean code and thoughtful design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 font-bold text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-border hover:bg-muted px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 font-bold text-sm sm:text-base bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </Button>
              </div>

              <div className="flex items-center space-x-6 sm:space-x-8 pt-6">
                <Link
                  href="https://github.com/anupam-codespace"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anupam-saha-3a997321b/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </Link>
                <Link
                  href="https://x.com/AnupamSaha070"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Twitter size={20} className="sm:w-6 sm:h-6" />
                </Link>
                <Link
                  href="mailto:anupamsaha.work@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              About Me
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Get to know more about who I am and what drives my passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary tracking-tight">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">
                  <p>
                    I'm a Full Stack Developer specializing in modern web technologies. I build scalable applications
                    that combine beautiful design with robust functionality, ensuring every project delivers exceptional
                    user experiences.
                  </p>
                  <p>
                    With expertise in both frontend and backend development, I enjoy tackling complex challenges and
                    turning innovative ideas into reality. I'm passionate about clean code, performance optimization,
                    and staying current with emerging technologies.
                  </p>
                  <p>
                    I'm actively seeking new opportunities where I can contribute my skills, collaborate with talented
                    teams, and continue growing as a developer.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 font-bold text-sm sm:text-base"
              >
                Let's Connect
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1gb-i3ksNknPSo6c9ZWzOg3ynXoJkkJQb"
                  alt="About me"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Dual Direction Scrolling */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
            Skills
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Diverse toolkit of technologies I've mastered to build innovative solutions and drive digital
            transformation.
          </p>
        </div>
        <SkillsScroll />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Experience
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Here's a quick rundown of my most recent experiences
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 tracking-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-foreground mb-2 font-medium text-sm sm:text-base">
                        <Briefcase className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4 text-sm sm:text-base">
                        <MapPin className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground font-medium text-sm sm:text-base">
                      <Calendar className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start leading-relaxed font-medium text-sm sm:text-base"
                      >
                        <span className="text-primary mr-2 sm:mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-muted text-foreground font-medium px-2 sm:px-3 py-1 text-xs sm:text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Here are some of the projects I've worked on recently
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground font-bold text-xs sm:text-sm">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed font-medium text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted text-foreground text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1 font-bold text-xs sm:text-sm"
                    >
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-border hover:bg-muted flex-1 bg-transparent font-bold text-xs sm:text-sm"
                    >
                      <Link href={project.githubUrl}>
                        <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Feel free to contact me if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>

          <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <form className="space-y-6 sm:space-y-8">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2 sm:mb-3">Name</label>
                    <Input
                      placeholder="Your Name"
                      className="bg-background border-border focus:border-primary text-foreground h-10 sm:h-12 font-medium text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2 sm:mb-3">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-primary text-foreground h-10 sm:h-12 font-medium text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 sm:mb-3">Subject</label>
                  <Input
                    placeholder="Subject"
                    className="bg-background border-border focus:border-primary text-foreground h-10 sm:h-12 font-medium text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2 sm:mb-3">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    className="bg-background border-border focus:border-primary text-foreground font-medium text-sm sm:text-base"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 sm:py-4 text-sm sm:text-base">
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer - Modern & Cool Design */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-card to-muted/30 border-t border-border overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Anupam Saha</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Crafting digital experiences through innovative web solutions and clean, scalable code.
              </p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 space-y-6">
              <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="lg:col-span-1 space-y-6">
              <h4 className="text-lg font-bold text-foreground">Let's Connect</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">anupamsaha.work@gmail.com</span>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/anupamsaha"
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  >
                    <Github size={18} />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/anupamsaha"
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  >
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href="https://twitter.com/anupamsaha"
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  >
                    <Twitter size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <span>© 2025-26 Anupam Saha.</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span className="hidden sm:inline">and</span>
                <Coffee className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
                <span>•</span>
                <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
