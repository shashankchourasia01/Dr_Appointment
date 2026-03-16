import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdLocalHospital } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu close karne ke liye
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Link click karne par menu close
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        style={{ backgroundColor: isScrolled ? 'white' : 'transparent' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Doctor Info - Left Side */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MdLocalHospital className="text-white text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm md:text-base" style={{ color: 'var(--color-secondary)' }}>
                  Dr. Dinesh Agarwal
                </span>
                <span className="text-xs text-gray-600 hidden xs:block">
                  Spine & Ortho
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Book Now Button - Right Side */}
            <div className="flex items-center space-x-3">
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-opacity-90 transition-all duration-200 shadow-sm"
                onClick={() => window.location.href = '/book-appointment'}
              >
                Book Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl focus:outline-none"
                style={{ color: 'var(--color-primary)' }}
              >
                {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button inside menu */}
            <div className="flex justify-end mb-8">
              <button onClick={closeMenu} className="text-2xl text-gray-500">
                <FiX />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary text-lg font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Doctor info in mobile menu */}
            <div className="absolute bottom-8 left-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <MdLocalHospital className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Dr. Dinesh Agarwal</p>
                  <p className="text-xs text-gray-600">Spine & Ortho Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;