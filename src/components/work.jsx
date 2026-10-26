import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHeading
          index="04"
          label="Selected Work"
          title="Systems built to stay up"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={(i % 2) * 80}
              className={cn(project.featured && "md:row-span-1")}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium text-foreground">{project.name}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{project.blurb}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </div>

      <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-mono text-xs text-foreground">{project.metric}</span>
      </div>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-xs text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </a>
  )
}
