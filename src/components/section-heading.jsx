import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function SectionHeading({ index, label, title, className }) {
  return (
    <Reveal className={cn("mb-10 md:mb-14", className)}>
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-muted-foreground">{label}</span>
      </div>
      <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
    </Reveal>
  )
}
