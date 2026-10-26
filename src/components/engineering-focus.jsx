import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/portfolio-data"

export function EngineeringFocus() {
  const focusGroup = skillGroups.find((g) => g.title === "Engineering Focus")
  const techGroup = skillGroups.find((g) => g.title === "Technical Stack")

  return (
    <section id="focus" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading
          index="03"
          label="Engineering Focus"
          title="Building for Scale & Reliability"
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Core Expertise
            </h3>
            <ul className="grid gap-3">
              {focusGroup?.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techGroup?.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
