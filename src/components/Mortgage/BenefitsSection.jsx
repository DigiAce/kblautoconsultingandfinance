import React from "react";
import { Shield, ArrowRight, Calculator } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Higher loan amounts against collateral",
    "Lower interest rates compared to personal loans",
    "Flexible repayment tenure up to 10 years",
    "Quick approval with asset verification",
    "Retain ownership of your assets",
    "No end-use restrictions",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Mortgage Loans?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Mortgage loans offer the perfect solution when you need
              substantial funding while keeping your valuable assets secure and
              accessible.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                <Calculator className="w-5 h-5" />
                <span>Calculate Loan</span>
              </button>
            </div> */}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Loan Specifications
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-semibold text-gray-800">
                      Up to ₹50,00,000
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Based on asset value
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold text-blue-600">
                      Starting from 8.5%
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">Competitive rates</div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Tenure</span>
                    <span className="font-semibold text-gray-800">
                      Up to 10 years
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Flexible repayment
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Processing Time</span>
                    <span className="font-semibold text-green-600">
                      3-5 working days
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    After document verification
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
