import { useState } from "react"
import Navbar from "../components/Navbar"

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    adType: "",
    duration: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData)
      })

      alert("Booking Submitted Successfully")

      setFormData({
        name: "",
        business: "",
        phone: "",
        adType: "",
        duration: ""
      })

    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  }

  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-[#050816] text-white flex justify-center items-center px-6 py-20">

      <form
        onSubmit={handleSubmit}
        className="bg-[#0b1120] p-10 rounded-2xl w-full max-w-xl border border-cyan-500/20"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Book Advertising Slot
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
            required
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
            required
          />

          <select
            name="adType"
            value={formData.adType}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
            required
          >

            <option value="">Select Ad Type</option>
            <option value="2D">2D Advertising</option>
            <option value="3D">3D Advertising</option>

          </select>

          <input
            type="text"
            name="duration"
            placeholder="Campaign Duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black p-4 rounded-lg font-bold hover:bg-cyan-300"
          >
            Submit Booking
          </button>

        </div>

      </form>

    </div>
     </>
  )
}

export default Booking