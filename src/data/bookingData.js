import { addDays, format, isSaturday, isSunday } from 'date-fns';

// Generate next 7 days (excluding weekends)
const getNext7Days = () => {
  const days = [];
  let i = 0;
  
  while (days.length < 7) {
    const date = addDays(new Date(), i);
    
    // Skip Saturday (6) and Sunday (0)
    if (!isSaturday(date) && !isSunday(date)) {
      days.push({
        date,
        dayName: format(date, 'EEE'),
        dayDate: format(date, 'dd MMM'),
        fullDate: format(date, 'yyyy-MM-dd'),
        isToday: i === 0 && !isSaturday(date) && !isSunday(date),
        dayOfWeek: date.getDay()
      });
    }
    i++;
  }
  
  return days;
};

export const locations = [
  {
    id: 'nichtipur',
    name: 'Nichtipur Hospital',
    address: 'Katras Bazar, Dhanbad',
    pin: '828114',
    timings: '09:00 AM - 06:00 PM',
    type: 'Morning',
    icon: '🏥',
    color: 'from-blue-500 to-blue-600',
    slotRange: {
      start: 9, // 9 AM
      end: 18   // 6 PM
    }
  },
  {
    id: 'momentum',
    name: 'Momentum Speciality Clinic',
    address: 'Dhaiya, Dhanbad',
    pin: '826001',
    timings: '06:00 PM - 10:00 PM',
    type: 'Evening',
    icon: '🩺',
    color: 'from-cyan-500 to-cyan-600',
    slotRange: {
      start: 18, // 6 PM
      end: 22    // 10 PM
    }
  }
];


// Generate 1-hour time slots (not 3-minute)
export const generateTimeSlots = (locationId, date) => {
  const location = locations.find(loc => loc.id === locationId);
  if (!location) return [];

  const slots = [];
  const { start, end } = location.slotRange;
  
  // Generate 1-hour slots
  for (let hour = start; hour < end; hour++) {
    const startTime = `${hour.toString().padStart(2, '0')}:00`;
    const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
    
    // Each hour has multiple 3-minute booking slots inside
    const subSlots = [];
    for (let minute = 0; minute < 60; minute += 3) {
      const subStart = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      const subEndHour = minute + 3 >= 60 ? hour + 1 : hour;
      const subEndMinute = minute + 3 >= 60 ? minute + 3 - 60 : minute + 3;
      const subEnd = `${subEndHour.toString().padStart(2, '0')}:${subEndMinute.toString().padStart(2, '0')}`;
      
      subSlots.push({
        id: `${locationId}-${date}-${subStart}`,
        time: subStart,
        endTime: subEnd,
        displayTime: `${formatTime(hour, minute)} – ${formatTime(subEndHour, subEndMinute)}`,
        available: Math.random() > 0.3, // 70% available for demo
      });
    }
    
    slots.push({
      hour,
      displayHour: formatTime(hour, 0).split(' ')[0] + ' ' + formatTime(hour, 0).split(' ')[1],
      fullDisplay: `${formatTime(hour, 0)} – ${formatTime(hour + 1, 0)}`,
      startTime,
      endTime,
      subSlots,
      availableCount: subSlots.filter(s => s.available).length,
      totalCount: subSlots.length
    });
  }
  
  return slots;
};

// Helper to format time with AM/PM
const formatTime = (hour, minute) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour;
  const displayHourFormatted = displayHour === 0 ? 12 : displayHour;
  return `${displayHourFormatted}:${minute.toString().padStart(2, '0')} ${period}`;
};

// Check if date is weekend
export const isWeekend = (date) => {
  return isSaturday(date) || isSunday(date);
};

// Get available dates (excluding weekends)
export const getAvailableDates = () => {
  const dates = [];
  let i = 0;
  
  while (dates.length < 14) { // Get 14 weekdays ahead
    const date = addDays(new Date(), i);
    if (!isSaturday(date) && !isSunday(date)) {
      dates.push(date);
    }
    i++;
  }
  
  return dates;
};

export const bookingSteps = [
  { id: 1, name: 'Location', icon: '📍' },
  { id: 2, name: 'Date & Time', icon: '📅' },
  { id: 3, name: 'Confirm', icon: '✅' }
];

export const days = getNext7Days();