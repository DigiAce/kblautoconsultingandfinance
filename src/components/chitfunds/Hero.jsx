import React from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Wallet,
  Users,
  Award,
} from "lucide-react";

const Hero = () => {
  const chitPlans = [
    { name: "Monthly Chit", rate: "₹5,000 - ₹50,000", icon: Wallet },
    { name: "Weekly Chit", rate: "₹1,000 - ₹10,000", icon: Users },
    { name: "Business Chit", rate: "₹25,000+", icon: Award },
    { name: "Flexible Plans", rate: "Custom Amounts", icon: Shield },
  ];

  const features = [
    { icon: Shield, text: "Safe & Transparent" },
    { icon: Clock, text: "On-Time Payouts" },
    { icon: CheckCircle, text: "Flexible Contributions" },
    { icon: Wallet, text: "Disciplined Savings" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/4 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="max-w-prose text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-blue-100">
                Trusted Chit Fund Service
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
              Join Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                  Smart Savings
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"></div>
              </span>{" "}
              Plan
            </h1>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                Secure your future with{" "}
                <span className="text-blue-400 font-semibold">
                  group savings
                </span>{" "}
                and earn while you save. KBL Chit Funds offer{" "}
                <span className="text-purple-400 font-semibold">
                  timely payouts
                </span>{" "}
                and{" "}
                <span className="text-yellow-400 font-semibold">
                  flexible plans
                </span>{" "}
                for every need.
              </p>
              <p>
                Trusted by{" "}
                <span className="text-green-400 font-semibold">
                  thousands of members
                </span>
                , we ensure transparency, safety, and consistent returns.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <IconComponent className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-white">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Chit Plans */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {chitPlans.map((plan, index) => {
                const IconComponent = plan.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {plan.name}
                        </div>
                        <div className="text-green-400 font-bold">
                          {plan.rate}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Optional Buttons (Uncomment if needed) */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#plans"
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>Explore Plans</span>
              </a>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy members saving through chit fund"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
