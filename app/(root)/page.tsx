import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"

const Home = () => {
  return (
    <div
      className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0"
    >
      <Header />

      <section
        id="hero"
        className="snap-start"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="snap-center"
      >
        <About />
      </section>
      
      {/* EXPERIENCE */}
      
      {/* SKILLS */}
      
      {/* PROJECTS */}
      
      {/* CONTACT ME */}
      
    </div>
  )
}

export default Home