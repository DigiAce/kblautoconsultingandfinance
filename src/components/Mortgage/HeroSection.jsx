import React from "react";
import { Home, Car, FileText, Lock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const collateralTypes = [
    {
      icon: Home,
      title: "Property Documents",
      description: "Residential or commercial property papers",
      color: "from-blue-500 to-blue-600",
      features: ["House documents", "Land papers", "Commercial property"],
    },
    {
      icon: Car,
      title: "Vehicle Documents",
      description: "Car, bike, or commercial vehicle papers",
      color: "from-green-500 to-green-600",
      features: ["Car RC", "Bike documents", "Commercial vehicles"],
    },
    {
      icon: FileText,
      title: "Asset Documents",
      description: "Other valuable asset documentation",
      color: "from-purple-500 to-purple-600",
      features: ["Gold documents", "Fixed deposits", "Insurance policies"],
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Lock className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">
                Mortgage Loans
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unlock Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Asset's
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"></div>
              </span>{" "}
              Value
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Secure loans against your{" "}
              <span className="text-blue-400 font-semibold">
                property documents, vehicle papers, or valuable assets
              </span>
              . Get higher loan amounts at competitive rates while retaining
              ownership of your assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {collateralTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
