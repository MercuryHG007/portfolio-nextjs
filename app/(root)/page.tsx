import Header from "@/components/header"
import Hero from "@/components/hero"

const Home = () => {
  return (
    <div
      className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory z-0"
    >
      <Header />

      <section
        id="hero"
        className="snap-center"
      >
        <Hero />
      </section>

      {/* ABOUT */}
      
      {/* EXPERIENCE */}
      
      {/* SKILLS */}
      
      {/* PROJECTS */}
      
      {/* CONTACT ME */}
      
    </div>
  )
}

export default Home