import React from "react";
import { Zap, ArrowRight, Phone, MapPin, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Well-maintained vehicles",
    "Flexible rental duration",
    "Competitive pricing",
    "Quick booking process",
    "Easy documentation",
    "24/7 customer support",
    "Insurance coverage included",
    "No hidden charges",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Rental Service?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Perfect for delivery partners, travelers, working professionals,
              and anyone who needs a reliable temporary vehicle solution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Quick Booking
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Call Us</div>
                    <div className="text-sm text-gray-600">+91 97102 28721</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Visit Us</div>
                    <div className="text-sm text-gray-600">
                      Pandiyan Nagar, Chennai
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-800">Available</div>
                    <div className="text-sm text-gray-600">24/7 Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
