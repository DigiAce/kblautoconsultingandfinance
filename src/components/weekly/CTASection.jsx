import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Ready to Get Your Weekly Finance?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of satisfied customers who trust KBL for their
          financial needs.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Apply Online Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
