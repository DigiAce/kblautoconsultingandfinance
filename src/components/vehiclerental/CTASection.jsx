import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Ready to Drive Your Dream Vehicle?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Get instant approval and drive away your dream vehicle today with our
          hassle-free financing.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Apply Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Find Dealers
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CTASection;
