import { Link } from 'react-router-dom';
import { MdLocalHospital, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { GiSpineArrow } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Spine Surgery', path: '#' },
    { name: 'Joint Replacement', path: '#' },
    { name: 'Sports Injury', path: '#' },
    { name: 'Fracture Treatment', path: '#' },
  ];

  const contactInfo = [
    { icon: <FiPhone />, text: '+91 12345 67890', label: 'Call Us' },
    { icon: <FiMail />, text: 'dr.dinesh@example.com', label: 'Email Us' },
    { icon: <FiMapPin />, text: 'Dhanbad, Jharkhand', label: 'Visit Us' },
    { icon: <FiClock />, text: 'Mon-Sat: 9AM-8PM', label: 'Working Hours' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, url: '#', color: 'hover:bg-blue-400' },
    { icon: <FaInstagram />, url: '#', color: 'hover:bg-pink-600' },
    { icon: <FaLinkedin />, url: '#', color: 'hover:bg-blue-700' },
    { icon: <FaWhatsapp />, url: '#', color: 'hover:bg-green-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        
        {/* Brand Section - Full width on mobile */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <MdLocalHospital className="text-white text-3xl" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Dr. Dinesh Agarwal
              </h2>
              <p className="text-sm text-blue-400 flex items-center gap-1">
                <GiSpineArrow />
                <span>Spine & Ortho Specialist</span>
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Providing expert Spine and Orthopaedic care with a focus on evidence-based treatment and faster patient recovery.
          </p>
        </div>

        {/* 2-Column Grid for Mobile */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          
          {/* Quick Links - Left Column on Mobile */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm md:text-base">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services - Right Column on Mobile */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Services</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm md:text-base">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Left Side */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-4 relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <span className="text-sm">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect With Us - Right Side */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 text-left md:text-right">
            <h3 className="text-base md:text-lg font-semibold mb-4 relative inline-block md:float-right md:clear-both">
              <span className="relative z-10">Connect With Us</span>
              <span className="absolute -bottom-1 left-0 md:left-auto md:right-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </h3>
            
            <div className="clear-both"></div>
            
            {/* Social Icons - Right aligned on desktop */}
            <div className="flex flex-wrap gap-2 mb-6 md:justify-end">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Appointment Button - Right aligned on desktop */}
            <div className="md:flex md:justify-end">
              <Link
                to="/book-appointment"
                className="relative group inline-block w-full md:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-6 py-3 bg-gray-900 rounded-xl leading-none flex items-center justify-center gap-2">
                  <span className="text-white font-semibold">Book Appointment</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Gradient */}
      <div className="relative border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              © {currentYear} Dr. Dinesh Agarwal — Spine & Ortho. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                <span>Privacy</span>
                <span className="text-blue-600">•</span>
              </Link>
              <Link to="#" className="text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                <span>Terms</span>
                <span className="text-blue-600">•</span>
              </Link>
              <Link to="#" className="text-gray-500 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;