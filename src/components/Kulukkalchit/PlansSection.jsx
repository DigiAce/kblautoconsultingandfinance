import React from "react";
import { Gift } from "lucide-react";

const PlansSection = () => {
  const chitPlans = [
    {
      name: "Silver Kulukkal",
      amount: "₹50,000",
      monthly: "₹2,500",
      duration: "20 Months",
      winChance: "1 in 20",
      color: "from-gray-400 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
    },
    {
      name: "Gold Kulukkal",
      amount: "₹1,00,000",
      monthly: "₹5,000",
      duration: "20 Months",
      winChance: "1 in 20",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
    },
    {
      name: "Platinum Kulukkal",
      amount: "₹2,00,000",
      monthly: "₹10,000",
      duration: "20 Months",
      winChance: "1 in 20",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Kulukkal Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select from our exciting Kulukkal Chit plans and start your journey
            towards systematic savings with winning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {chitPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${plan.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full mb-4 shadow-lg`}
                >
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-gray-800">
                  {plan.amount}
                </div>
                <p className="text-gray-600">Prize Amount</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                  <span className="text-gray-600">Monthly Payment</span>
                  <span className="font-semibold text-gray-800">
                    {plan.monthly}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold text-gray-800">
                    {plan.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                  <span className="text-gray-600">Win Chance</span>
                  <span className="font-semibold text-green-600">
                    {plan.winChance}
                  </span>
                </div>
              </div>

              {/* <button
                className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Join This Plan
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
