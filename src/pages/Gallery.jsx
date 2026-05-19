import Navbar from "../components/Navbar"

function Gallery() {
  return (
    <>
      <Navbar />

      <div className="px-8 py-20">

        <h1 className="text-5xl font-bold text-center mb-12">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 h-64 rounded-xl"></div>
          <div className="bg-gray-800 h-64 rounded-xl"></div>
          <div className="bg-gray-800 h-64 rounded-xl"></div>

        </div>

      </div>
    </>
  )
}

export default Gallery