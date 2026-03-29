/**
 * ============================================================
 *  Shubham Kadam — Developer Portfolio
 *  Stack : React + Tailwind (CDN) + vanilla CSS animations
 *  Author: Generated for Shubham Zunjararao Kadam
 * ============================================================
 *
 *  Sections
 *  --------
 *  1. DATA  — all resume content lives here; easy to update
 *  2. UTILS — tiny helper hooks / functions
 *  3. COMPONENTS
 *     • Navbar
 *     • Hero
 *     • About
 *     • Skills
 *     • Projects
 *     • Education
 *     • Achievements
 *     • Contact
 *     • Footer
 *  4. APP  — wires everything together
 */

import { useEffect, useRef, useState } from "react";

/* ============================================================
   1. DATA
   ============================================================ */

const DATA = {
  name: "Shubham Zunjararao Kadam",
  shortName: "Shubham Kadam",
  role: "Full-Stack Developer & AI/ML Engineer",
  tagline: "Building production-grade apps with Python, React & AI APIs",
  summary:
    "Motivated Computer Science graduate student with hands-on experience in full-stack web development, AI/ML integration, and modern software engineering. Proven ability to build production-grade applications leveraging Python, JavaScript, and React, and to integrate AI platforms including OpenAI, Google Gemini, Anthropic Claude, and AntiGravity. Seeking to contribute to an innovative engineering team where strong technical and problem-solving skills can drive impact.",

  contact: {
    phone: "9307798646",
    email: "shubhamkadam2593@gmail.com",
    github: "https://github.com/sk0225",
    location: "Pune, Maharashtra, IN",
  },

  skills: [
    {
      category: "Programming Languages",
      icon: "💻",
      items: ["Java (OOP)", "JavaScript", "Python"],
    },
    {
      category: "Web Development",
      icon: "🌐",
      items: ["HTML5", "CSS3", "React.js"],
    },
    {
      category: "Backend & Frameworks",
      icon: "⚙️",
      items: ["Flask", "PHP", "REST APIs", "Fast APIs"],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["SQL", "MySQL", "MongoDB"],
    },
    {
      category: "AI Platforms",
      icon: "🤖",
      items: ["OpenAI (GPT-4)", "Google Gemini", "Anthropic Claude", "AntiGravity AI"],
    },
    {
      category: "AI/ML Techniques",
      icon: "🧠",
      items: ["Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "API Integration"],
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code"],
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Hub – E-Waste Marketplace",
      subtitle: "Full-Stack Web Application",
      description:
        "A full-stack online marketplace for buying and selling electronic waste, promoting sustainable recycling of e-waste products through a clean, modern web platform.",
      highlights: [
        "Designed and developed a full-stack online marketplace for buying and selling electronic waste.",
        "Implemented secure user authentication, product listing management, and relational database operations.",
        "Built a responsive UI with HTML/CSS and dynamic functionality via a JavaScript and PHP backend.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      color: "from-emerald-500 to-teal-600",
      icon: "♻️",
      gradient: "from-emerald-500/10 to-teal-600/10",
      border: "border-emerald-500/20",
    },
    {
      id: 2,
      title: "AI Chatbot – RAG-Based Conversational Agent",
      subtitle: "AI/ML Application",
      description:
        "An intelligent chatbot powered by Retrieval-Augmented Generation (RAG) that delivers accurate, context-aware responses using multiple leading AI APIs with real-time streaming.",
      highlights: [
        "Developed an intelligent chatbot using Retrieval-Augmented Generation (RAG) for context-aware responses.",
        "Integrated OpenAI and Anthropic Claude APIs for natural language processing and dynamic response generation.",
        "Built a Flask REST API backend and a React.js frontend with real-time streaming response support.",
      ],
      tech: ["Python", "Flask", "React.js", "OpenAI", "Anthropic Claude", "AntiGravity AI"],
      color: "from-violet-500 to-indigo-600",
      icon: "🤖",
      gradient: "from-violet-500/10 to-indigo-600/10",
      border: "border-violet-500/20",
    },
  ],

  education: [
    {
      degree: "M.Sc. Computer Science",
      institution: "Pratibha College of Commerce and Computer Studies, Pune",
      period: "2025 – 2027",
      status: "Pursuing",
      icon: "🎓",
    },
    {
      degree: "B.Sc. Computer Science",
      institution: "MIT Arts, Commerce and Science College, Alandi",
      period: "2022 – 2025",
      status: "9.26 CGPA",
      icon: "🏫",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Kendriya Vidyalaya AFS No. 2",
      period: "2022",
      status: "59%",
      icon: "📚",
    },
    {
      degree: "Secondary (10th)",
      institution: "Army Public School, Dighi",
      period: "2020",
      status: "74.6%",
      icon: "📖",
    },
  ],

  achievements: [
    {
      title: "1st Place – Hackathon",
      description: "Awarded first position in a competitive hackathon for an innovative tech solution.",
      icon: "🏆",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Class Representative",
      description: "Elected as Class Representative, demonstrating leadership and communication skills.",
      icon: "🎖️",
      color: "from-sky-400 to-blue-500",
    },
  ],
};

/* ============================================================
   2. UTILS
   ============================================================ */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ============================================================
   3A. NAVBAR
   ============================================================ */

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Education", "Achievements", "Contact"];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--border-light)] shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-lg font-bold tracking-tight"
        >
          <span className="text-[#915eff] font-bold">&lt;Shubham.&gt;</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 font-medium tracking-wide relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#915eff] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>
        {/* Desktop Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-dark)] hover:border-[#915eff] transition-all text-[#915eff]"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>


        <a
          href={DATA.contact.github}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#915eff] hover:bg-[#7b4fd9] text-[var(--text-primary)] text-sm font-semibold transition-all duration-200 hover:shadow-[0_0_20px_rgba(145,94,255,0.4)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>

        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="text-[#915eff] w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-dark)]">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="text-[var(--text-primary)] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-[var(--icon-color,white)] transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-xl border-t border-[var(--border-light)] px-6 py-4">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--border-light)] last:border-0"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ============================================================
   3B. HERO
   ============================================================ */

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#915eff]/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/15 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4f46e5]/10 rounded-full blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#915eff]/30 bg-[#915eff]/10 text-[#915eff] text-sm font-medium mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-[#915eff] rounded-full animate-ping" />
          Available for Opportunities
        </div>

        <h1
          className={`text-5xl md:text-7xl font-black text-[var(--text-primary)] tracking-tight leading-none mb-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-[#6366f1] to-[#3b82f6]">
            Shubham
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-[#aaa6c3] font-semibold mb-4 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {DATA.role}
        </p>

        <p
          className={`text-base md:text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {DATA.tagline}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#915eff] to-[#6366f1] text-[var(--text-primary)] font-semibold hover:shadow-[0_0_30px_rgba(145,94,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl border border-[var(--border-dark)] bg-[var(--border-light)] text-[var(--text-primary)] font-semibold hover:bg-white/10 hover:border-[var(--border-dark)] transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div
          className={`grid grid-cols-3 gap-6 max-w-lg mx-auto transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: 2, suffix: "+", label: "Projects Built" },
            { value: 7, suffix: "+", label: "Tech Skills" },
            { value: 9, suffix: ".26", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[var(--text-primary)]">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[var(--text-tertiary)] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-tertiary)]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#915eff] to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ============================================================
   3C. ABOUT
   ============================================================ */

function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 bg-[var(--bg-primary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Introduction" title="About Me" subtitle="A little bit about who I am" />

        <div
          ref={ref}
          className={`mt-16 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#915eff]/30 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="absolute inset-4 rounded-full border border-[#6366f1]/20" />

              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#915eff] to-[#3b82f6] flex items-center justify-center shadow-[0_0_80px_rgba(145,94,255,0.3)]">
                <span className="text-4xl md:text-5xl font-black text-[var(--text-primary)] select-none tracking-tight">Shubham.</span>
              </div>

              <div
                className="absolute -top-2 -right-2 bg-[var(--bg-tertiary)] border border-[#915eff]/30 rounded-xl px-3 py-1.5 text-xs text-[#915eff] font-semibold shadow-lg animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                React.js ⚛️
              </div>
              <div
                className="absolute -bottom-2 -left-2 bg-[var(--bg-tertiary)] border border-emerald-500/30 rounded-xl px-3 py-1.5 text-xs text-emerald-400 font-semibold shadow-lg animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "0.5s" }}
              >
                Python 🐍
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">Full-Stack Developer with AI Expertise</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-base">{DATA.summary}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { label: "📍 Location", value: "Pune, Maharashtra" },
                { label: "🎓 Degree", value: "M.Sc. Computer Science" },
                { label: "📧 Email", value: "shubhamkadam2593@gmail.com" },
                { label: "📱 Phone", value: "+91 9307798646" },
              ].map((info) => (
                <div key={info.label} className="bg-[var(--border-light)] border border-[var(--border-dark)] rounded-xl px-4 py-3">
                  <div className="text-xs text-[var(--text-tertiary)] mb-0.5">{info.label}</div>
                  <div className="text-sm text-[var(--text-primary)] font-medium truncate">{info.value}</div>
                </div>
              ))}
            </div>

            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#915eff] text-[var(--text-primary)] font-semibold hover:bg-[#7b4fd9] transition-all duration-200 hover:shadow-[0_0_20px_rgba(145,94,255,0.4)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3D. SKILLS
   ============================================================ */

function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Expertise" title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DATA.skills.map((skill, i) => (
            <div
              key={skill.category}
              className={`group relative bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-2xl p-5 hover:border-[#915eff]/30 hover:bg-[#1e1e3a] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(145,94,255,0.1)] ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: inView ? `${i * 80}ms` : "0ms" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915eff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-2xl mb-3">{skill.icon}</div>
                <h3 className="text-sm font-semibold text-[#915eff] mb-3 uppercase tracking-wider">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-[var(--border-light)] border border-[var(--border-dark)] rounded-lg text-xs text-[var(--text-secondary)] font-medium hover:border-[#915eff]/40 hover:text-[var(--text-primary)] transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3E. PROJECTS
   ============================================================ */

function Projects() {
  const [ref, inView] = useInView();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="My Work" title="Technical Projects" subtitle="What I've built — real-world applications with modern tech" />

        <div ref={ref} className="mt-16 grid md:grid-cols-2 gap-8">
          {DATA.projects.map((project, i) => (
            <div
              key={project.id}
              className={`group relative bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-3xl overflow-hidden hover:border-[#915eff]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-pointer ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} border ${project.border} text-xs font-semibold text-[var(--text-secondary)] mb-3`}
                    >
                      <span>{project.icon}</span>
                      {project.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] leading-snug">{project.title}</h3>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl shadow-lg`}>
                    {project.icon}
                  </div>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${project.border} bg-gradient-to-r ${project.gradient} text-gray-200`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${activeProject === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="border-t border-[var(--border-light)] pt-5">
                    <h4 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <span className="mt-1 w-1.5 h-1.5 bg-[#915eff] rounded-full flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-4 text-xs text-[#915eff] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {activeProject === project.id ? "Hide Details ↑" : "View Details ↓"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-dark)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-dark)] transition-all duration-200 text-sm font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81. 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3F. EDUCATION
   ============================================================ */

function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Academic Background" title="Education" subtitle="My academic journey and qualifications" />

        <div ref={ref} className="mt-16 max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#915eff] via-[#6366f1]/50 to-transparent" />

          <div className="space-y-8">
            {DATA.education.map((edu, i) => (
              <div
                key={i}
                className={`relative pl-16 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{ transitionDelay: inView ? `${i * 120}ms` : "0ms" }}
              >
                <div className="absolute left-0 top-3 w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[#915eff]/30 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(145,94,255,0.2)]">
                  {edu.icon}
                </div>

                <div className="bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-2xl p-5 hover:border-[#915eff]/20 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[#915eff]">{edu.period}</div>
                      <div className="text-xs text-[var(--text-tertiary)] mt-0.5">{edu.status}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3G. ACHIEVEMENTS
   ============================================================ */

function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="py-24 bg-[var(--bg-primary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Recognition" title="Achievements" subtitle="Milestones and recognitions I'm proud of" />

        <div ref={ref} className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {DATA.achievements.map((ach, i) => (
            <div
              key={i}
              className={`group relative bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-2xl p-7 overflow-hidden hover:border-[var(--border-dark)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: inView ? `${i * 150}ms` : "0ms" }}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${ach.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                  {ach.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{ach.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3H. CONTACT
   ============================================================ */

function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" }); // 'success', 'error', 'loading'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }
    
    setStatus({ type: "loading", message: "Sending..." });
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      
      setStatus({ type: "success", message: "✅ Message sent! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: `❌ ${err.message}` });
    }
    setTimeout(() => setStatus({ type: null, message: "" }), 5000);
  };

  const contactLinks = [
    { icon: "📧", label: "Email", value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
    { icon: "📱", label: "Phone", value: DATA.contact.phone, href: `tel:${DATA.contact.phone}` },
    { icon: "🐙", label: "GitHub", value: "github.com/sk0225", href: DATA.contact.github },
    { icon: "📍", label: "Location", value: DATA.contact.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg-secondary)] px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="Get In Touch" title="Contact Me" subtitle="Have an opportunity or want to collaborate? Let's talk!" />

        <div
          ref={ref}
          className={`mt-16 grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Let's build something great</h3>
            <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a project in mind, a job opening, or just want to say hi — my
              inbox is always open!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-xl hover:border-[#915eff]/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-[#915eff]/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{link.icon}</div>
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)] mb-0.5">{link.label}</div>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-gray-200 font-medium group-hover:text-[#915eff] transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-200 font-medium">{link.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--bg-tertiary)] border border-[var(--border-light)] rounded-3xl p-7">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Send a Message</h3>

            {status.type && (
              <div className={`mb-5 p-4 border rounded-xl text-sm flex items-center gap-2 ${
                status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                status.type === 'loading' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
              }`}>
                {status.message}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[var(--text-tertiary)] font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-[var(--border-light)] border border-[var(--border-dark)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-gray-600 focus:outline-none focus:border-[#915eff]/50 focus:bg-[var(--border-light)] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-tertiary)] font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-[var(--border-light)] border border-[var(--border-dark)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-gray-600 focus:outline-none focus:border-[#915eff]/50 focus:bg-[var(--border-light)] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--text-tertiary)] font-medium mb-1.5">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[var(--border-light)] border border-[var(--border-dark)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm placeholder-gray-600 focus:outline-none focus:border-[#915eff]/50 focus:bg-[var(--border-light)] transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#915eff] to-[#6366f1] text-[var(--text-primary)] font-semibold hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3I. FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-light)] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-lg font-bold mb-1">
              <span className="text-[#915eff] font-bold">&lt;Shubham.&gt;</span>
            </div>
            <p className="text-xs text-[var(--text-tertiary)]">Shubham Zunjararao Kadam</p>
          </div>

          <p className="text-xs text-[var(--text-tertiary)] text-center">© {new Date().getFullYear()} Shubham Kadam. Built with React & ❤️</p>

          <div className="flex items-center gap-4">
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   SHARED — Section Header
   ============================================================ */

function SectionHeader({ tag, title, subtitle }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <span className="inline-block px-4 py-1.5 rounded-full border border-[#915eff]/30 bg-[#915eff]/10 text-[#915eff] text-xs font-semibold uppercase tracking-widest mb-4">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-3">{title}</h2>
      <p className="text-[var(--text-tertiary)] text-base max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}

/* ============================================================
   4. APP
   ============================================================ */

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen font-sans antialiased text-[var(--text-primary)] transition-colors duration-300">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--bg-primary); }
        ::-webkit-scrollbar-thumb { background: #915eff55; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #915eff; }
        body { background: var(--bg-primary); color: var(--text-primary); transition: background-color 0.3s ease, color 0.3s ease; }
      `}</style>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

