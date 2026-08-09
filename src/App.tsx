import { useState } from 'react'
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Car,
  ChevronDown,
  ClipboardList,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  X,
} from 'lucide-react'
import Reveal from './components/Reveal'
import CustomCursor from './components/CustomCursor'
import Magnetic from './components/Magnetic'
import ScrollProgress from './components/ScrollProgress'
import { useScrolled } from './hooks/useScrolled'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
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
    items: ['Node.js', 'Supabase', 'OpenAI Whisper API'],
  },
  {
    category: 'Infrastructure',
    items: ['Vercel (CI/CD)', 'Auth (Clerk / Supabase)', 'PayPal'],
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
    detail: '',
  },
]

const PROJECTS = [
  {
    icon: MapPin,
    title: 'Smart Livelihood Monitoring Platform',
    subtitle: 'with Geographic Information System Integration',
    description:
      'A GIS-powered platform for tracking, mapping, and managing livelihood programs across communities.',
    link: null,
  },
  {
    icon: Car,
    title: 'Sakay App',
    subtitle: 'SafeTrike ride-hailing platform',
    description:
      'A tricycle ride-hailing app connecting commuters with drivers for safer, more convenient trips.',
    link: 'https://safetrike-2e135.web.app/',
  },
  {
    icon: Briefcase,
    title: 'csrai',
    subtitle: 'AI case report generator for social workers',
    description:
      'An AI-powered platform that turns raw field notes into agency-ready social work reports -- SCSRs, case progress reports, and DSWD/4Ps-compliant documentation -- with trauma-informed language built in.',
    link: 'https://csrai.co',
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
    <span className="inline-flex items-center gap-3 font-inter text-xs uppercase tracking-[0.3em] text-white/50">
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

      <section className="relative min-h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-10 pt-24 sm:px-10 lg:px-16 lg:pt-28">
          <div className="max-w-3xl">
              <div className="mb-6 flex animate-fade-up items-center gap-2 lg:mb-8">
                <Code2 className="h-4 w-4 text-white/70" />
                <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                  Freelance Full-Stack Developer
                </span>
              </div>

              <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Design.</span>
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Develop.</span>
                <span className="block text-[clamp(2.4rem,6.5vw,5.5rem)]">Deploy.</span>
              </h1>

              <p className="animate-fade-up-delay-2 mt-5 max-w-md font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-6">
                I'm Mark Motol -- I build fast, reliable software
                <br />
                that goes from idea to production -- <span className="font-bold text-white">and actually ships.</span>
              </p>

              <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center gap-4 sm:gap-6 lg:mt-8">
                <Magnetic>
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
                  >
                    See My Work
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Magnetic>

                <div className="hidden items-center gap-3 sm:flex">
                  <Award className="h-8 w-8 text-white/50" />
                  <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                    <div>Full-Stack</div>
                    <div>Developer</div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-up-delay-4 mt-6 flex flex-wrap gap-6 sm:mt-8 sm:gap-12 lg:mt-10 lg:gap-16">
                {[
                  { value: '3+', label: 'Apps Shipped' },
                  { value: '3', label: 'Degrees Earned' },
                  { value: '100%', label: 'Freelance' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-inter text-xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/40 transition hover:text-white/70"
        >
          <ChevronDown className="h-6 w-6" />
        </a>
      </section>

      <section id="about" className="border-t border-white/10 bg-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Kicker>About</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Developer &amp; Social Worker
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-white/70 sm:text-lg">
              I'm Mark Motol, a freelance full-stack developer with a background in social
              work -- a combination that shapes how I build. From an AI report generator for
              social workers to livelihood monitoring and referral tracking systems, I build
              software that actually fits how caseworkers and field teams operate. I hold a
              Bachelor of Science in Information Technology (Major in Programming), a Master
              of Science in Information Technology, and a Master of Social Work.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10 bg-neutral-950 px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Kicker>Stack</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tools I Work With
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {STACK.map((group, i) => (
              <Reveal key={group.category} delay={200 + i * 120}>
                <h3 className="font-inter text-xs uppercase tracking-widest text-white/40">
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

      <section id="education" className="border-t border-white/10 bg-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Kicker>Education</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Academic Background
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.degree} delay={200 + i * 120}>
                <div className="relative overflow-hidden border border-white/10 p-6 sm:p-8">
                  <span className="pointer-events-none absolute -right-2 -top-8 select-none font-podium text-[6rem] leading-none text-white/[0.04] sm:text-[8rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <GraduationCap className="h-8 w-8 text-white/60" />
                  <h3 className="relative mt-4 font-inter text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  {edu.detail && (
                    <p className="relative mt-1 font-inter text-sm text-white/50">{edu.detail}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 bg-black px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Kicker>Projects</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
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
                    <span className="font-inter text-sm text-white/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-podium text-2xl uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-inter text-xs uppercase tracking-widest text-white/40">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 max-w-xl font-inter text-sm leading-relaxed text-white/60">
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

      <section id="contact" className="border-t border-white/10 bg-neutral-950 px-6 py-24 text-center sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-2xl">
          <Reveal className="flex justify-center">
            <Kicker>Contact</Kicker>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-podium text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Work Together
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-inter text-base leading-relaxed text-white/70">
              Have a project in mind? I'm available for freelance work and always open to
              discussing new ideas.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex justify-center">
            <Magnetic>
              <a
                href="mailto:mjcmotol@gmail.com"
                className="flex items-center gap-2 bg-white px-7 py-4 font-inter text-xs uppercase tracking-widest text-black transition hover:bg-neutral-200"
              >
                mjcmotol@gmail.com
                <Mail className="h-4 w-4" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center font-inter text-xs text-white/40 sm:px-10 lg:px-16">
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
                className="font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl"
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
