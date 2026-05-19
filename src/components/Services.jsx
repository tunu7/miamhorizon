function Services() {
  return (
    <section className="px-8 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            2D Advertising
          </h3>

          <p className="text-gray-400">
            High visibility LED advertisements for local and national brands.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            3D Anamorphic Ads
          </h3>

          <p className="text-gray-400">
            Premium immersive 3D ads that grab instant attention.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Product Launches
          </h3>

          <p className="text-gray-400">
            Powerful campaign launches for events and new products.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Services