import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiCalendar, FiUser, FiStar, FiPhone } from 'react-icons/fi';
import { MdLocalHospital } from 'react-icons/md';
import { GiSpineArrow } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Doctor Info */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <MdLocalHospital className="text-white text-xl" />
              </div>
              
              {/* Doctor Info */}
              <div>
                <span className="font-semibold text-gray-900 block text-sm sm:text-base leading-tight">
                  Dr. Dinesh Agarwal
                </span>
                <span className="text-xs text-cyan-600 font-medium flex items-center gap-1">
                  <GiSpineArrow className="text-xs" />
                  <span>Spine & Ortho Specialist</span>
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-600 hover:text-cyan-600 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book-appointment"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md flex items-center gap-2"
              >
                <FiCalendar className="text-sm" />
                <span>Book Now</span>
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center space-x-3 md:hidden">
              <Link
                to="/book-appointment"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-md flex items-center gap-1.5"
              >
                <FiCalendar className="text-xs" />
                <span>Book</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FiX className="text-2xl text-gray-700" />
                ) : (
                  <FiMenu className="text-2xl text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
  isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
}`}>
  {/* Backdrop with Blur */}
  <div 
    className="absolute inset-0 bg-black/40 backdrop-blur-md"
    onClick={() => setIsOpen(false)}
  />

  {/* Sidebar - Full Height */}
  <div className={`absolute right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-sm shadow-2xl transition-transform duration-300 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}>
    {/* Sidebar Header with Close Button */}
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <MdLocalHospital className="text-white text-lg" />
        </div>
        <span className="font-semibold text-gray-900">Menu</span>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
      >
        <FiX className="text-gray-600 text-lg" />
      </button>
    </div>

    {/* Navigation Links - Scrollable if needed */}
    <div className="overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
      <div className="py-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className="block px-6 py-4 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 border-b border-gray-100 last:border-0 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>

    {/* Doctor Info at Bottom - Fixed at bottom */}
    <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-6">
      <p className="font-medium text-gray-900">Dr. Dinesh Agarwal</p>
      <p className="text-sm text-cyan-600 mt-1">Spine & Ortho Specialist</p>
      
      {/* Book Button */}
      <Link
        to="/book-appointment"
        onClick={() => setIsOpen(false)}
        className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-3 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors mt-4"
      >
        Book Appointment
      </Link>
    </div>
  </div>
</div>

      {/* Spacer */}
      <div className="h-[60px]"></div>
    </>
  );
};

export default Navbar;