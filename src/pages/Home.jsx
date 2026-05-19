import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </>
  )
}

export default Home