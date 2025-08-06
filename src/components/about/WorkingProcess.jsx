import React from "react";
import { useInView } from "react-intersection-observer";
import {
  UserPlus,
  Users,
  Trophy,
  Gift,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

const WorkingProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const processSteps = [
    {
      id: 1,
      date: "Step 1",
      title: "Application & Documentation",
      description:
        "Submit your loan application with minimal paperwork. Our streamlined process ensures quick verification and approval with transparent terms and conditions.",
      icon: UserPlus,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: 2,
      date: "Step 2",
      title: "Verification & Assessment",
      description:
        "Our expert team conducts thorough verification of your documents and assesses your financial requirements to provide the best suitable loan options.",
      icon: Users,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
    },
    {
      id: 3,
      date: "Step 3",
      title: "Approval & Disbursement",
      description:
        "Once approved, funds are disbursed quickly to your account. Experience our fast and reliable service with competitive interest rates and flexible repayment options.",
      icon: Trophy,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      id: 4,
      date: "Step 4",
      title: "Ongoing Support & Service",
      description:
        "Enjoy continuous support throughout your loan tenure with our dedicated customer service team, flexible repayment options, and additional financial services.",
      icon: Gift,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Elements */}
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

      <div className="relative container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* Left Column - Enhanced */}
          <div
            className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
            ref={ref}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-3 mb-6 w-fit">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Our Process
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              How We{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Our streamlined{" "}
              <span className="text-blue-600 font-semibold">
                4-step process
              </span>{" "}
              ensures you get the financial support you need quickly and
              efficiently. From application to disbursement, we make it simple
              and transparent.
            </p>
          </div>

          {/* Right Timeline - Enhanced */}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky" ref={timelineRef}>
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-24 bottom-24 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600 rounded-full shadow-lg"></div>

                {/* Timeline Items */}
                <div className="md:hidden flex flex-col space-y-8">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.id}
                        className="flex flex-col items-center w-full"
                        style={{
                          animation: timelineInView
                            ? `fadeInUp 0.8s ease-out ${index * 0.3}s both`
                            : "none",
                        }}
                      >
                        {/* Timeline Icon */}
                        <div className="z-20 flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-500 rounded-full shadow-xl mb-4">
                          <div
                            className={`w-full h-full bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center`}
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full px-2">
                          <div
                            className={`group relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500`}
                          >
                            {/* Step Badge */}
                            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse`}
                              ></div>
                              <span className="text-sm font-medium text-slate-700">
                                {step.date}
                              </span>
                            </div>

                            {/* Title */}
                            <h4 className="mb-3 font-bold text-xl md:text-2xl text-slate-800">
                              {step.title}
                            </h4>

                            {/* Description */}
                            <p className="text-base leading-relaxed text-slate-600">
                              {step.description}
                            </p>

                            {/* Bottom Border Accent */}
                            <div
                              className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} rounded-b-2xl`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isRight = index % 2 === 0; // Alternate left/right for desktop

                    return (
                      <div
                        key={step.id}
                        className={`mb-16 flex justify-between items-center w-full ${
                          isRight ? "flex-row-reverse" : "flex-row"
                        }`}
                        style={{
                          animation: timelineInView
                            ? `fadeIn${
                                isRight ? "Right" : "Left"
                              } 0.8s ease-out ${index * 0.3}s both`
                            : "none",
                        }}
                      >
                        {/* Empty space */}
                        <div className="order-1 w-5/12"></div>

                        {/* Timeline Icon */}
                        <div className="z-20 flex items-center order-1 w-12 h-12 bg-white border-4 border-blue-500 rounded-full shadow-xl">
                          <div
                            className={`w-full h-full bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center`}
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div
                          className={`order-1 w-5/12 px-6 py-8 ${
                            isRight ? "text-right" : "text-left"
                          }`}
                        >
                          <div
                            className={`group relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                          >
                            {/* Step Badge */}
                            <div
                              className={`inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 ${
                                isRight ? "ml-auto" : ""
                              }`}
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse`}
                              ></div>
                              <span className="text-sm font-medium text-slate-700">
                                {step.date}
                              </span>
                            </div>

                            {/* Title */}
                            <h4 className="mb-4 font-bold text-2xl md:text-3xl text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                              {step.title}
                            </h4>

                            {/* Description */}
                            <p className="text-base md:text-lg leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                              {step.description}
                            </p>

                            {/* Decorative Elements */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                            {/* Bottom Border Accent */}
                            <div
                              className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Bottom Illustration */}
                {/* <div className="text-center mt-64">
                  <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl mb-6">
                    <CheckCircle className="w-10 h-10 md:w-16 md:h-16 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 mb-8 max-w-md mx-auto">
                    Join thousands of satisfied customers who trust KBL
                    Financial Services for their financial needs.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

export default WorkingProcess;
