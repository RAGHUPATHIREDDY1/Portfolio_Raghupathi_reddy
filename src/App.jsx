import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Moon,
  Phone,
  Send,
  LoaderCircle,
  Sun,
  X,
} from "lucide-react";

const profile = {
  name: "Erri Raghupathi Reddy",
  email: import.meta.env.VITE_PUBLIC_EMAIL || "raghupathireddyerri330@gmail.com",
  phone: import.meta.env.VITE_PUBLIC_PHONE || "+91 93467 72671",
  github: "https://github.com/RAGHUPATHIREDDY1",
  linkedin: "https://www.linkedin.com/in/raghupathi-reddy-erri-4a45a3334/",
};
const normalizedPhone = profile.phone.replace(/\D/g, "");
const hasPublicPhone = /^[+()\d.\-\s]{7,30}$/.test(profile.phone) && normalizedPhone.length >= 7;

const projectTypes = [
  "Website Development",
  "Full Stack Application",
  "Frontend Development",
  "Backend/API Development",
  "MERN Stack Project",
  "Python/Django Project",
  "Job Opportunity",
  "Collaboration",
  "Other",
];

const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  {
    title: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  { title: "Data", items: ["MongoDB", "SQL", "MySQL"] },
  { title: "Tools & workflow", items: ["Git", "GitHub", "VS Code", "REST APIs", "JWT"] },
];

const projects = [
  {
    number: "01",
    name: "FarmConnect",
    type: "Full-stack marketplace",
    description:
      "An agricultural marketplace connecting buyers and sellers, with product discovery and order workflows.",
    stack: ["React.js", "Django", "DRF", "MySQL", "JWT"],
    features: ["Buyer and seller authentication", "Product browsing and search", "Cart, orders, and AI recommendations"],
    live: "https://farmconnect-447b.vercel.app/",
    repo: "https://github.com/RAGHUPATHIREDDY1/farmconnect",
    backend: "https://farmconnectbackend.onrender.com/",
    theme: "farm",
    monogram: "FC",
  },
  {
    number: "02",
    name: "PrimeStream",
    type: "Video streaming application",
    description:
      "A responsive video streaming experience backed by a Django REST API.",
    stack: ["React.js", "Django", "DRF", "MySQL", "JWT"],
    features: ["User authentication", "Video APIs and search", "Watchlist management"],
    live: "",
    repo: "https://github.com/RAGHUPATHIREDDY1/prime-streem",
    backend: "",
    theme: "stream",
    monogram: "PS",
  },
  {
    number: "03",
    name: "Amazon Clone",
    type: "E-commerce frontend",
    description:
      "A responsive e-commerce interface inspired by Amazon, focused on product presentation and interactive browsing.",
    stack: ["React.js", "JavaScript", "HTML", "CSS"],
    features: ["Product-focused interface", "Responsive layout", "Interactive shopping experience"],
    live: "https://amazon-clone-one-eta-19.vercel.app/",
    repo: "",
    backend: "",
    theme: "shop",
    monogram: "AC",
  },
  {
    number: "04",
    name: "Agrolink",
    type: "Agricultural marketplace",
    description:
      "A React marketplace prototype for agricultural products, with buyer and seller flows and local browser storage.",
    stack: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
    features: ["Buyer and seller roles", "Product browsing and cart", "Seller inventory workflow"],
    live: "",
    repo: "https://github.com/RAGHUPATHIREDDY1/agrolink",
    theme: "farm",
    monogram: "AG",
  },
  {
    number: "05",
    name: "Billing Dashboard",
    type: "Responsive frontend",
    description:
      "A responsive React dashboard built from a Figma design, using reusable components and Tailwind CSS.",
    stack: ["React", "Tailwind CSS", "JavaScript"],
    features: ["Responsive dashboard UI", "Reusable components", "Figma-based implementation"],
    live: "https://figma-assignment-theta-eight.vercel.app",
    repo: "https://github.com/RAGHUPATHIREDDY1/Figma-Assignment",
    theme: "shop",
    monogram: "BD",
  },
  {
    number: "06",
    name: "Employee Management System",
    type: "Full-stack employee management",
    description:
      "A MERN application with protected employee routes and employee record management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    features: ["Create, list, update, and delete employees", "Protected employee routes", "Employee details and dashboard views"],
    live: "",
    repo: "https://github.com/RAGHUPATHIREDDY1/Employee-Management-System",
    theme: "farm",
    monogram: "EM",
  },
];

