// Dummy data for Udemy landing page - Lab Assignment

// Promotional offer data
export const promoOffer = {
  text: "New-learner offer | Courses from E£269.99",
  countdown: {
    hours: 5,
    minutes: 56,
    seconds: 33
  }
};

// Essential skills data
export const essentialSkills = [
  { id: 1, name: "Generative AI", icon: "🤖" },
  { id: 2, name: "IT Certifications", icon: "📜" },
  { id: 3, name: "Data Science", icon: "📊" },
  { id: 4, name: "Leadership", icon: "👥" },
  { id: 5, name: "Cloud Computing", icon: "☁️" },
  { id: 6, name: "Communication", icon: "💬" }
];

// AI Career features
export const aiCareerFeatures = {
  title: "Reimagine your career in the AI era",
  features: [
    { id: 1, text: "Learn AI and more", checked: true },
    { id: 2, text: "Prep for a certification", checked: false },
    { id: 3, text: "Practice with AI coaching", checked: false },
    { id: 4, text: "Advance your career", checked: true }
  ],
  pricing: {
    amount: "E£294.300",
    period: "month"
  }
};

// Course categories for filtering
export const courseCategories = [
  "Artificial Intelligence (AI)",
  "Python",
  "Microsoft Excel",
  "AI Agents & Agentic AI",
  "Digital Marketing",
  "Amazon AWS"
];

export const featuredCourses = [
  {
    id: 1,
    title: "The Complete 2024 Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviewCount: 389453,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
    bestseller: true
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    reviewCount: 298567,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    bestseller: true
  },
  {
    id: 3,
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    reviewCount: 198234,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    bestseller: true
  },
  {
    id: 4,
    title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.6,
    reviewCount: 221876,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
    bestseller: false
  },
  {
    id: 5,
    title: "Ultimate AWS Certified Solutions Architect Associate",
    instructor: "Stephane Maarek",
    rating: 4.7,
    reviewCount: 187923,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/362070_d9b1_2.jpg",
    bestseller: false
  },
  {
    id: 6,
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    reviewCount: 165432,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    bestseller: false
  },
  {
    id: 7,
    title: "The Data Science Course: Complete Data Science Bootcamp",
    instructor: "365 Careers",
    rating: 4.6,
    reviewCount: 145678,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg",
    bestseller: false
  },
  {
    id: 8,
    title: "Automate the Boring Stuff with Python Programming",
    instructor: "Al Sweigart",
    rating: 4.6,
    reviewCount: 123456,
    price: 84.99,
    originalPrice: 189.99,
    image: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    bestseller: false
  }
];

// Trusted companies as shown in PDF
export const trustedCompanies = [
  { id: 1, name: "Cisco", logo: "cisco" },
  { id: 2, name: "Vimeo", logo: "vimeo" },
  { id: 3, name: "Box", logo: "BOX" },
  { id: 4, name: "Volvo", logo: "VOLVO" },
  { id: 5, name: "Netflix", logo: "NETFLIX" },
  { id: 6, name: "Eventbrite", logo: "eventbrite" },
  { id: 7, name: "Beretta", logo: "Beretta" }
];

export const navigationLinks = [
  { id: 1, name: "Categories", hasDropdown: true },
  { id: 2, name: "Search for anything", isSearch: true },
  { id: 3, name: "Teach on Udemy", isLink: true },
  { id: 4, name: "My Learning", isLink: true }
];

// Courses data matching PDF structure
export const courses = [
  {
    id: 1,
    title: "ChatGPT Complete Guide: Learn Midjourney, ChatGPT 4 & More",
    instructor: "Julian Melanson, Benza Maman",
    rating: 4.5,
    numRatings: 84304,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Artificial Intelligence (AI)",
    isBestseller: true,
    thumbnail: "/ai-course.jpg"
  },
  {
    id: 2,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    rating: 4.6,
    numRatings: 153478,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Python",
    isBestseller: true,
    thumbnail: "/python-ds.jpg"
  },
  {
    id: 3,
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    instructor: "Kyle Pew",
    rating: 4.7,
    numRatings: 256891,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Microsoft Excel",
    isBestseller: true,
    thumbnail: "/excel.jpg"
  },
  {
    id: 4,
    title: "Complete AI Agent Development Course: Build & Deploy AI Agents",
    instructor: "Dr. Ryan Ahmed",
    rating: 4.8,
    numRatings: 12459,
    price: 269.99,
    originalPrice: 3499.99,
    category: "AI Agents & Agentic AI",
    isBestseller: false,
    thumbnail: "/ai-agents.jpg"
  },
  {
    id: 5,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    instructor: "Rob Percival",
    rating: 4.5,
    numRatings: 98234,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Digital Marketing",
    isBestseller: true,
    thumbnail: "/digital-marketing.jpg"
  },
  {
    id: 6,
    title: "Ultimate AWS Certified Solutions Architect Associate SAA-C03",
    instructor: "Stephane Maarek",
    rating: 4.7,
    numRatings: 187923,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Amazon AWS",
    isBestseller: true,
    thumbnail: "/aws.jpg"
  },
  {
    id: 7,
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2024]",
    instructor: "Kirill Eremenko, Hadelin de Ponteves",
    rating: 4.5,
    numRatings: 165432,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Artificial Intelligence (AI)",
    isBestseller: false,
    thumbnail: "/ml-az.jpg"
  },
  {
    id: 8,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu",
    rating: 4.7,
    numRatings: 298567,
    price: 269.99,
    originalPrice: 3499.99,
    category: "Python",
    isBestseller: true,
    thumbnail: "/python-100.jpg"
  }
];
