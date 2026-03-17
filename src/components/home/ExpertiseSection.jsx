import { homeData } from '../../data/homeData';
import SectionTitle from '../common/SectionTitle';
import { 
  GiSpineArrow, 
  GiJoint, 
  GiSoccerBall, 
  GiBrokenBone,
  GiMicroscope,
  GiBabyFace,  // Changed from GiChild to GiBabyFace
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
    if (name.includes('Pediatric')) return <GiBabyFace className="text-3xl" />; // Changed here
    return <GiSpineArrow className="text-3xl" />;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={expertise.title}
          subtitle={expertise.subtitle}
        />

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {expertise.description}
        </p>

        {/* Specializations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {expertise.specializations.map((spec, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {getIcon(spec.name)}
              </div>
              
              {/* Name */}
              <p className="text-gray-800 font-medium text-sm">
                {spec.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;