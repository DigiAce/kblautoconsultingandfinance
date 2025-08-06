import React from "react";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Ready to Save & Win?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our exciting Kulukkal Chit scheme today and turn your savings
          into winning opportunities!
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Join Lucky Draw
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
