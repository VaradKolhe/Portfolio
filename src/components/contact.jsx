import { ArrowUpRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeChefIcon, CodeforcesIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/portfolio-data"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading index="05" label="Contact" title="Let's build something reliable" />

        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm currently{" "}
              <span className="text-foreground">{profile.availability.toLowerCase()}</span>. If
              you're working on hard backend problems — scale, correctness, or reliability — I'd
              love to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.links.email}
                className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {profile.email}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex flex-wrap items-center gap-1">
                <IconLink href={profile.links.github} label="GitHub">
                  <GithubIcon className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={profile.links.linkedin} label="LinkedIn">
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={profile.links.leetcode} label="LeetCode">
                  <LeetCodeIcon className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={profile.links.codechef} label="CodeChef">
                  <CodeChefIcon className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={profile.links.codeforces} label="Codeforces">
                  <CodeforcesIcon className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={profile.links.email} label="Email">
                  <Mail className="h-[18px] w-[18px]" />
                </IconLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-xs text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}. {profile.location}.
          </span>
          <span className="font-mono">Designed & built with care.</span>
        </div>
      </footer>
    </section>
  )
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  )
}
