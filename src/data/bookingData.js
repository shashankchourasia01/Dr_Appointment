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

// Generate 3-minute time slots
export const generateTimeSlots = (locationId, date) => {
  const location = locations.find(loc => loc.id === locationId);
  if (!location) return [];

  const slots = [];
  const { start, end } = location.slotRange;
  
  // Convert to minutes for precise calculation
  const startMinutes = start * 60; // 9 AM = 540 minutes
  const endMinutes = end * 60;     // 6 PM = 1080 minutes
  
  // Generate 3-minute slots
  for (let minutes = startMinutes; minutes < endMinutes; minutes += 3) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    
    const endMinutesSlot = minutes + 3;
    const endHour = Math.floor(endMinutesSlot / 60);
    const endMinute = endMinutesSlot % 60;
    
    const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    const endTimeString = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
    
    // Randomly mark some slots as booked (for demo) - 30% booked
    const isBooked = Math.random() > 0.7;
    
    // Skip if end time exceeds range
    if (endMinutesSlot <= endMinutes) {
      slots.push({
        id: `${locationId}-${date}-${timeString}`,
        time: timeString,
        endTime: endTimeString,
        displayTime: `${formatTime(hour, minute)} – ${formatTime(endHour, endMinute)}`,
        available: !isBooked,
        date,
        duration: '3 min'
      });
    }
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