import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { EngineeringFocus } from "@/components/engineering-focus"
import { Work } from "@/components/work"
import { ProblemSolving } from "@/components/problem-solving"
import { Contact } from "@/components/contact"

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <EngineeringFocus />
      <Work />
      <ProblemSolving />
      <Contact />
    </main>
  )
}
