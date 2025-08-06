import React from "react";
import { Zap, ArrowRight, CheckCircle, Clock } from "lucide-react";

const FeaturesBenefitsSection = () => {
  const loanFeatures = [
    "Loan Amount: ₹5,000 to ₹2,00,000",
    "Daily repayment from ₹200 to ₹8,000",
    "Tenure: 30 to 100 days",
    "Interest: Competitive daily rates",
    "Processing: Same day approval",
    "Documentation: Minimal requirements",
  ];

  const benefits = [
    "Same day loan approval",
    "Daily collection at your doorstep",
    "No complex documentation",
    "Flexible loan amounts",
    "Quick business expansion",
    "Trusted by thousands",
    "Personal relationship manager",
    "Emergency fund availability",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Daily Finance?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the working capital you need with our hassle-free daily
              finance solutions designed specifically for small businesses and
              traders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Apply for Daily Loan</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Loan Features
              </h3>
              <div className="space-y-4">
                {loanFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-800">
                    Quick Process
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Apply today, get approved today, receive funds today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefitsSection;
