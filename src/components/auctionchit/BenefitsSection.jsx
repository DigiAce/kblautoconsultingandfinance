import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Transparent auction process",
    "Regular monthly meetings",
    "Flexible savings and borrowing",
    "Community-based financial solution",
    "No hidden charges or fees",
    "Regulated and secure operations",
    "Opportunity to win early",
    "Build financial discipline",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Our Chit Fund?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our chit fund schemes combine the benefits of systematic savings
              with the flexibility of borrowing when needed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Join Chit Fund</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          <div className="relative">
            <img
              src="/img/money.jpg"
              alt="Chit Fund Calculator"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
