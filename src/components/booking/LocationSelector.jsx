import { locations } from '../../data/bookingData';
import { MdLocationOn, MdAccessTime, MdCheckCircle } from 'react-icons/md';

const LocationSelector = ({ selectedLocation, onSelectLocation, onNext }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Location</h2>
        <p className="text-gray-600 text-sm">Choose your preferred clinic for consultation</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {locations.map((location) => (
          <div
            key={location.id}
            onClick={() => onSelectLocation(location.id)}
            className={`relative bg-white rounded-2xl border-2 p-5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
              selectedLocation === location.id
                ? 'border-cyan-500 shadow-xl'
                : 'border-gray-200 hover:border-cyan-200 shadow-sm'
            }`}
          >
            {/* Selected Badge */}
            {selectedLocation === location.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                <MdCheckCircle className="text-white text-sm" />
              </div>
            )}
            
            {/* Location Icon */}
            <div className={`w-12 h-12 bg-gradient-to-br ${location.color} rounded-xl flex items-center justify-center mb-4 text-white text-2xl`}>
              {location.icon}
            </div>
            
            {/* Location Name */}
            <h3 className="font-bold text-gray-900 text-lg mb-1">{location.name}</h3>
            
            {/* Address */}
            <div className="flex items-start gap-2 mb-2 text-gray-600">
              <MdLocationOn className="text-cyan-500 mt-1 flex-shrink-0" />
              <p className="text-sm">{location.address}, Pin: {location.pin}</p>
            </div>
            
            {/* Timings */}
            <div className="flex items-center gap-2 text-gray-600">
              <MdAccessTime className="text-cyan-500 flex-shrink-0" />
              <p className="text-sm">{location.timings}</p>
            </div>
            
            {/* Slot Range Info */}
            <p className="text-xs text-gray-400 mt-3">
              {location.type} slots available
            </p>
          </div>
        ))}
      </div>
      
      {/* Continue Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={onNext}
          disabled={!selectedLocation}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:-translate-y-1 ${
            selectedLocation
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to Schedule
        </button>
      </div>
    </div>
  );
};

export default LocationSelector;