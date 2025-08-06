import React from "react";
import { Car, CheckCircle } from "lucide-react";

const VehicleTypesSection = () => {
  const vehicleTypes = [
    {
      icon: Car,
      title: "Cars",
      description: "Comfortable sedans and hatchbacks",
      dailyRate: "₹800",
      weeklyRate: "₹5,000",
      monthlyRate: "₹18,000",
      features: [
        "AC Available",
        "GPS Enabled",
        "Insurance Covered",
        "24/7 Support",
      ],
    },
    {
      icon: Car,
      title: "Two-Wheelers",
      description: "Bikes and scooters for city rides",
      dailyRate: "₹200",
      weeklyRate: "₹1,200",
      monthlyRate: "₹4,500",
      features: [
        "Fuel Efficient",
        "Easy Handling",
        "Helmet Provided",
        "Quick Booking",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles suitable
            for all your transportation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {vehicleTypes.map((vehicle, index) => {
            const IconComponent = vehicle.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {vehicle.title}
                    </h3>
                    <p className="text-gray-600">{vehicle.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600">
                      {vehicle.dailyRate}
                    </div>
                    <div className="text-sm text-gray-600">Per Day</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">
                      {vehicle.weeklyRate}
                    </div>
                    <div className="text-sm text-gray-600">Per Week</div>
                  </div>
                  <div className="text-center bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">
                      {vehicle.monthlyRate}
                    </div>
                    <div className="text-sm text-gray-600">Per Month</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature, idx) => (
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

export default VehicleTypesSection;
