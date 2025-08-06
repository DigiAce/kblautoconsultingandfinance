import React from "react";
import { Users, Calendar, Sparkles, Trophy } from "lucide-react";

const HowItWorksSection = () => {
  const howItWorks = [
    {
      icon: Users,
      title: "Join the Group",
      description:
        "Become a member of our Kulukkal Chit group with fixed monthly contributions",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Calendar,
      title: "Monthly Savings",
      description:
        "Make regular monthly payments to build your savings systematically",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Sparkles,
      title: "Lucky Draw",
      description:
        "Participate in monthly lucky draws for a chance to win the lump sum amount",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Trophy,
      title: "Win & Continue",
      description:
        "Winners receive the amount and continue contributing until the scheme ends",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Kulukkal Chit Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and exciting - our Kulukkal Chit combines
            systematic savings with the thrill of winning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
