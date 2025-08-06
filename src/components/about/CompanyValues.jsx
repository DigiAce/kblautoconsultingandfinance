import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Eye,
  Rocket,
  Star,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const CompanyValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const values = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To empower businesses with strategic financial solutions that drive sustainable growth and create lasting value for stakeholders.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
      delay: "0ms",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "To be the most trusted partner for financial transformation, recognized globally for our innovative approach and exceptional results.",
      icon: Eye,
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-500/10 to-teal-400/10",
      delay: "200ms",
    },
    {
      id: 3,
      title: "Our Goal",
      description:
        "At KBL Auto Consulting & Finance, your goals are our priority. We don't just provide financial services—we build long-standing partnerships based on trust, service, and results.",
      icon: Rocket,
      gradient: "from-purple-500 to-indigo-400",
      bgGradient: "from-purple-500/10 to-indigo-400/10",
      delay: "400ms",
    },
  ];

  const achievements = [
    { icon: Users, number: "1600+", label: "Happy Clients" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: TrendingUp, number: "₹50Cr+", label: "Loans Disbursed" },
    { icon: CheckCircle, number: "99%", label: "Success Rate" },
  ];

  return (
    <section
      id="values"
      className="relative overflow-hidden py-20 lg:py-32"
      ref={ref}
    >
      {/* Background with Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
        ></div>
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
          className="absolute top-1/3 right-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-blue-800">
              Our Foundation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Our Core{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                Principles
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            To be a leading provider of integrated financial and mobility
            solutions that empower individuals and businesses with{" "}
            <span className="text-blue-600 font-semibold">confidence</span>,{" "}
            <span className="text-purple-600 font-semibold">freedom</span>, and{" "}
            <span className="text-yellow-600 font-semibold">peace of mind</span>
            .
          </p>
        </div>

        {/* Values Cards */}
        <div className="relative mb-20" ref={cardsRef}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  className="group relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                  style={{
                    animation: cardsInView
                      ? `fadeInUp 0.8s ease-out ${value.delay} both`
                      : "none",
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-700`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl mb-6 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-500">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors duration-500">
                      {value.description}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}

        {/* Call to Action */}
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyValues;
