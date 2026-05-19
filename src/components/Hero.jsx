import { useNavigate } from "react-router-dom"

function Hero() {

  const navigate = useNavigate()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Arunachal’s First
        <span className="text-cyan-400"> 3D LED Advertising</span>
      </h1>

      <p className="text-gray-300 max-w-2xl text-lg">
        Reach 15,000–25,000 people daily with premium outdoor advertising in Itanagar.
      </p>

      <button
        onClick={() => navigate("/booking")}
        className="mt-8 bg-cyan-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-400"
      >
        Book Your Slot
      </button>

    </section>
  )
}

export default Hero