import React from "react";
import { Gift, Sparkles, ArrowRight, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%2030l10-10v20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full px-6 py-3 mb-6">
              <Gift className="w-5 h-5 text-pink-200" />
              <span className="text-sm font-medium text-pink-100">
                Kulukkal Chit
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              A Smart Way to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                  Save & Win
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-pink-400/30 blur-xl"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-pink-100 leading-relaxed mb-12 max-w-4xl mx-auto">
              The Kulukkal Chit is a{" "}
              <span className="text-yellow-300 font-semibold">
                fun and effective savings scheme
              </span>{" "}
              designed to help you save money regularly while getting a chance
              to win a lump sum amount through our exciting lucky draw system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <Sparkles className="w-5 h-5" />
                <span>Join Lucky Draw</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                <Target className="w-5 h-5" />
                <span>How It Works</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
