import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';      // Import About
import Reviews from './pages/Reviews';  // Import Reviews
import Contact from './pages/Contact';  // Import Contact

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          {/* About Route */}
          <Route path="/reviews" element={<Reviews />} />      {/* Reviews Route */}
          <Route path="/contact" element={<Contact />} />      {/* Contact Route */}
          {/* Other routes will be added later */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;