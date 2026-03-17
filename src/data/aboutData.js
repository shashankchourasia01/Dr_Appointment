export const aboutData = {
  doctorName: "Dr. Dinesh Kumar Agarwal",
  title: "About the Doctor",
  description: [
    "Dr. Dinesh Kumar Agarwal is a renowned Spine Surgeon and Orthopaedic specialist based in Dhanbad. With over 15 years of surgical experience, he has dedicated his career to restoring mobility and improving the quality of life for patients suffering from complex spinal disorders and joint ailments.",
    "Known for his empathetic approach and precision in surgery, Dr. Agarwal integrates advanced diagnostic tools with evidence-based surgical techniques. He is a firm believer in patient education and transparent communication, ensuring every individual understands their path to recovery."
  ],
  journey: [
    { year: "2009", description: "Completed MBBS with academic honors." },
    { year: "2013", description: "Earned M.S. in Orthopaedics, specializing in trauma care." },
    { year: "2015", description: "Achieved DNB in Orthopaedics from the National Board of Examinations." },
    { year: "2016", description: "Joined Nichitpur Hospital as Senior Orthopaedic Consultant." },
    { year: "2020", description: "Established Momentum Speciality Clinic to provide focused spine care." }
  ],
  // New: Clinics Data
  clinics: {
    title: "Our Clinics",
    subtitle: "Choose a location nearest to you to schedule a consultation with Dr. Agarwal.",
    locations: [
      {
        name: "Nichitpur Hospital",
        address: "Katras Bazar, Dhanbad",
        city: "Dhanbad",
        pin: "828114",
        schedule: "Mon - Sat: 10:00 AM - 02:00 PM",
        icon: "🏥",
        mapLink: "#"
      },
      {
        name: "Momentum Speciality Clinic",
        address: "Dhaiya, Dhanbad",
        city: "Dhanbad",
        pin: "826001",
        schedule: "Mon - Sat: 05:00 PM - 08:00 PM",
        icon: "🩺",
        mapLink: "#"
      }
    ]
  },
  // New: CTA Data
  cta: {
    title: "Ready to Take the First Step Towards a Pain-Free Life?",
    description: "Consult with Dhanbad's leading Spine and Orthopaedic expert today. Book your slot in seconds.",
    buttonText: "Book Your Consultation Now",
    buttonLink: "/book-appointment"
  }
};