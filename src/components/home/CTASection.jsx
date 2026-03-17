import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import { MdLocalHospital, MdCalendarToday } from 'react-icons/md';
import { GiSpineArrow } from 'react-icons/gi';

const CTASection = () => {
  const { cta } = homeData;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative Background Elements - Updated to blue/cyan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon with Gradient Background - Updated to blue/cyan */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <MdLocalHospital className="text-white text-4xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
          </div>

          {/* Title with Gradient - Updated to match */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {cta.title}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {cta.description}
          </p>

          {/* CTA Button with Glow Effect - Updated to blue/cyan */}
          <Link
            to="/book-appointment"
            className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            {/* Glow Effect - Updated to blue/cyan */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center gap-3">
              <MdCalendarToday className="text-xl" />
              <span>{cta.buttonText}</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </Link>

          {/* Simple Trust Text */}
          <p className="text-sm text-gray-400 mt-6">
            <span className="opacity-75">⏱️ Instant confirmation •</span>
            <span className="text-cyan-400 ml-1">No registration fee</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;