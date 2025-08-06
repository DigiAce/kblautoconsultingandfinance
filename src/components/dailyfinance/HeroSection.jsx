import React from "react";
import { Calendar, Zap, ArrowRight, Calculator } from "lucide-react";

const HeroSection = () => {
  const dailyPlans = [
    {
      amount: "₹25,000",
      daily: "₹1,000",
      days: "30",
      total: "₹30,000",
      color: "from-green-400 to-green-500",
    },
    {
      amount: "₹50,000",
      daily: "₹2,000",
      days: "30",
      total: "₹60,000",
      color: "from-blue-400 to-blue-500",
    },
    {
      amount: "₹1,00,000",
      daily: "₹4,000",
      days: "30",
      total: "₹1,20,000",
      color: "from-purple-400 to-purple-500",
    },
  ];

  return (
    <React.Fragment>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-blue-800 to-green-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%200l30%2030-30%2030L0%2030z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-6">
              <Calendar className="w-5 h-5 text-green-200" />
              <span className="text-sm font-medium text-green-100">
                Daily Finance
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quick{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  Daily
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl"></div>
              </span>{" "}
              Business Loans
            </h1>

            <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              <span className="text-yellow-300 font-semibold">
                Short-term loans with easy daily repayments
              </span>
              , specifically designed for traders, vendors, and small businesses
              who need quick working capital with flexible daily collections.
            </p>

            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <Zap className="w-5 h-5" />
                <span>Get Instant Loan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div> */}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {dailyPlans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.color} rounded-full mb-3`}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {plan.amount}
                  </h3>
                  <p className="text-gray-600 text-sm">Loan Amount</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm">Daily Payment</span>
                    <span className="font-semibold text-gray-800">
                      {plan.daily}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm">Duration</span>
                    <span className="font-semibold text-gray-800">
                      {plan.days} days
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-600 text-sm">Total Amount</span>
                    <span className="font-semibold text-green-600">
                      {plan.total}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
