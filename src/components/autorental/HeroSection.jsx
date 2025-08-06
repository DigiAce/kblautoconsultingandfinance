import React from "react";
import { Car, Clock, Calendar, Users } from "lucide-react";

const HeroSection = () => {
  const rentalPlans = [
    {
      icon: Clock,
      title: "Daily Rental",
      description: "Perfect for short trips and daily commutes",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: "Weekly Rental",
      description: "Ideal for business trips and extended stays",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Monthly Rental",
      description: "Best value for long-term transportation needs",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-6">
              <Car className="w-5 h-5 text-orange-200" />
              <span className="text-sm font-medium text-orange-100">
                Auto Rental Services
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  Auto Rental
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl"></div>
              </span>{" "}
              Solutions
            </h1>

            <p className="text-lg md:text-xl text-orange-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Whether it's for{" "}
              <span className="text-yellow-300 font-semibold">
                daily use, business trips, or long-term needs
              </span>
              , our well-maintained vehicles and flexible rental plans ensure a
              smooth and convenient travel experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {rentalPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
