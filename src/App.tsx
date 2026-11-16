import { useState } from 'react'
import {
  ArrowUpRight,
  Car,
  ChevronDown,
  ClipboardList,
  Code2,
  GraduationCap,
  Mail,
  Receipt,
  X,
} from 'lucide-react'
import Reveal from './components/Reveal'
import CustomCursor from './components/CustomCursor'
import Magnetic from './components/Magnetic'
import ScrollProgress from './components/ScrollProgress'
import { useScrolled } from './hooks/useScrolled'

// lucide-react 1.x no longer ships brand logos, so the LinkedIn mark is inline.
function Linkedin({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const LINKEDIN = 'https://www.linkedin.com/in/mark-jonathan-motol-268931430/'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const STACK = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PHP', 'Laravel', 'Supabase', 'MySQL', 'OpenAI Whisper API', 'Claude API', 'n8n'],
  },
  {
    category: 'Infrastructure',
    items: ['Vercel (CI/CD)', 'Auth (Clerk / Supabase)', 'PayPal', 'Google Workspace APIs'],
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Information Technology',
    detail: 'Major in Programming',
  },
  {
    degree: 'Master of Science in Information Technology',
    detail: '',
  },
  {
    degree: 'Master of Social Work',
    detail: 'Completed · Graduation February 2027',
  },
]

const EXPERIENCE = [
  {
    role: 'Freelance Full-Stack Developer',
    period: '2026 – Present',
    detail:
      'Design, build and deploy web apps and automations end to end, from React and Supabase apps to n8n workflows with AI document processing.',
  },
  {
    role: 'Financial Advisor',
    period: 'Present',
    detail: 'Help individuals and families plan for protection, savings and long-term financial goals.',
  },
  {
    role: 'Project Coordinator',
    period: '11 years',
    detail:
      'Coordinated community development projects in the field, working with local partners, community associations and the families they serve.',
  },
  {
    role: 'Supervisor & Training Specialist, Telecommunications',
    period: 'Earlier career',
    detail: 'Mapping and mall-kiosk supervisor, then trained newly hired sales agents.',
  },
]

const PROJECTS = [
  {
    icon: Car,
    title: 'Sakay App',
    subtitle: 'SafeTrike ride-hailing platform',
    description:
      'A tricycle ride-hailing app connecting commuters with drivers for safer, more convenient trips.',
    link: 'https://safetrike-2e135.web.app/',
  },
  {
    icon: Receipt,
    title: 'Order-to-Invoice Kit',
    subtitle: 'n8n automation for small online businesses',
    description:
      'Six n8n workflows that take orders from emailed PDFs (read with AI) or a Google Form, log them to Google Sheets, generate numbered PDF invoices with one-click approval, send overdue payment reminders, and alert on failures. Sold on Gumroad.',
    link: 'https://gumroad.com/l/vzvksn',
  },
  {
    icon: ClipboardList,
    title: 'Referral Tracker',
    subtitle: 'Individual Referral Tracking System',
    description:
      'A role-based referral management system with status workflows and area-scoped access control, built with React and Supabase.',
    link: 'https://slp-referral-tracker-852l.vercel.app/',
  },
]

