import { heroData } from "../../data";
import { ArrowRight, Play, Shield, Clock, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 sm:px-6">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-purple-900/90"></div>
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

      {/* Container */}
      <div className="relative mx-auto w-full max-w-7xl py-20 md:py-32 lg:py-40">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-100">
                Trusted Financial Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">{heroData.heading}</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent font-extrabold">
                  {heroData.highlight}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-lg md:text-xl text-gray-300 leading-relaxed mx-auto lg:mx-0">
              {heroData.subheading}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Quick Approval</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white">10K+ Customers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white">Transparent</span>
              </div>
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={heroData.cta.primary.link}
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span>{heroData.cta.primary.label}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href={heroData.cta.secondary.link}
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                <span>{heroData.cta.secondary.label}</span>
              </a>
            </div> */}
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
                <img
                  src={heroData.image}
                  alt="KBL Financial Services"
                  className="w-full max-w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              {/* {heroData.stats && (
                <>
                  <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {heroData.stats[0].number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {heroData.stats[0].label}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-800">
                          {heroData.stats[3].number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {heroData.stats[3].label}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )} */}

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl lg:rounded-3xl blur-xl mt-2"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        {/* {heroData.stats && (
          <div className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )} */}
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
