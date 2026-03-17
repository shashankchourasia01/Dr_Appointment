import { homeData } from '../../data/homeData';
import SectionTitle from '../common/SectionTitle';
import { 
  GiSpineArrow, 
  GiJoint, 
  GiSoccerBall, 
  GiBrokenBone,
  GiMicroscope,
  GiBabyFace,
  GiHealthNormal 
} from 'react-icons/gi';

const ExpertiseSection = () => {
  const { expertise } = homeData;

  // Icons mapping
  const getIcon = (name) => {
    if (name.includes('Spine')) return <GiSpineArrow className="text-3xl" />;
    if (name.includes('Joint')) return <GiJoint className="text-3xl" />;
    if (name.includes('Sports')) return <GiSoccerBall className="text-3xl" />;
    if (name.includes('Fracture')) return <GiBrokenBone className="text-3xl" />;
    if (name.includes('Arthroscopy')) return <GiMicroscope className="text-3xl" />;
    if (name.includes('Pediatric')) return <GiBabyFace className="text-3xl" />;
    return <GiSpineArrow className="text-3xl" />;
  };

  return (
    <section className="py-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={expertise.title}
          subtitle={expertise.subtitle}
        />

        {/* Description - Updated text color */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {expertise.description}
        </p>

        {/* Specializations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {expertise.specializations.map((spec, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
              
              {/* Icon - Updated colors */}
              <div className="text-cyan-600 mb-3 flex justify-center group-hover:scale-110 group-hover:text-blue-600 transition-all duration-300">
                {getIcon(spec.name)}
              </div>
              
              {/* Name - Updated hover color */}
              <p className="text-gray-800 font-medium text-sm group-hover:text-cyan-600 transition-colors duration-300">
                {spec.name}
              </p>

              {/* Decorative Dot */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;