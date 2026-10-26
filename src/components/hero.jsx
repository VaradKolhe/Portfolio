import { ArrowUpRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon, CodeforcesIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { profile, stats } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* dotted grid backdrop with a soft fade */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-36 md:pb-28 md:pt-44">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {profile.availability}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {profile.name}
            <span className="block text-muted-foreground">{profile.role}</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex flex-wrap items-center gap-1">
              <SocialLink href={profile.links.github} label="GitHub">
                <GithubIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.links.leetcode} label="LeetCode">
                <LeetCodeIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.links.codechef} label="CodeChef">
                <CodeChefIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.links.codeforces} label="Codeforces">
                <CodeforcesIcon className="h-[18px] w-[18px]" />
              </SocialLink>
              <SocialLink href={profile.links.email} label="Email">
                <Mail className="h-[18px] w-[18px]" />
              </SocialLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-5 py-6">
                <dt className="font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  )
}