function Kicker({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-3 font-inter text-xs uppercase tracking-[0.3em] text-white/60">
      <span className="h-px w-8 bg-white/30" />
      {children}
    </span>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <div className="bg-black">
      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      </div>

      <CustomCursor />
      <ScrollProgress />

      <nav
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b px-6 transition-all duration-300 sm:px-10 lg:px-16 ${
          scrolled
            ? 'border-white/10 bg-black/80 py-4 backdrop-blur-md lg:py-5'
            : 'border-transparent bg-transparent py-5 lg:py-7'
        }`}
      >
        <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
          Mark Motol
        </span>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-inter text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <Magnetic className="hidden md:inline-block">
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Magnetic>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-end space-y-1.5 md:hidden"
        >
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-6 bg-white" />
          <div className="h-0.5 w-4 bg-white" />
        </button>
      </nav>

      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-10 pt-24 sm:px-10 lg:px-16 lg:pt-28">
          <div className="max-w-3xl">
              <div className="mb-6 flex animate-fade-up items-center gap-2 lg:mb-8">
                <Code2 className="h-4 w-4 text-white/70" />
                <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                  Freelance Full-Stack Developer
                </span>
              </div>

              <h1 className="animate-fade-up-delay-1 font-podium font-bold uppercase leading-[0.92] tracking-tight text-white">
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Design.</span>
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Develop.</span>
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Deploy.</span>
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-6">
                I'm Mark Motol. I build fast, reliable software that goes from idea to
                production <span className="font-bold text-white">and actually ships.</span>
              </p>

              <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-8">
                <Magnetic>
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 bg-white px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-black transition hover:bg-neutral-200 sm:px-7 sm:py-4 sm:text-xs"
                  >
                    See My Work
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/30 px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10 sm:px-7 sm:py-4 sm:text-xs"
                >
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="animate-fade-up-delay-4 mt-6 flex flex-wrap gap-6 sm:mt-8 sm:gap-12 lg:mt-10 lg:gap-16">
                {[
                  { value: '5+', label: 'Apps Shipped' },
                  { value: '11 yrs', label: 'Project Coordination' },
                  { value: 'Freelance', label: 'Developer & Financial Advisor' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-inter text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-inter text-[10px] uppercase tracking-widest text-white/60 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

        <a
          href="#projects"
          aria-label="Scroll to Projects section"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40 transition hover:text-white/70"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      <section id="projects" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Kicker>Projects</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selected Work
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-white/10">
            {PROJECTS.map((project, i) => {
              const Icon = project.icon
              const rowClass =
                'group relative flex flex-col gap-6 overflow-hidden border-b border-white/10 py-8 sm:flex-row sm:items-center sm:gap-8 sm:py-10'

              const inner = (
                <>
                  <span className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 bg-white/[0.04] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="flex items-center gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-white/40 transition-colors duration-500 group-hover:border-white/30 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-inter text-sm text-white/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-podium text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-inter text-xs uppercase tracking-widest text-white/60">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 max-w-xl font-inter text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-white/70 sm:flex-col sm:items-end sm:text-right">
                    {project.link ? (
                      <>
                        Visit Project
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </>
                    ) : (
                      <span className="text-white/40">Academic Project</span>
                    )}
                  </div>
                </>
              )

              return (
                <Reveal key={project.title} delay={i * 120}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${rowClass} cursor-pointer`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={rowClass}>{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Kicker>About</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Software With Real-World Context
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/70 sm:text-lg">
              I'm Mark Motol, a freelance full-stack developer and financial advisor. Before
              building software, I spent 11 years coordinating community development projects,
              working side by side with field teams, local partners and families. That
              experience shapes how I build: tools like referral tracking systems and workflow
              automations that fit how real teams actually work. I hold a Bachelor of Science
              in Information Technology (Major in Programming) and a Master of Science in
              Information Technology, and I have completed a Master of Social Work (graduating
              February 2027).
            </p>
          </Reveal>
        </div>
      </section>

      <section id="experience" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Kicker>Experience</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where I've Worked
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-white/10">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.role} delay={200 + i * 100}>
                <div className="flex flex-col gap-2 border-b border-white/10 py-6 sm:flex-row sm:gap-10 sm:py-8">
                  <div className="font-inter text-xs uppercase tracking-widest text-white/60 sm:w-40 sm:shrink-0 sm:pt-1">
                    {job.period}
                  </div>
                  <div>
                    <h3 className="font-inter text-lg font-semibold text-white">{job.role}</h3>
                    <p className="mt-2 max-w-2xl font-inter text-sm leading-relaxed text-white/70">{job.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10 bg-white/[0.02] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Kicker>Stack</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tools I Work With
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {STACK.map((group, i) => (
              <Reveal key={group.category} delay={200 + i * 120}>
                <h3 className="font-inter text-xs uppercase tracking-widest text-white/60">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-1.5 font-inter text-xs text-white/70 transition hover:border-white/30 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Kicker>Education</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Academic Background
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.degree} delay={200 + i * 120}>
                <div className="relative overflow-hidden border border-white/10 p-6 sm:p-8">
                  <span className="pointer-events-none absolute -right-2 -top-8 select-none font-podium text-[6rem] font-bold leading-none text-white/[0.04] sm:text-[8rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <GraduationCap className="h-8 w-8 text-white/60" />
                  <h3 className="relative mt-4 font-inter text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  {edu.detail && (
                    <p className="relative mt-1 font-inter text-sm text-white/60">{edu.detail}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/[0.02] px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-2xl">
          <Reveal className="flex justify-center">
            <Kicker>Contact</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Work Together
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-inter text-base leading-relaxed text-white/70">
              Have a project in mind? I'm available for freelance work and always open to
              discussing new ideas.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <a
                href="mailto:mjcmotol@gmail.com"
                className="flex items-center gap-2 bg-white px-7 py-4 font-inter text-xs uppercase tracking-widest text-black transition hover:bg-neutral-200"
              >
                mjcmotol@gmail.com
                <Mail className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/30 px-7 py-4 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10"
              >
                LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center font-inter text-xs text-white/60 sm:px-10 lg:px-16">
        © {new Date().getFullYear()} Mark Motol. All rights reserved.
      </footer>

      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 py-5">
          <div className="flex items-center justify-between">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
              Mark Motol
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl font-bold uppercase text-white transition-all duration-500 sm:text-5xl"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10"
              style={{
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App