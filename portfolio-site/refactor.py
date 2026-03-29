import re
import os

filepath = r"d:\Portfolio\portfolio-site\src\App.jsx"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update DATA.skills
content = content.replace(
    'items: ["SQL", "MySQL"],',
    'items: ["SQL", "MySQL", "MongoDB"],'
)

# 2. Add Theme Toggle / Context and update App
# Find the App function at the bottom
app_match = re.search(r"export default function App\(\) \{.*\}", content, re.DOTALL)
if app_match:
    old_app = app_match.group(0)
    new_app = """export default function App() {
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
"""
    content = content.replace(old_app, new_app)

# 3. Update Navbar definition to accept props and add sun/moon button
navbar_old = "function Navbar() {"
navbar_new = "function Navbar({ theme, toggleTheme }) {"
content = content.replace(navbar_old, navbar_new)

# Add theme button to Navbar desktop
desktop_nav_ul_old = "</ul>"
desktop_nav_ul_new = """</ul>
        {/* Desktop Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-dark)] hover:border-[#915eff] transition-all text-[#915eff]"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
"""
content = content.replace(desktop_nav_ul_old, desktop_nav_ul_new, 1)

# Add theme button to mobile nav
mobile_menu_button_old = 'onClick={() => setMenuOpen(!menuOpen)}'
mobile_menu_button_new = 'onClick={() => setMenuOpen(!menuOpen)}'
# we will inject beside hamburger
hamburger_section_old = """<button className="md:hidden text-[var(--text-primary)] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">"""
hamburger_section_new = """<div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="text-[#915eff] w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-dark)]">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="text-[var(--text-primary)] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">"""
content = content.replace("""<button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">""", hamburger_section_new, 1)
# need to close the div for hamburger
content = content.replace("""<div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>""", """<div className={`w-5 h-0.5 bg-[var(--icon-color,white)] transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
        </div>""")


# 4. SK -> Shubham. Replace the specific DOM nodes
sk_logo_pattern = r'<span className="text-\[#915eff\]">&lt;</span>\s*<span className="text-white">SK</span>\s*<span className="text-\[#915eff\]">/&gt;</span>'
content = re.sub(sk_logo_pattern, '<span className="text-[#915eff] font-bold">&lt;Shubham.&gt;</span>', content)

# `<span className="text-7xl md:text-8xl font-black text-white select-none">SK</span>`
content = content.replace(
    '<span className="text-7xl md:text-8xl font-black text-white select-none">SK</span>',
    '<span className="text-4xl md:text-5xl font-black text-[var(--text-primary)] select-none tracking-tight">Shubham.</span>'
)

# 5. Fix Contact Form logic & UI
contact_old = """function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };"""

contact_new = """function Contact() {
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
  };"""

content = content.replace(contact_old, contact_new)

# Update the status rendering in contact
# Find: {sent && ( ... )}
sent_jsx_old = """{sent && (
              <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-sm text-emerald-400 flex items-center gap-2">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}"""

sent_jsx_new = """{status.type && (
              <div className={`mb-5 p-4 border rounded-xl text-sm flex items-center gap-2 ${
                status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                status.type === 'loading' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
              }`}>
                {status.message}
              </div>
            )}"""

content = content.replace(sent_jsx_old, sent_jsx_new)


# 6. Global Theme Variable Class Replacements
replacements = {
    'bg-[#050816]': 'bg-[var(--bg-primary)]',
    'bg-[#0a0a1a]': 'bg-[var(--bg-secondary)]',
    'bg-[#1a1a2e]': 'bg-[var(--bg-tertiary)]',
    'text-white': 'text-[var(--text-primary)]',
    'text-gray-300': 'text-[var(--text-secondary)]',
    'text-gray-400': 'text-[var(--text-secondary)]',
    'text-gray-500': 'text-[var(--text-tertiary)]',
    'text-gray-600': 'text-[var(--text-tertiary)]',
    'border-white/5': 'border-[var(--border-light)]',
    'border-white/6': 'border-[var(--border-light)]',
    'border-white/8': 'border-[var(--border-dark)]',
    'border-white/10': 'border-[var(--border-dark)]',
    'border-white/20': 'border-[var(--border-dark)]',
    'bg-white/3': 'bg-[var(--border-light)]',
    'bg-white/5': 'bg-[var(--border-light)]',
}

for old_cls, new_cls in replacements.items():
    content = content.replace(old_cls, new_cls)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done refactoring App.jsx via script.")
