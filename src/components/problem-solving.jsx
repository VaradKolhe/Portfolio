import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { LeetCodeIcon, CodeChefIcon, CodeforcesIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

export function ProblemSolving() {
  return (
    <section id="problem-solving" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading
          index="05"
          label="Problem Solving"
          title="Algorithmic Rigor & Reasoning"
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="space-y-6">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Competitive programming and rigorous CS examination is where I refined my ability to break down complex problems and design efficient solutions under constraints. This analytical mindset carries over into my engineering work, where I prioritize algorithmic efficiency and system correctness.
            </p>

            <div className="flex flex-wrap gap-4">
              <ProfileLink
                href={profile.links.leetcode}
                label="LeetCode"
                icon={<LeetCodeIcon className="h-5 w-5" />}
                sub="Knight (1850+)"
              />
              <ProfileLink
                href={profile.links.codechef}
                label="CodeChef"
                icon={<CodeChefIcon className="h-5 w-5" />}
                sub="3-Star (1600+)"
              />
              <ProfileLink
                href={profile.links.codeforces}
                label="Codeforces"
                icon={<CodeforcesIcon className="h-5 w-5" />}
                sub="1150+ Rating"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            <StatCard value="AIR 4391" label="GATE CS 2026 Qualified" />
            <StatCard value="700+" label="DSA Problems Solved" />
            <StatCard value="Knight" label="LeetCode Rating (1850+)" />
            <StatCard value="3-Star" label="CodeChef Rating (1600+)" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfileLink({ href, label, icon, sub }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted-foreground">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </a>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="font-mono text-xl font-semibold text-primary">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
