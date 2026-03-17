import { Link } from 'react-router-dom';
import { aboutData } from '../data/aboutData';
import { GiSpineArrow, GiPositionMarker } from 'react-icons/gi';
import { MdDateRange, MdLocationOn, MdAccessTime, MdDirections } from 'react-icons/md';
import { FaHospital } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Small Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <GiSpineArrow className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">About Dr. Dinesh Agarwal</h1>
            <p className="text-blue-100 text-sm md:text-base">Spine Surgeon & Orthopaedic Specialist</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* About the Doctor Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative inline-block">
              {aboutData.title}
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed mt-6">
              {aboutData.description.map((para, index) => (
                <p key={index} className="text-sm md:text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Professional Journey Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              Professional Journey
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h2>

            {/* Timeline */}
            <div className="space-y-6 mt-8">
              {aboutData.journey.map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-6 group">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 md:w-20 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-2 md:p-3 border border-blue-100 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                      <span className="text-xs md:text-sm font-bold text-cyan-600 group-hover:text-white transition-colors">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Timeline Line with Dot */}
                  <div className="relative flex-1 pb-6">
                    {/* Connecting Line (except last) */}
                    {index < aboutData.journey.length - 1 && (
                      <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-cyan-200"></div>
                    )}
                    
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-cyan-500 rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform"></div>

                    {/* Description */}
                    <div className="pl-4 md:pl-6">
                      <p className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 pt-6 border-t border-gray-100">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xl md:text-2xl font-bold text-cyan-600">15+</p>
                <p className="text-xs text-gray-500">Years Exp.</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xl md:text-2xl font-bold text-cyan-600">5k+</p>
                <p className="text-xs text-gray-500">Patients</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xl md:text-2xl font-bold text-cyan-600">2</p>
                <p className="text-xs text-gray-500">Clinics</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <p className="text-xl md:text-2xl font-bold text-cyan-600">4.9</p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>
          </div>

          {/* ===== NEW SECTION 1: Our Clinics ===== */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {aboutData.clinics.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                {aboutData.clinics.subtitle}
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Clinics Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {aboutData.clinics.locations.map((clinic, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Clinic Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                        <FaHospital className="text-cyan-600 text-xl group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{clinic.name}</h3>
                        <p className="text-xs text-gray-500">{clinic.city}</p>
                      </div>
                    </div>
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {clinic.icon}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-gray-600">
                      <MdLocationOn className="text-cyan-500 mt-1 flex-shrink-0" />
                      <p className="text-sm">
                        {clinic.address}, {clinic.city}<br />
                        Pin: {clinic.pin}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MdAccessTime className="text-cyan-500 flex-shrink-0" />
                      <p className="text-sm">{clinic.schedule}</p>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <a
                    href={clinic.mapLink}
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm group/btn"
                  >
                    <MdDirections className="text-lg group-hover/btn:translate-x-1 transition-transform" />
                    <span>Get Directions</span>
                    <span className="text-lg opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ===== NEW SECTION 2: Ready to Take First Step (CTA) ===== */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-600 text-white p-8 md:p-12">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full filter blur-3xl"></div>
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <GiSpineArrow className="text-white text-3xl" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {aboutData.cta.title}
              </h2>

              {/* Description */}
              <p className="text-blue-100 text-sm md:text-base mb-8 max-w-2xl mx-auto">
                {aboutData.cta.description}
              </p>

              {/* CTA Button */}
              <Link
                to={aboutData.cta.buttonLink}
                className="relative group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-white rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                
                {/* Button Content */}
                <span className="relative">{aboutData.cta.buttonText}</span>
                <span className="relative text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>

              {/* Trust Badge */}
              <p className="text-xs text-blue-200 mt-6 flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span>No registration fee • Instant confirmation • 15+ years experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;