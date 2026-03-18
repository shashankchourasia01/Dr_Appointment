import { locations } from '../../data/bookingData';
import { MdLocationOn, MdAccessTime, MdDateRange, MdCheckCircle } from 'react-icons/md';
import { format } from 'date-fns';

const BookingSummary = ({ selectedLocation, selectedSlot, onConfirm, onBack }) => {
  const location = locations.find(loc => loc.id === selectedLocation);
  
  // Parse selected date
  const selectedDate = selectedSlot?.date ? new Date(selectedSlot.date) : new Date();
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <MdCheckCircle className="text-white text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Booking</h2>
        <p className="text-gray-600 text-sm">Please review your appointment details</p>
      </div>
      
      {/* Booking Details Card */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
        {/* Location */}
        <div className="flex items-start gap-3 pb-4 border-b border-blue-100">
          <div className={`w-10 h-10 bg-gradient-to-br ${location?.color} rounded-xl flex items-center justify-center text-white text-xl`}>
            {location?.icon}
          </div>
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="font-semibold text-gray-900">{location?.name}</p>
            <p className="text-sm text-gray-600">{location?.address}</p>
          </div>
        </div>
        
        {/* Date & Time */}
        {/* Date & Time */}
<div className="grid grid-cols-2 gap-4 pt-4">
  <div className="flex items-start gap-2">
    <MdDateRange className="text-cyan-500 text-lg mt-1" />
    <div>
      <p className="text-xs text-gray-500">Date</p>
      <p className="font-medium text-gray-900">
        {format(selectedDate, 'EEE, dd MMM yyyy')}
      </p>
    </div>
  </div>
  
  <div className="flex items-start gap-2">
    <MdAccessTime className="text-cyan-500 text-lg mt-1" />
    <div>
      <p className="text-xs text-gray-500">Time</p>
      <p className="font-medium text-gray-900">{selectedSlot?.displayTime}</p>
      <p className="text-xs text-cyan-600 mt-0.5">Duration: 3 minutes</p>
    </div>
  </div>
</div>
      
      {/* Patient Info Notice */}
      <div className="bg-yellow-50 rounded-xl p-4 text-sm text-yellow-800">
        <p className="font-medium mb-1">📋 Please Note:</p>
        <p>Please arrive 10 minutes before your appointment. Bring previous medical reports if any.</p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg"
        >
          Confirm Booking
        </button>
      </div>
    </div>
    </div>
  );
};

export default BookingSummary;