import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const advantages = [
    "No collateral required",
    "Flexible repayment tenure",
    "Competitive interest rates",
    "Quick disbursement",
    "Minimal documentation",
    "Online application process",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Personal Loans?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand that personal financial needs are unique. That's why
              we offer customized loan solutions with transparent terms and
              quick processing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>

            {/* <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Apply for Personal Loan</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Loan Details
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-semibold text-gray-800">
                    ₹25,000 - ₹10,00,000
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-semibold text-emerald-600">
                    Starting from 10.5%
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Tenure</span>
                  <span className="font-semibold text-gray-800">
                    12 - 60 months
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-semibold text-blue-600">
                    24-48 hours
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold text-gray-800">
                    1% of loan amount
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
