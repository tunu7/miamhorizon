import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Billboard from "./pages/Billboard";
import Media from "./pages/Media";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billboard" element={<Billboard />} />
        <Route path="/media" element={<Media />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;