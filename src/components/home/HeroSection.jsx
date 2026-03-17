import { Link } from 'react-router-dom';
import { homeData } from '../../data/homeData';
import doctorImage from '../../assets/images/dinesh.jpg'; // Image import yahan karo

const HeroSection = () => {
    const { hero } = homeData;

    return (
        <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -ml-48 -mb-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-6 md:py-12">

                    {/* Left Side - Doctor Image */}
                    <div className="w-full md:flex-1 flex justify-center">
                        <div className="relative w-full max-w-[280px] md:max-w-md lg:max-w-lg">
                            {/* Image Container - Banner Style Height */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)] mx-auto">
                                {/* Image - Imported image use karo */}
                                <img
                                    src={doctorImage} // Yahan imported variable use kiya
                                    alt="Dr. Dinesh Agarwal"
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-32 md:h-32 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:flex-1 text-center md:text-left">
                        {/* Welcome Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-6">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span>Available for Consultation</span>
                        </div>

                        {/* Doctor Name */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
                            {hero.name}
                        </h1>

                        {/* Specialization */}
                        <p className="text-base md:text-lg lg:text-xl text-blue-600 font-medium mb-3 md:mb-6">
                            {hero.specialization}
                        </p>

                        {/* Description - Hidden on mobile, visible on tablet up */}
                        <p className="hidden md:block text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
                            Providing expert Spine and Orthopaedic care with a focus on evidence-based treatment and faster patient recovery.
                        </p>

                        {/* Mobile Description - Short version */}
                        <p className="md:hidden text-sm text-gray-600 mb-4 max-w-xs mx-auto">
                            Expert Spine & Orthopaedic care with evidence-based treatment.
                        </p>

                        {/* CTA Button */}
                        <Link
                            to="/book-appointment"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {hero.buttonText}
                            <span className="text-lg md:text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;