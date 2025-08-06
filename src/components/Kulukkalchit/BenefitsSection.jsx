import React from "react";
import {
  Sparkles,
  ArrowRight,
  Trophy,
  Zap,
  CheckCircle,
  Users,
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Fun and engaging savings method",
    "Chance to win lump sum early",
    "Disciplined savings habit",
    "Community-based approach",
    "Transparent lucky draw system",
    "Regular monthly meetings",
    "No complex procedures",
    "Guaranteed returns at maturity",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Choose Kulukkal Chit?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the perfect blend of systematic savings and exciting
              winning opportunities with our innovative Kulukkal Chit scheme.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
              <span>Start Saving & Winning</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Lucky Draw System
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Monthly Draw</span>
                    <Zap className="w-5 h-5 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Every month, one lucky member wins the prize amount
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Fair System</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Transparent and regulated lucky draw process
                  </p>
                </div>

                <div className="bg-white/70 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Equal Chances</span>
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Every member has equal opportunity to win
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
