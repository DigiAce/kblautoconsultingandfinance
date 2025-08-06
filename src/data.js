// data.js
export const heroData = {
  heading: "Your Trusted Partner for",
  highlight: "Financial Excellence",
  highlightBg:
    "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
  subheading:
    "From flexible loans and vehicle rentals to secure chit funds - we provide comprehensive financial solutions with transparency, speed, and customer-first approach.",
  cta: {
    primary: {
      label: "Get Started Today",
      link: "#services",
    },
    secondary: {
      label: "Learn More",
      link: "#about",
      icon: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=50",
    },
  },
  image:
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  backgroundImage:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
  stats: [
    { number: "10K+", label: "Happy Customers" },
    { number: "₹50Cr+", label: "Loans Disbursed" },
    { number: "500+", label: "Vehicles Available" },
    { number: "99%", label: "Customer Satisfaction" },
  ],
};

export default heroData;

//why us

export const whyUsData = {
  subtitle: "Why Choose KBL",
  title: "Your Trusted Financial Partner",
  description:
    "We provide comprehensive financial solutions with transparency, speed, and customer-first approach.",
  features: [
    {
      id: 1,
      name: "Expert Financial Guidance",
      description:
        "Our experienced team provides personalized financial advice tailored to your unique needs and goals.",
      icon: "expertise",
    },
    {
      id: 2,
      name: "Customer-Centric Approach",
      description:
        "We prioritize your satisfaction with 24/7 support and transparent communication throughout your journey.",
      icon: "customer",
    },
    {
      id: 3,
      name: "Quality Service Guarantee",
      description:
        "Committed to delivering exceptional service quality with minimal paperwork and quick processing.",
      icon: "quality",
    },
    {
      id: 4,
      name: "Innovative Solutions",
      description:
        "Cutting-edge financial products designed to meet modern financial challenges and opportunities.",
      icon: "innovation",
    },
  ],
  cta: {
    primary: {
      text: "Get Started Today",
      url: "#contact",
    },
    secondary: {
      text: "Learn more",
      url: "#about",
    },
  },
  image: {
    url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "KBL Financial Services Team",
  },
};

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Salvador Rose",
    role: "CEO, TechCorp", // Added role for testimonials
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5, // Added rating for testimonials
  },
  {
    id: 2,
    name: "John Doe",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Tyson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sia Johnson",
    role: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    id: 5,
    name: "Cheung Lee",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    id: 6,
    name: "Kendra Smith",
    role: "Customer Support",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
];

// data.js

// service page content

// src/data.js
export const cards = [
  {
    id: 1,
    title: "Flexible Loan Solutions",
    description:
      "We provide both short-term and long-term loans to meet a wide range of financial needs—from emergency expenses and business capital to education, travel, and more. Our loan options are designed with minimal paperwork, competitive interest rates, and quick disbursement, ensuring that your financial challenges are addressed without delay.",
    imageUrl:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#loans",
  },
  {
    id: 2,
    title: "Vehicle Rental Services",
    description:
      "Whether you need a car for a day, a week, or longer, our reliable vehicle rental services cater to both personal and professional requirements. Our fleet includes well-maintained vehicles across various segments, supported by affordable rates and flexible rental periods, making travel convenient and hassle-free.",
    imageUrl:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#vehicle-rental",
  },
  {
    id: 3,
    title: "Chit Fund Options",
    description:
      "As part of our community-based savings solutions, KBL offers transparent and secure chit fund plans. Clients can participate in monthly auctions or lucky draws, making it an ideal savings-cum-borrowing option with well-regulated terms and trustworthy returns.",
    imageUrl:
      "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#chit-funds",
  },
  {
    id: 4,
    title: "Seamless Documentation & Quick Approvals",
    description:
      "We streamline the application process for all our services with easy documentation and a customer-friendly approval system. This ensures a smooth experience from start to finish, saving your time and effort.",
    imageUrl:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#documentation",
  },
  {
    id: 5,
    title: "Transparent, Customer-First Approach",
    description:
      "At KBL, we operate with complete transparency, ensuring there are no hidden charges or unclear terms. Our mission is to provide clear, honest, and personalized service, fostering long-term trust and satisfaction among our clients.",
    imageUrl:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#transparency",
  },
];

// services page banner content

// bannerData.js
export const homePageBanner = {
  backgroundImage:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  title: {
    part1: "Strategic Financial Solutions for",
    highlighted: "Sustainable Growth",
  },
  subtitle:
    "Expert consulting services that transform your financial strategy and drive business success",
  ctaButtons: [
    {
      text: "Schedule Consultation",
      href: "#consultation",
      variant: "primary",
    },
    {
      text: "View Services",
      href: "#services",
      variant: "secondary",
    },
  ],
  stats: [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "$2.3B+", label: "Assets Managed" },
    { value: "98%", label: "Client Retention" },
  ],
};

export const servicesPageBanner = {
  backgroundImage:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
  title: {
    part1: " KBL",
    highlighted: "Financial Services",
  },
  subtitle:
    "Your trusted partner for comprehensive financial solutions - from flexible loans and vehicle rentals to secure chit funds and transparent services",
  ctaButtons: [
    {
      text: "Explore Services",
      href: "#all-services",
      variant: "primary",
    },
    // {
    //   text: "Request Proposal",
    //   href: "#contact",
    //   variant: "secondary",
    // },
  ],
  // stats: [
  //   { value: "15+", label: "Service Categories" },
  //   { value: "200+", label: "Industry Specializations" },
  //   { value: "97%", label: "Client Satisfaction" },
  //   { value: "24/7", label: "Expert Support" },
  // ],
};

export const ContactBanner = {
  backgroundImage:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  title: {
    part1: "Our Journey to Financial",
    highlighted: "Excellence",
  },
  subtitle:
    "Discover the story, values, and expertise that define our approach to financial consulting",
  ctaButtons: [
    // {
    //   text: "Meet Our Team",
    //   href: "#team",
    //   variant: "primary",
    // },
    // {
    //   text: "Our Values",
    //   href: "#values",
    //   variant: "secondary",
    // },
  ],
  // stats: [
  //   { value: "150+", label: "Expert Consultants" },
  //   { value: "40+", label: "Countries Served" },
  //   { value: "12", label: "Global Offices" },
  //   { value: "2010", label: "Established" },
  // ],
};
