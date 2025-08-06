import React from "react";
import { Calendar, Clock, User, Home, Car } from "lucide-react";

const features = [
  {
    title: "Daily Finance",
    description:
      "Short-term loans with daily repayment options, ideal for traders, vendors, and small business owners looking for quick working capital.",
    icon: Calendar,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Weekly Finance",
    description:
      "Flexible weekly repayment plans designed to meet moderate financial needs without burdening your cash flow.",
    icon: Clock,
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Personal Loans",
    description:
      "Fast and adaptable loans for personal expenses such as education, health emergencies, or home upgrades – with minimal hassle.",
    icon: User,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Mortgage Loans",
    description:
      "Secure loans using your property, vehicle, or asset documents to unlock financial value whenever you need it.",
    icon: Home,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "Vehicle Finance",
    description:
      "Get easy financing to purchase autos, cars, or bikes with minimal paperwork and competitive interest rates.",
    icon: Car,
    gradient: "from-red-500 to-red-600",
  },
];

const ServiceSection = () => {
  return (
    <div className="w-full py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="relative flex flex-col w-[90%] lg:w-4/5 2xl:w-3/5 mx-auto">
        {/* Header */}
        <div className="w-full md:w-4/5 md:mx-auto text-center pt-3 px-4 md:px-0 mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">
              Our Financial Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            The{" "}
            <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            We offer a range of flexible loan solutions including Daily and
            Weekly Finance for small businesses, Personal Loans for individual
            needs, Mortgage Loans secured against assets, and Vehicle Finance
            for auto purchases.
          </p>
        </div>

        {/* Features Grid - 5 perfectly even cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col h-full"
              >
                {/* Icon Container - Fixed size */}
                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg mb-6 mx-auto`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title - Fixed height with line clamp */}
                <h2 className="text-xl font-bold text-slate-800 mb-4 text-center h-14 flex items-center justify-center">
                  {feature.title}
                </h2>

                {/* Description - Fixed height with consistent line height */}
                <p className="text-sm text-slate-600 leading-relaxed text-center flex-grow">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          {/* <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow">
            <span>Explore All Services</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
