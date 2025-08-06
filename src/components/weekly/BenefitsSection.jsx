import React from "react";
import { Calendar, Shield, Clock, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Weekly Repayments",
      description:
        "Convenient weekly payment schedule that fits your cash flow",
    },
    {
      icon: Shield,
      title: "Flexible Terms",
      description: "Customizable loan terms from 4 weeks to 52 weeks",
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get approved within 24 hours with minimal documentation",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Charges",
      description: "Transparent pricing with no surprise fees or charges",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Weekly Finance?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our weekly finance solutions are designed to provide maximum
            flexibility while ensuring manageable repayment schedules.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