const journey = [
  ["01", "Started with programming", "Built a foundation through consistent, independent learning."],
  ["02", "Found the frontend", "Learned how to turn ideas into clear, responsive interfaces."],
  ["03", "Moved into the backend", "Explored Python, Django, REST APIs, and relational databases."],
  ["04", "Built full-stack projects", "Connected interfaces, APIs, authentication, and data."],
  ["05", "Learning what’s next", "Currently exploring cloud, AI integration, and scalable systems."],
];

const learning = [
  "Advanced MERN",
  "Advanced Python",
  "AWS & cloud",
  "AI-powered apps",
  "API architecture",
  "Database optimization",
  "Scalable software",
  "System design",
];

function SectionHeading({ eyebrow, title, detail }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {detail && <p className="section-detail">{detail}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.theme}`}>
      <div className="project-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-window-bar">
            <span />
            <span />
            <span />
            <small>{project.name.toLowerCase().replace(" ", "")}.app</small>
          </div>
          <div className="art-content">
            <span className="art-label">FEATURED PROJECT / {project.number}</span>
            <strong>{project.monogram}</strong>
            <div className="art-lines"><i /><i /><i /></div>
            <div className="art-pills"><i /><i /><i /></div>
          </div>
        </div>
        <span className="art-index">{project.number}</span>
      </div>
      <div className="project-copy">
        <div className="project-title-line">
          <div>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="project-arrow"><ArrowUpRight size={19} /></span>
        </div>
        <p className="project-description">{project.description}</p>
        {project.features.length > 0 && (
          <ul className="project-features">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        {project.stack.length > 0 && (
          <div className="tag-list">
            {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
          </div>
        )}
        <div className="project-links">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>
          ) : <span className="link-unavailable">Live link not provided</span>}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={15} /></a>
          ) : <span className="link-unavailable">Source link not verified</span>}
          {project.backend && (
            <a className="backend-link" href={project.backend} target="_blank" rel="noreferrer">API <ArrowUpRight size={15} /></a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ status: "idle", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const submissionInFlight = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    if (!profile.email) {
      setFormState({ status: "error", message: "Email contact is not configured. Please use one of the linked social profiles." });
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setFormState({ status: "error", message: "Could not copy the email address. Please use the contact form." });
    }
  };

  const submitContact = async (event) => {
    event.preventDefault();
    if (submissionInFlight.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const errors = {};
    if (data.name.trim().length < 2) errors.name = "Enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Enter a valid email address.";
    if (data.phone && !/^[+()\d.\-\s]{7,30}$/.test(data.phone.trim())) errors.phone = "Enter a valid phone number.";
    if (data.subject.trim().length < 3) errors.subject = "Enter a subject (at least 3 characters).";
    if (!projectTypes.includes(data.project_type)) errors.project_type = "Choose a project type.";
    if (data.message.trim().length < 20) errors.message = "Please add at least 20 characters.";
    if (!formData.has("privacy_consent")) errors.privacy_consent = "Consent is required before sending.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormState({ status: "error", message: "Please review the highlighted fields." });
      form.querySelector(`[name="${Object.keys(errors)[0]}"]`)?.focus();
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setFormState({
        status: "error",
        message: "The contact form is not configured yet. Please email me directly while it is being set up.",
      });
      return;
    }

    submissionInFlight.current = true;
    setSubmitting(true);
    setFormState({ status: "idle", message: "" });
    try {
      const payload = new FormData(form);
      payload.append("from_name", "Erri Raghupathi Reddy Portfolio");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }
      form.reset();
      setFieldErrors({});
      setFormState({ status: "success", message: "Thanks for reaching out. Your message has been sent successfully." });
    } catch (error) {
      setFormState({
        status: "error",
        message: error instanceof TypeError
          ? "Could not reach Web3Forms. Please try again later or use one of the direct contact links."
          : error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      submissionInFlight.current = false;
      setSubmitting(false);
    }
  };

  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Erri Raghupathi Reddy — home">
          <span className="brand-mark">E<span>.</span></span>
          <span className="brand-name">ERRI RAGHUPATHI REDDY</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle icon-button"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="menu-toggle icon-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="kicker-line" /></p>
              <h1>Building useful<br />things for the <span>web.</span></h1>
              <p className="hero-intro">
                I’m <strong>Erri Raghupathi Reddy</strong> — a Python full stack and MERN developer turning ideas into practical digital products.
              </p>
              <div className="hero-roles">
                <Code2 size={16} />
                <span>Python · Django · React · JavaScript</span>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Let’s work together <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-socials">
                <span>FIND ME ELSEWHERE</span>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address">
                  {copied ? <Check size={17} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
            <div className="hero-visual" aria-label="Developer desk illustration">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="hero-code-card">
                <div className="code-card-header"><span /><span /><span /><small>hello_world.py</small></div>
                <div className="code-lines" aria-hidden="true">
                  <p><b>01</b><span className="code-purple">class</span> Developer:</p>
                  <p><b>02</b>&nbsp;&nbsp;<span className="code-blue">def</span> <span className="code-yellow">build</span>(self):</p>
                  <p><b>03</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">return</span> <span className="code-orange">"with purpose"</span></p>
                  <p><b>04</b></p>
                  <p><b>05</b><span className="code-purple">print</span>(Developer().build())<i className="cursor-blink" /></p>
                </div>
                <div className="code-card-footer"><span><i /> READY TO BUILD</span><span>HYDERABAD, IN</span></div>
              </div>
              <div className="floating-chip chip-react"><span>⚛</span> React.js</div>
              <div className="floating-chip chip-python"><span>Py</span> Python</div>
              <div className="hero-coordinate">17°23' N<br />78°29' E</div>
              <span className="visual-caption">A little bit of logic.<br />A lot of curiosity.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
          <div className="hero-bottom-note"><span>01 — 06</span><span>PORTFOLIO / 2026</span></div>
        </section>

        <section className="about section-shell section-space" id="about">
          <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Curious by nature.<br /><span>Developer by choice.</span></>} />
          <div className="about-layout reveal">
            <div className="about-lead">
              <span className="quote-mark">“</span>
              <p>I like making technology feel useful — not just clever.</p>
              <span className="about-location">BASED IN HYDERABAD, INDIA <span className="status-dot" /></span>
            </div>
            <div className="about-detail">
              <p>I’m a Computer Science graduate passionate about software development and building modern web applications. I enjoy working across the stack — from friendly interfaces to reliable APIs and the data behind them.</p>
              <p>I’ve explored Python, Django, React, JavaScript, Node.js, Express, MongoDB, and SQL through hands-on projects. I’m looking for an opportunity to contribute to real-world software, learn with a strong team, and grow as an engineer.</p>
              <a className="text-link" href="#journey">A bit more about my journey <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="skills section-shell section-space" id="skills">
          <SectionHeading
            eyebrow="02 / THE TOOLKIT"
            title={<>Tools I use to<br /><span>make things work.</span></>}
            detail="A practical toolkit built through coursework, self-learning, and hands-on projects. No made-up scores — just technologies I’ve worked with."
          />
          <div className="skill-grid reveal">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-shell section-space" id="projects">
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title={<>Made to solve<br /><span>real problems.</span></>}
            detail="A selection of full-stack and frontend projects. Project links are included only where they were provided."
          />
          <div className="projects-grid reveal">
            {projects.map((project) => <ProjectCard project={project} key={project.name} />)}
          </div>
        </section>

        <section className="journey section-shell section-space" id="journey">
          <SectionHeading
            eyebrow="04 / THE JOURNEY SO FAR"
            title={<>Learning by doing.<br /><span>Growing every day.</span></>}
            detail="No formal industry experience yet — just steady learning, academic work, and building things to understand how they work."
          />
          <div className="journey-layout reveal">
            <div className="timeline">
              {journey.map(([number, title, description]) => (
                <article className="timeline-item" key={number}>
                  <span className="timeline-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <span className="timeline-marker" />
                </article>
              ))}
            </div>
            <aside className="education-card">
              <p className="eyebrow">EDUCATION</p>
              <span className="education-icon"><Code2 size={20} /></span>
              <h3>B.Tech in Computer Science & Engineering</h3>
              <p>Siddhartha Institute of Technology and Sciences</p>
              <div className="education-meta"><span>Graduated 2026</span><span>CGPA 7.98 / 10</span></div>
              <div className="education-divider" />
              <div className="education-secondary"><span>Intermediate · SR Junior College · MPC</span><span>856 / 1000 · 2020—2022</span></div>
              <div className="education-secondary"><span>SSC · NSR School</span><span>GPA 9.7 / 10 · 2019—2020</span></div>
              <div className="education-secondary"><span>Full Stack Web Development Training</span><span>NxtWave</span></div>
            </aside>
          </div>
        </section>

        <section className="exploring section-shell section-space">
          <div className="exploring-panel reveal">
            <div className="exploring-copy">
              <p className="eyebrow">05 / WHAT’S NEXT</p>
              <h2>Always room<br />to <span>get better.</span></h2>
              <p>These are areas I’m currently exploring — not credentials claimed, but directions I’m excited to grow into.</p>
            </div>
            <div className="learning-list">
              {learning.map((item, index) => <span key={item}><small>0{index + 1}</small>{item}<ArrowUpRight size={14} /></span>)}
            </div>
          </div>
        </section>

        <section className="contact section-shell section-space" id="contact">
          <SectionHeading
            eyebrow="06 / SAY HELLO"
            title={<>Let’s work<br /><span>together.</span></>}
            detail="Share a project, job opportunity, or collaboration idea. I’m looking for junior developer roles and thoughtful software projects."
          />
          <div className="contact-layout reveal">
            <div className="contact-intro">
              <p>Tell me what you’re building or what role you have in mind. I’ll follow up by email.</p>
              <div className="contact-links">
                {profile.email ? (
                  <a className="contact-link" href={`mailto:${profile.email}`}>
                    <span className="contact-link-icon"><Mail size={17} /></span>
                    <span><small>EMAIL</small><strong>{profile.email}</strong></span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <div className="contact-link contact-unconfigured">
                    <span className="contact-link-icon"><Mail size={17} /></span>
                    <span><small>EMAIL</small><strong>Email not configured</strong></span>
                  </div>
                )}
                {hasPublicPhone ? (
                  <>
                    <a className="contact-link" href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                      <span className="contact-link-icon"><Phone size={17} /></span>
                      <span><small>PHONE</small><strong>{profile.phone}</strong></span>
                      <ArrowUpRight size={15} />
                    </a>
                    <a className="contact-link" href={`https://wa.me/${normalizedPhone}`} target="_blank" rel="noreferrer">
                      <span className="contact-link-icon"><MessageCircle size={17} /></span>
                      <span><small>WHATSAPP</small><strong>Start a direct chat</strong></span>
                      <ArrowUpRight size={15} />
                    </a>
                  </>
                ) : (
                  <div className="contact-link contact-unconfigured">
                    <span className="contact-link-icon"><Phone size={17} /></span>
                    <span><small>PHONE / WHATSAPP</small><strong>Phone number not configured</strong></span>
                  </div>
                )}
                <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                  <span className="contact-link-icon"><Github size={17} /></span>
                  <span><small>GITHUB</small><strong>Explore my repositories</strong></span>
                  <ArrowUpRight size={15} />
                </a>
                <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="contact-link-icon"><Linkedin size={17} /></span>
                  <span><small>LINKEDIN</small><strong>Let’s connect professionally</strong></span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
              <p className="contact-place"><span className="status-dot" /> Hyderabad, Telangana, India</p>
            </div>
            <form className="contact-form" onSubmit={submitContact} noValidate>
              <div className="form-topline"><span>PROJECT / ROLE ENQUIRY</span><span>WEB3FORMS / HTTPS</span></div>
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""}
              />
              <div className="enquiry-fields">
                <label className="field">
                  <span>Full name <b>*</b></span>
                  <input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? "error-name" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, name: undefined }))} />
                  {fieldErrors.name && <small className="field-error" id="error-name">{fieldErrors.name}</small>}
                </label>
                <label className="field">
                  <span>Email address <b>*</b></span>
                  <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? "error-email" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, email: undefined }))} />
                  {fieldErrors.email && <small className="field-error" id="error-email">{fieldErrors.email}</small>}
                </label>
                <label className="field">
                  <span>Phone number <small>OPTIONAL</small></span>
                  <input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+91 ..." aria-invalid={Boolean(fieldErrors.phone)} aria-describedby={fieldErrors.phone ? "error-phone" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, phone: undefined }))} />
                  {fieldErrors.phone && <small className="field-error" id="error-phone">{fieldErrors.phone}</small>}
                </label>
                <label className="field">
                  <span>Subject <b>*</b></span>
                  <input name="subject" required maxLength={140} placeholder="What would you like to discuss?" aria-invalid={Boolean(fieldErrors.subject)} aria-describedby={fieldErrors.subject ? "error-subject" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, subject: undefined }))} />
                  {fieldErrors.subject && <small className="field-error" id="error-subject">{fieldErrors.subject}</small>}
                </label>
                <label className="field">
                  <span>Project type <b>*</b></span>
                  <select name="project_type" required defaultValue="" aria-invalid={Boolean(fieldErrors.project_type)} aria-describedby={fieldErrors.project_type ? "error-project-type" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, project_type: undefined }))}>
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((type) => <option key={type}>{type}</option>)}
                  </select>
                  {fieldErrors.project_type && <small className="field-error" id="error-project-type">{fieldErrors.project_type}</small>}
                </label>
              </div>
              <label className="field description-field">
                <span>Message <b>*</b></span>
                <textarea name="message" rows="5" required minLength={20} maxLength={3000} placeholder="Tell me a little about your project, goals, or opportunity..." aria-invalid={Boolean(fieldErrors.message)} aria-describedby={fieldErrors.message ? "error-message" : undefined} onChange={() => setFieldErrors((current) => ({ ...current, message: undefined }))} />
                {fieldErrors.message && <small className="field-error" id="error-message">{fieldErrors.message}</small>}
              </label>
              <label className="consent-field" aria-describedby="contact-privacy">
                <input name="privacy_consent" type="checkbox" value="I agree" required aria-invalid={Boolean(fieldErrors.privacy_consent)} onChange={() => setFieldErrors((current) => ({ ...current, privacy_consent: undefined }))} />
                <span>I agree that my details will be sent to Web3Forms and used to respond to my enquiry. <b>*</b></span>
              </label>
              {fieldErrors.privacy_consent && <small className="field-error consent-error">{fieldErrors.privacy_consent}</small>}
              {formState.message && (
                <p className={`form-message ${formState.status}`} role="status">{formState.message}</p>
              )}
              <button className="button button-primary form-submit" type="submit" disabled={submitting} aria-busy={submitting}>
                {submitting ? <>Sending message... <LoaderCircle className="loading-icon" size={15} /></> : <>Send message <Send size={15} /></>}
              </button>
              <p className="privacy-notice" id="contact-privacy">
                Your details are submitted directly to Web3Forms, which forwards them to my email so I can reply. Review Web3Forms’ privacy policy before submitting, and please don’t include passwords or sensitive personal information.
              </p>
              <p className="form-note">The access key is public in a browser app. Restrict its allowed domains in Web3Forms.</p>
            </form>
          </div>
        </section>
      </main>

      {hasPublicPhone && (
        <a
          className="floating-whatsapp"
          href={`https://wa.me/${normalizedPhone}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={20} /><span>Let’s talk</span>
        </a>
      )}

      <footer className="site-footer section-shell">
        <a className="brand" href="#home"><span className="brand-mark">E<span>.</span></span><span className="brand-name">ERRI RAGHUPATHI REDDY</span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="footer-copy">© {new Date().getFullYear()} ERRI RAGHUPATHI REDDY</span>
        <div className="footer-socials" aria-label="Social profiles">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        </div>
      </footer>
    </>
  );
}

export default App;
