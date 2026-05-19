import Navbar from "../components/Navbar"

function About() {
  return (
    <>
      <Navbar />

      <div className="px-8 py-20 max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          About MIAM Horizons
        </h1>

        <p className="text-gray-300 text-lg leading-8">
          MIAM Horizons is Arunachal Pradesh’s first premium outdoor LED advertising platform offering both 2D and 3D anamorphic advertising experiences.
        </p>

      </div>
    </>
  )
}

export default About