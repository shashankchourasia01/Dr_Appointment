import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import { MdLocalHospital } from 'react-icons/md';

const CTASection = () => {
  const { cta } = homeData;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Hospital Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur">
            <MdLocalHospital className="text-white text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {cta.title}
        </h2>

        {/* Description */}
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          {cta.description}
        </p>

        {/* Button */}
        <Link
          to="/book-appointment"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {cta.buttonText}
          <span className="text-xl">→</span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;