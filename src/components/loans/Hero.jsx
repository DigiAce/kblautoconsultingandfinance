import React from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  Star,
  CreditCard,
  Users,
  Award,
} from "lucide-react";

const Hero = () => {
  const loanTypes = [
    { name: "Personal Loans", rate: "8.5%", icon: Users },
    { name: "Business Loans", rate: "9.2%", icon: CreditCard },
    { name: "Vehicle Finance", rate: "7.8%", icon: Award },
    { name: "Mortgage Loans", rate: "8.0%", icon: Shield },
  ];

  const features = [
    { icon: Shield, text: "100% Secure" },
    { icon: Clock, text: "Quick Approval" },
    { icon: CheckCircle, text: "Easy Process" },
    { icon: CreditCard, text: "Low Interest" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
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

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:py-32">
        <div className="grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-prose text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-blue-100">
                Trusted Loan Provider
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
              Get Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent font-extrabold">
                  Dream Loan
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl"></div>
              </span>{" "}
              Today
            </h1>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                Experience{" "}
                <span className="text-blue-400 font-semibold">
                  lightning-fast loan approvals
                </span>{" "}
                with KBL Financial Services. Whether it's for personal needs,
                business growth, or vehicle purchase, we provide{" "}
                <span className="text-purple-400 font-semibold">
                  competitive rates
                </span>{" "}
                and
                <span className="text-yellow-400 font-semibold">
                  {" "}
                  flexible terms
                </span>{" "}
                tailored just for you.
              </p>

              <p>
                Join{" "}
                <span className="text-green-400 font-semibold">
                  10,000+ satisfied customers
                </span>{" "}
                who trust us for their financial needs. Get approved in as
                little as
                <span className="text-orange-400 font-semibold">
                  {" "}
                  24 hours
                </span>{" "}
                with minimal documentation.
              </p>
            </div>

            {/* Feature Pills */}
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

            {/* Loan Types Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {loanTypes.map((loan, index) => {
                const IconComponent = loan.icon;
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
                          {loan.name}
                        </div>
                        <div className="text-green-400 font-bold">
                          From {loan.rate}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>Learn More</span>
              </a>
            </div> */}
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              {/* Replace the src with your actual image path */}
              <img
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800" // Update this path
                alt="Happy customer receiving loan approval"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24hrs</div>
                  <div className="text-xs text-gray-600">Quick Approval</div>
                </div>
              </div> */}
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
