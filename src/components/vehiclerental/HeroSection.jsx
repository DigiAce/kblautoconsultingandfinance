import React from "react";
import { Car, Bike, Truck, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const vehicleTypes = [
    {
      icon: Car,
      title: "Cars",
      description: "New & used car financing",
      color: "from-blue-500 to-blue-600",
      features: ["Hatchback", "Sedan", "SUV", "Luxury cars"],
      rate: "7.5%",
    },
    {
      icon: Bike,
      title: "Two-Wheelers",
      description: "Bikes & scooters financing",
      color: "from-green-500 to-green-600",
      features: ["Motorcycles", "Scooters", "Electric bikes", "Sports bikes"],
      rate: "8.0%",
    },
    {
      icon: Truck,
      title: "Commercial Vehicles",
      description: "Business vehicle loans",
      color: "from-orange-500 to-orange-600",
      features: ["Trucks", "Tempo", "Auto rickshaw", "Delivery vans"],
      rate: "9.0%",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Car className="w-5 h-5 text-blue-300" />
              <span className="text-sm font-medium text-blue-100">
                Vehicle Finance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Drive Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Dream
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"></div>
              </span>{" "}
              Vehicle Today
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Affordable loan options for purchasing{" "}
              <span className="text-blue-400 font-semibold">
                cars, bikes, and commercial vehicles
              </span>
              with minimal documentation and competitive rates. Make your
              vehicle dreams a reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {vehicleTypes.map((vehicle, index) => {
              const IconComponent = vehicle.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${vehicle.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Starting from</div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {vehicle.rate}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {vehicle.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{vehicle.description}</p>

                  <div className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="text-center">
            <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Apply for Vehicle Loan</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
