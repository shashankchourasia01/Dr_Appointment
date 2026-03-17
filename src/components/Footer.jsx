import { Link } from 'react-router-dom';
import { MdLocalHospital } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

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
    { icon: <FiPhone className="text-lg" />, text: '+91 12345 67890' },
    { icon: <FiMail className="text-lg" />, text: 'dr.dinesh@example.com' },
    { icon: <FiMapPin className="text-lg" />, text: 'Dhanbad, Jharkhand' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <MdLocalHospital className="text-white text-2xl" />
              </div>
              <span className="text-xl font-bold">Dr. Dinesh Agarwal</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing expert Spine and Orthopaedic care with a focus on evidence-based treatment and patient recovery.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-600 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="text-blue-600 mt-1">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Appointment Button */}
            <Link
              to="/book-appointment"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Dr. Dinesh Agarwal — Spine & Ortho. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;