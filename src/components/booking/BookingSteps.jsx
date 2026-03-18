import { bookingSteps } from '../../data/bookingData';

const BookingSteps = ({ currentStep }) => {
  return (
    <div className="mb-8">
      {/* Progress Bar - Mobile & Desktop */}
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {bookingSteps.map((step, index) => (
          <div key={step.id} className="flex-1 relative">
            {/* Connecting Line */}
            {index < bookingSteps.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-0.5 -translate-y-1/2 ${
                currentStep > step.id ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
              }`} />
            )}
            
            {/* Step Circle */}
            <div className="relative flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                currentStep >= step.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-400'
              }`}>
                {currentStep > step.id ? '✓' : step.icon}
              </div>
              
              {/* Step Name - Hidden on mobile, visible on tablet up */}
              <span className={`hidden md:block text-xs mt-2 font-medium ${
                currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Step Indicator */}
      <p className="text-center text-sm text-gray-500 mt-4 md:hidden">
        Step {currentStep} of 3: {bookingSteps[currentStep - 1].name}
      </p>
    </div>
  );
};

export default BookingSteps;