import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/portfolio-data"

const sections = [
  { id: "about", label: "About" },
  { id: "focus", label: "Focus" },
  { id: "work", label: "Work" },
  { id: "problem-solving", label: "Rigor" },
  { id: "contact", label: "Contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("about")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card font-mono text-sm font-medium text-primary">
            {"VK"}
          </span>
          <span className="hidden text-sm font-medium text-foreground sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.links.resume}
            className="hidden rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:inline-block"
          >
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground md:hidden"
          >
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  "h-0.5 w-4 bg-foreground transition-transform",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn("h-0.5 w-4 bg-foreground transition-opacity", open && "opacity-0")}
              />
              <span
                className={cn(
                  "h-0.5 w-4 bg-foreground transition-transform",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.links.resume}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md px-2 py-2.5 text-sm font-medium text-primary"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
