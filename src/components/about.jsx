import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading index="01" label="About" title="Engineering for the long run" />

        <div className="max-w-3xl">
          <div className="space-y-5">
            {about.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-pretty leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
