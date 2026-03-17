export const contactData = {
  // Header Section
  header: {
    title: "Contact & Locations",
    subtitle: "Get in touch",
    description: "Dr. Dinesh Agarwal provides expert orthopaedic care at two accessible locations in Dhanbad. Find the nearest clinic and book your consultation today."
  },

  // Clinics Data
  clinics: {
    title: "Our Clinics",
    locations: [
      {
        id: 1,
        name: "Nichtipur Hospital",
        tagline: "Primary Practice",
        address: "Katras Bazar, Dhanbad, Jharkhand - 828114",
        phone: "+91 82103 45678",
        phoneLink: "918210345678", // WhatsApp format (without +)
        timings: "09:00 AM – 01:00 PM",
        days: "Monday to Friday",
        mapLink: "https://maps.google.com/?q=Nichtipur+Hospital+Dhanbad",
        coordinates: { lat: 23.7957, lng: 86.4304 } // Approximate
      },
      {
        id: 2,
        name: "Momentum Speciality Clinic",
        tagline: "Evening Practice",
        address: "Dhaiya, Opp. Big Bazaar, Dhanbad, Jharkhand - 826001",
        phone: "+91 94311 12345",
        phoneLink: "919431112345",
        timings: "04:00 PM – 08:00 PM",
        days: "Monday to Saturday",
        mapLink: "https://maps.google.com/?q=Momentum+Speciality+Clinic+Dhanbad",
        coordinates: { lat: 23.8103, lng: 86.4412 } // Approximate
      }
    ]
  },

  // Quick Action Cards (Horizontally scrollable on mobile)
  quickActions: [
    {
      id: 1,
      type: "ivr",
      title: "IVR Calling",
      description: "Automated booking service",
      phone: "+91 98765 43210",
      phoneLink: "919876543210",
      icon: "📞",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      type: "support",
      title: "Online Support",
      description: "Query response time",
      time: "24 Hours",
      icon: "💬",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      type: "emergency",
      title: "Emergency Calls",
      description: "For urgent ortho trauma care",
      phone: "+91 123 456 7890",
      phoneLink: "911234567890",
      icon: "🚑",
      bgColor: "from-red-500 to-red-600"
    }
  ],

  // Inquiry Form
  inquiry: {
    title: "Send an Inquiry",
    description: "Have a question about spine health or orthopedic treatments? Reach out to us directly.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your name" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 00000 00000" },
      { name: "message", label: "Message", type: "textarea", placeholder: "How can Dr. Agarwal help you today?" }
    ],
    buttonText: "Send Message",
    confidentiality: "SECURE & CONFIDENTIAL COMMUNICATION",
    whatsappNumber: "918210345678" // Default number for inquiries
  },

  // Information Cards
  infoCards: [
    {
      id: 1,
      title: "Patient Guidelines",
      description: "Please bring your previous medical reports, X-rays, and current prescriptions during your visit for a more accurate diagnosis.",
      icon: "📋",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Insurance & Billing",
      description: "We accept major health insurance providers. Our staff at Nichitpur Hospital can assist you with TPA and cashless claims.",
      icon: "💳",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Home Consultation",
      description: "Limited home consultation services are available for elderly patients or those with severe mobility issues within Dhanbad city.",
      icon: "🏠",
      color: "from-purple-500 to-pink-500"
    }
  ]
};