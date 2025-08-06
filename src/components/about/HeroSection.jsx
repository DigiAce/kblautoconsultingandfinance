import React from "react";
import {
  ArrowRight,
  Play,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

const HeroSection = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Award },
    { number: "1600+", label: "Happy Clients", icon: Users },
    { number: "₹50Cr+", label: "Loans Disbursed", icon: Shield },
    { number: "99%", label: "Success Rate", icon: CheckCircle },
  ];

  const features = [
    { icon: Shield, text: "Trusted & Secure" },
    { icon: Clock, text: "Quick Processing" },
    { icon: Users, text: "Customer First" },
    { icon: Award, text: "Award Winning" },
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
      </div>

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:py-32">
        <div className="grid md:grid-cols-2 md:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-prose text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-blue-100">
                About KBL Financial
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
              About{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent font-extrabold">
                  KBL
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              </span>{" "}
              Auto Consulting & Finance
            </h1>

            {/* Description */}
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                KBL Auto Consulting & Finance is a{" "}
                <span className="text-blue-400 font-semibold">
                  trusted and rapidly growing
                </span>{" "}
                name in the financial services and mobility sector, dedicated to
                simplifying access to financial resources and transportation
                solutions. Built on the pillars of{" "}
                <span className="text-purple-400 font-semibold">
                  integrity, transparency, and customer-centricity
                </span>
                , KBL is committed to enabling individuals, small businesses,
                and professionals to achieve their goals.
              </p>

              <p>
                With a deep understanding of local needs and market dynamics, we
                provide a comprehensive suite of offerings that are tailored to
                suit the everyday financial aspirations of our clients. Whether
                you're looking to secure funds quickly, rent a vehicle for
                flexible mobility, or participate in a well-managed chit fund,{" "}
                <span className="text-yellow-400 font-semibold">
                  KBL stands as your dependable partner
                </span>
                .
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

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                <span>Learn More</span>
              </a>
            </div> */}
          </div>

          {/* Right Content - Image with Stats */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="KBL Auto Consulting & Finance Team"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      1600+
                    </div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">10+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl lg:rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div> */}
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

export default HeroSection;
