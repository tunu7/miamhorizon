function Pricing() {
  return (
    <section className="px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Pricing
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            2D Advertising
          </h3>

          <p>Starting from ₹400/day</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            3D Advertising
          </h3>

          <p>Starting from ₹3,000/day</p>
        </div>

      </div>

    </section>
  )
}

export default Pricing