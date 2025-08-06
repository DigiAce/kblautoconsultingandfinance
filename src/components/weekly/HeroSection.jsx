import React from "react";
import { Calendar, CheckCircle, ArrowRight, Calculator } from "lucide-react";

const HeroSection = () => {
  const features = [
    "Loan Amount: ₹10,000 to ₹5,00,000",
    "Tenure: 4 to 52 weeks",
    "Interest Rate: Starting from 12% per annum",
    "Processing Fee: Minimal charges",
    "Prepayment: No penalty charges",
  ];

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span className="text-sm font-medium text-blue-100">
                  Weekly Finance
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Convenient{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    Weekly
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"></div>
                </span>{" "}
                Finance Solutions
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Perfect for{" "}
                <span className="text-blue-400 font-semibold">
                  moderate financial needs
                </span>{" "}
                with flexible weekly repayment options that align with your
                income cycle. Ideal for small businesses and working
                professionals.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  <Calculator className="w-5 h-5" />
                  <span>Calculate EMI</span>
                </button>
              </div> */}
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Loan Features
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
