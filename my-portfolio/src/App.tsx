import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Services } from "@/components/Services"
import { Projects } from "@/components/Projects"
import { Process } from "@/components/Process"
import { Journey } from "@/components/Journey"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Process />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  )
}
