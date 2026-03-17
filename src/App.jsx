import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes will be added later */}
        </Routes>
      </main>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;