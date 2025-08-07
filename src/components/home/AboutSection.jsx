import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Users,
  Briefcase,
  Car,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      value: 10,
      label: "Years Experience",
      icon: Award,
      suffix: "+",
      color: "from-blue-500 to-blue-600",
    },
    {
      value: 1600,
      label: "Happy Clients",
      icon: Users,
      suffix: "+",
      color: "from-green-500 to-green-600",
    },
    {
      value: 5,
      label: "Services",
      icon: Briefcase,
      suffix: "",
      color: "from-purple-500 to-purple-600",
    },
    {
      value: 50,
      label: "Vehicle Finance",
      icon: Car,
      suffix: "+",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (statsInView) {
      const duration = 2500;
      const interval = 30;
      const steps = duration / interval;

      stats.forEach((stat, index) => {
        const increment = stat.value / steps;
        let currentCount = 0;

        const counterInterval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= stat.value) {
            currentCount = stat.value;
            clearInterval(counterInterval);
          }

          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(currentCount);
            return newCounters;
          });
        }, interval);
      });
    }
  }, [statsInView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-32 bg-white text-gray-800"
    >
      {/* Container */}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">
              About KBL Financial
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted{" "}
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Financial Partner
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 blur-xl rounded"></div>
            </span>
          </h2>

          <p className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            KBL Auto Consulting & Finance is a trusted name in the financial
            services sector, committed to delivering{" "}
            <span className="text-blue-600 font-semibold">
              flexible, transparent, and accessible
            </span>{" "}
            finance solutions. With a strong focus on customer satisfaction, we
            provide tailored support to meet the diverse financial needs of
            individuals, small businesses, and working professionals.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20" ref={statsRef}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animation: statsInView
                      ? `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                      : "none",
                  }}
                >
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8 text-center hover:bg-gray-100 transition-all duration-500 hover:scale-105 shadow-sm hover:shadow-lg">
                    {/* Glow on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 shadow-md`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="text-4xl lg:text-5xl font-bold mb-2">
                      {counters[index]}
                      {stat.suffix}
                    </div>

                    <p className="text-gray-600 font-medium text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div> */}
      </div>

      {/* Keyframes */}
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

export default AboutSection;
