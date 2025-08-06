import React from "react";
import {
  Zap,
  FileText,
  Shield,
  Clock,
  ArrowRight,
  Calculator,
} from "lucide-react";

const FeaturesSection = () => {
  const advantages = [
    "Up to 90% financing available",
    "Competitive interest rates",
    "Flexible tenure options",
    "Quick approval process",
    "Minimal documentation required",
    "No hidden charges",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Vehicle Finance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get on the road faster with our streamlined vehicle financing
              process. We offer competitive rates and flexible terms for all
              types of vehicles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <span>Get Pre-Approved</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                <Calculator className="w-5 h-5" />
                <span>EMI Calculator</span>
              </button>
            </div> */}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Loan Features
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Loan Amount</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    Up to ₹25,00,000
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Interest Rate</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    Starting from 7.5%
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Tenure</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    Up to 7 years
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Processing Time</span>
                  </div>
                  <span className="font-semibold text-yellow-600">
                    24-48 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
