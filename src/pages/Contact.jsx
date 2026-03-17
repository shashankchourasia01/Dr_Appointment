import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactData } from '../data/contactData';
import { 
  MdLocationOn, 
  MdPhone, 
  MdAccessTime, 
  MdDirections,
  MdEmail,
  MdMessage,
  MdPerson,
  MdSend,
  MdLocalHospital,
  MdEmergency,
  MdSupportAgent,
  MdCall,
  MdInfo
} from 'react-icons/md';
import { FaWhatsapp, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { GiSpineArrow, GiHealthNormal } from 'react-icons/gi';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*New Inquiry from Website*%0A%0A
*Name:* ${formData.fullName}%0A
*Phone:* ${formData.phone}%0A
*Message:* ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${contactData.inquiry.whatsappNumber}?text=${message}`, '_blank');
  };

  // Handle direction click
  const handleDirections = (mapLink) => {
    window.open(mapLink, '_blank');
  };

  // Handle phone call
  const handleCall = (phoneLink) => {
    window.location.href = `tel:${phoneLink}`;
  };

  // Handle WhatsApp chat
  const handleWhatsApp = (phoneLink, message = '') => {
    window.open(`https://wa.me/${phoneLink}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* ===== HEADER SECTION ===== */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Small subtitle */}
            <p className="text-blue-100 text-sm md:text-base uppercase tracking-wider mb-2">
              {contactData.header.subtitle}
            </p>
            
            {/* Main title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {contactData.header.title}
            </h1>
            
            {/* Description */}
            <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto">
              {contactData.header.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* ===== OUR CLINICS SECTION ===== */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              {contactData.clinics.title}
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h2>

            {/* Clinics Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactData.clinics.locations.map((clinic) => (
                <div
                  key={clinic.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Clinic Header with Gradient */}
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{clinic.name}</h3>
                        <p className="text-xs text-blue-100">{clinic.tagline}</p>
                      </div>
                      <MdLocalHospital className="text-3xl opacity-50" />
                    </div>
                  </div>

                  {/* Clinic Details */}
                  <div className="p-5 space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-cyan-500 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-700">{clinic.address}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-cyan-500 flex-shrink-0" />
                      <div className="flex gap-2">
                        <a 
                          href={`tel:${clinic.phone}`}
                          className="text-sm text-gray-700 hover:text-cyan-600 transition-colors"
                        >
                          {clinic.phone}
                        </a>
                        <button
                          onClick={() => handleWhatsApp(clinic.phoneLink, `Hi, I need consultation at ${clinic.name}`)}
                          className="text-green-600 hover:text-green-700 transition-colors"
                          title="Chat on WhatsApp"
                        >
                          <FaWhatsapp size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Timings */}
                    <div className="flex items-start gap-3">
                      <FaClock className="text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">{clinic.timings}</p>
                        <p className="text-xs text-gray-500">{clinic.days}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => handleCall(clinic.phone)}
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        <MdPhone />
                        <span>Call</span>
                      </button>
                      <button
                        onClick={() => handleDirections(clinic.mapLink)}
                        className="flex-1 flex items-center justify-center gap-2 bg-cyan-50 text-cyan-600 py-2.5 rounded-xl text-sm font-medium hover:bg-cyan-100 transition-colors"
                      >
                        <MdDirections />
                        <span>Directions</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== QUICK ACTION CARDS (Horizontally Scrollable on Mobile) ===== */}
          <div className="mb-12">
            <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x">
              {contactData.quickActions.map((action) => (
                <div
                  key={action.id}
                  className={`flex-shrink-0 w-64 bg-gradient-to-br ${action.bgColor} text-white rounded-2xl p-5 shadow-lg snap-start transform hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-3xl mb-3">{action.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{action.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{action.description}</p>
                  
                  {action.phone && (
                    <button
                      onClick={() => handleCall(action.phone)}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg text-sm hover:bg-white/30 transition-colors"
                    >
                      <MdPhone />
                      <span>{action.phone}</span>
                    </button>
                  )}
                  
                  {action.time && (
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg text-sm">
                      <MdAccessTime />
                      <span>{action.time}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ===== INQUIRY FORM SECTION ===== */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {contactData.inquiry.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {contactData.inquiry.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <MdPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <MdPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MdMessage className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can Dr. Agarwal help you today?"
                      rows="4"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <MdSend />
                  <span>{contactData.inquiry.buttonText}</span>
                </button>

                {/* Confidentiality Note */}
                <p className="text-xs text-center text-gray-500 mt-4">
                  {contactData.inquiry.confidentiality}
                </p>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center p-6">
                  <MdLocationOn className="text-5xl text-cyan-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Area Map</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Both clinics are marked on the map below
                  </p>
                  
                  {/* Simplified Map Placeholder with Pins */}
                  <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'url(https://via.placeholder.com/600x400/f0f0f0/cccccc?text=Map+View)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      {/* Pin 1 - Nichitpur */}
                      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
                            Nichitpur
                          </span>
                        </div>
                      </div>
                      
                      {/* Pin 2 - Momentum */}
                      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-6 h-6 bg-cyan-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
                            Momentum
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    *Actual map will be integrated with Google Maps API
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== INFORMATION CARDS SECTION ===== */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactData.infoCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                
                <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 text-white text-2xl`}>
                  {card.icon}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;