import React from "react";
import { Gavel } from "lucide-react";

const HeroSection = () => {
  const chitPlans = [
    {
      amount: "₹1,00,000",
      duration: "20 Months",
      members: "20",
      monthlyContribution: "₹5,000",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      amount: "₹2,00,000",
      duration: "20 Months",
      members: "20",
      monthlyContribution: "₹10,000",
      color: "from-purple-500 to-purple-600",
    },
    {
      amount: "₹5,00,000",
      duration: "20 Months",
      members: "20",
      monthlyContribution: "₹25,000",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-6 py-3 mb-6">
              <Gavel className="w-5 h-5 text-indigo-200" />
              <span className="text-sm font-medium text-indigo-100">
                Auction Chit Fund
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transparent{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                  Chit Fund
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-xl"></div>
              </span>{" "}
              Schemes
            </h1>

            <p className="text-lg md:text-xl text-indigo-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              Join our{" "}
              <span className="text-yellow-300 font-semibold">
                transparent chit fund schemes
              </span>{" "}
              with monthly auctions. A perfect blend of savings and borrowing
              that helps you achieve your financial goals through community
              participation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {chitPlans.map((plan, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20"
              >
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full mb-4`}
                  >
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.amount}
                  </h3>
                  <p className="text-gray-600">Chit Value</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-800">
                      {plan.duration}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Members</span>
                    <span className="font-semibold text-gray-800">
                      {plan.members}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Monthly</span>
                    <span className="font-semibold text-indigo-600">
                      {plan.monthlyContribution}
                    </span>
                  </div>
                </div>

                {/* <button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Join This Chit
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
