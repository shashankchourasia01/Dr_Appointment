import { homeData } from '../../data/homeData';
import SectionTitle from '../common/SectionTitle';
import { MdVerified, MdSchool, MdWork, MdPeople } from 'react-icons/md';

const ProfessionalExcellence = () => {
  const { excellence } = homeData;

  // Icons mapping
  const getIcon = (label) => {
    if (label.includes('M.S.')) return <MdSchool className="text-2xl" />;
    if (label.includes('DNB')) return <MdVerified className="text-2xl" />;
    if (label.includes('Experience')) return <MdWork className="text-2xl" />;
    if (label.includes('Patients')) return <MdPeople className="text-2xl" />;
    return <MdVerified className="text-2xl" />;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={excellence.title}
          subtitle={excellence.subtitle}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {excellence.items.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-50 to-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-300">
                  {getIcon(item.label)}
                </span>
              </div>
              
              {/* Label */}
              <p className="text-gray-800 font-semibold text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExcellence;