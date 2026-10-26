import { Briefcase, Calendar } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading
          index="02"
          label="Experience"
          title="Engineering in Production"
        />

        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3.5 before:h-full before:w-0.5 before:bg-border md:before:left-4">
          {experience.map((item, idx) => (
            <Reveal key={item.company + idx} delay={idx * 100}>
              <div className="relative pl-10 md:pl-12">
                {/* Timeline node icon */}
                <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-primary md:h-8 md:w-8">
                  <Briefcase className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </div>

                {/* Card Container */}
                <div className="rounded-xl border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary/40">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <div className="text-sm font-medium text-primary">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.period}</span>
                      <span>•</span>
                      <span className="rounded-full bg-accent/60 px-2 py-0.5 text-foreground">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {item.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
