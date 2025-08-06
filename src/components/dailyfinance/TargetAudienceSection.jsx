import React from "react";
import { Users, TrendingUp, Shield, CheckCircle } from "lucide-react";

const TargetAudienceSection = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Small Traders",
      description: "Perfect for daily market vendors and small shop owners",
      color: "from-green-500 to-green-600",
      features: [
        "Quick cash flow",
        "Daily collections",
        "Flexible amounts",
        "No paperwork hassle",
      ],
    },
    {
      icon: TrendingUp,
      title: "Vendors",
      description: "Ideal for street vendors and mobile business owners",
      color: "from-blue-500 to-blue-600",
      features: [
        "Instant approval",
        "Daily repayment",
        "Business growth",
        "Easy process",
      ],
    },
    {
      icon: Shield,
      title: "Small Businesses",
      description: "Working capital for micro and small enterprises",
      color: "from-purple-500 to-purple-600",
      features: [
        "Working capital",
        "Daily collections",
        "Business expansion",
        "Trusted service",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Perfect For Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our daily finance solutions are specially designed for businesses
            that need quick working capital with flexible repayment options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {targetAudience.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600 mb-4">{audience.description}</p>

                <div className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
