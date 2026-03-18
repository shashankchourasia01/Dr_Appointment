import { useState, useEffect } from 'react';
import { days, generateTimeSlots, locations } from '../../data/bookingData';
import { MdAccessTime, MdDateRange, MdCheckCircle } from 'react-icons/md';
import { format, isSaturday, isSunday } from 'date-fns'; // Import weekend check

const DateTimeSelector = ({ selectedLocation, selectedSlot, onSelectSlot, onNext, onBack }) => {
  const [selectedDate, setSelectedDate] = useState(days[0].fullDate);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  // Find selected location details
  const location = locations.find(loc => loc.id === selectedLocation);

  // Check if selected date is weekend
  const isDateWeekend = (dateString) => {
    const date = new Date(dateString);
    return isSaturday(date) || isSunday(date);
  };

  // Load time slots when date or location changes
  useEffect(() => {
    if (selectedLocation && selectedDate) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const slots = generateTimeSlots(selectedLocation, selectedDate);
        setTimeSlots(slots);
        setLoading(false);
      }, 300);
    }
  }, [selectedLocation, selectedDate]);

  // Group slots by time period (Morning/Afternoon/Evening)
  const groupedSlots = timeSlots.reduce((acc, slot) => {
    const hour = parseInt(slot.time.split(':')[0]);
    let period = 'Afternoon';
    
    if (hour < 12) period = 'Morning';
    else if (hour >= 17) period = 'Evening';
    
    if (!acc[period]) acc[period] = [];
    acc[period].push(slot);
    return acc;
  }, {});

  // Check if current date is weekend to disable Continue button
  const isCurrentDateWeekend = isDateWeekend(selectedDate);

  return (
    <div className="space-y-6">
      {/* Header with Location Info */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 bg-gradient-to-br ${location?.color} rounded-xl flex items-center justify-center text-white`}>
            {location?.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{location?.name}</h3>
            <p className="text-xs text-gray-500">{location?.address}</p>
          </div>
        </div>
      </div>

      {/* Date Selector - Horizontal Scroll on Mobile with Weekend Handling */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select Date
        </label>
        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide snap-x">
          {days.map((day) => {
            const isWeekend = day.dayOfWeek === 0 || day.dayOfWeek === 6;
            
            return (
              <button
                key={day.fullDate}
                onClick={() => !isWeekend && setSelectedDate(day.fullDate)}
                disabled={isWeekend}
                className={`flex-shrink-0 w-20 p-3 rounded-xl text-center transition-all snap-start ${
                  selectedDate === day.fullDate
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                    : isWeekend
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <p className="text-xs font-medium">{day.dayName}</p>
                <p className={`text-sm font-bold ${
                  selectedDate === day.fullDate ? 'text-white' : isWeekend ? 'text-gray-400' : 'text-gray-900'
                }`}>
                  {day.dayDate.split(' ')[0]}
                </p>
                <p className={`text-xs ${
                  selectedDate === day.fullDate ? 'text-blue-100' : isWeekend ? 'text-gray-300' : 'text-gray-400'
                }`}>
                  {isWeekend ? 'Off' : day.dayDate.split(' ')[1]}
                </p>
              </button>
            );
          })}
        </div>
        
        {/* Weekend Warning */}
        {isCurrentDateWeekend && (
          <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
            <span>⛔</span>
            <span>Doctor is not available on weekends. Please select a weekday.</span>
          </p>
        )}
      </div>

      {/* Time Slots - Only show if not weekend */}
      {!isCurrentDateWeekend && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Available Time Slots
          </label>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupedSlots).map(([period, slots]) => (
                <div key={period}>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2 flex items-center justify-between">
                    <span>{period}</span>
                    <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                      3 min slots
                    </span>
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5">
                    {slots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => onSelectSlot(slot)}
                        disabled={!slot.available}
                        className={`relative p-2 rounded-lg text-xs font-medium transition-all ${
                          selectedSlot?.id === slot.id
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                            : slot.available
                            ? 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through opacity-50'
                        }`}
                      >
                        <div>{slot.displayTime.split('–')[0].trim()}</div>
                        <div className="text-[9px] opacity-75">3 min</div>
                        
                        {/* Selected Indicator */}
                        {selectedSlot?.id === slot.id && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              {timeSlots.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-xl">
                  <MdAccessTime className="text-4xl text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No slots available for this date</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Weekend Message - When no slots shown */}
      {isCurrentDateWeekend && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <MdAccessTime className="text-4xl text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">Doctor is not available on weekends</p>
          <p className="text-sm text-gray-400 mt-1">Please select a weekday (Monday-Friday)</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          onClick={onBack}
          className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedSlot || isCurrentDateWeekend}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
            selectedSlot && !isCurrentDateWeekend
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DateTimeSelector;