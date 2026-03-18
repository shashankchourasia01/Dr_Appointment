import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingSteps from '../components/booking/BookingSteps';
import LocationSelector from '../components/booking/LocationSelector';
import DateTimeSelector from '../components/booking/DateTimeSelector';
import BookingSummary from '../components/booking/BookingSummary';

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();

  // Handle next step
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle back step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle final confirmation
  const handleConfirm = () => {
    // In real app: API call to save booking
    console.log('Booking confirmed:', { selectedLocation, selectedSlot });
    
    // Navigate to success page (will create later)
    // navigate('/booking-success');
    alert('Booking confirmed! (Demo)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Book an Appointment
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Select your preferred location and time for a consultation
          </p>
        </div>

        {/* Progress Steps */}
        <BookingSteps currentStep={currentStep} />

        {/* Main Content Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-8">
          {currentStep === 1 && (
            <LocationSelector
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <DateTimeSelector
              selectedLocation={selectedLocation}
              selectedSlot={selectedSlot}
              onSelectSlot={setSelectedSlot}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <BookingSummary
              selectedLocation={selectedLocation}
              selectedSlot={selectedSlot}
              onConfirm={handleConfirm}
              onBack={handleBack}
            />
          )}
        </div>

        {/* Cancel Button */}
        {currentStep === 1 && (
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;