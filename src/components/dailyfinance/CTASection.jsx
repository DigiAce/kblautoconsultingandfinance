import React from "react";
import { Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get Your Business Loan Today
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Don't let cash flow issues stop your business growth. Get instant
          working capital with our daily finance solutions.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
            Call Us Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
