import React from "react";
import { User, GraduationCap, Heart, Home, Zap } from "lucide-react";

const HeroSection = () => {
  const loanPurposes = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Fund your dreams with education loans",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Medical",
      description: "Emergency medical expenses covered",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Home,
      title: "Home Improvement",
      description: "Renovate and upgrade your home",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Emergency",
      description: "Quick funds for urgent needs",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-200/30 rounded-full px-6 py-3 mb-6">
            <User className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-white">
              Personal Loans
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fast & Flexible{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Personal
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl"></div>
            </span>{" "}
            Funding
          </h1>

          <p className="text-lg md:text-xl text-white leading-relaxed mb-12 max-w-4xl mx-auto">
            Whether it's for{" "}
            <span className="text-emerald-600 font-semibold">
              education, medical needs, or home improvements
            </span>
            , our personal loans provide the financial flexibility you need with
            competitive rates and quick approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {loanPurposes.map((purpose, index) => {
            const IconComponent = purpose.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${purpose.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {purpose.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {purpose.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
