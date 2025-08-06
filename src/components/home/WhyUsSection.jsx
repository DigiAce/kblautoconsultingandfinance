import { useInView } from "react-intersection-observer";
import { whyUsData } from "../../data";
import {
  Shield,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

const WhyUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Icon component to render different icons based on the feature
  const FeatureIcon = ({ icon, index }) => {
    const iconComponents = {
      expertise: Shield,
      customer: Users,
      quality: Award,
      innovation: Lightbulb,
    };

    const IconComponent = iconComponents[icon] || Shield;
    const colors = [
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-orange-500 to-orange-600",
    ];

    return (
      <div
        className={`absolute left-0 top-0 w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
      >
        <IconComponent className="w-6 h-6 text-white" />
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
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
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="lg:pr-8 lg:pt-4" ref={ref}>
            <div className="lg:max-w-lg">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium text-blue-100">
                  {whyUsData.subtitle}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                    {whyUsData.title}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
                {whyUsData.description}
              </p>

              {/* Features List */}
              <dl className="space-y-6">
                {whyUsData.features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="group relative pl-16 transition-all duration-500 hover:transform hover:translate-x-2"
                    style={{
                      animation: inView
                        ? `fadeInLeft 0.8s ease-out ${index * 0.2}s both`
                        : "none",
                    }}
                  >
                    {/* Icon */}
                    <FeatureIcon icon={feature.icon} index={index} />

                    {/* Content */}
                    <div className="relative">
                      <dt className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.name}
                      </dt>
                      <dd className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {feature.description}
                      </dd>
                    </div>

                    {/* Hover Effect Line */}
                    <div className="absolute left-6 top-0 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </dl>

              {/* Call to Action */}
              {/* <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={whyUsData.cta.primary.url}
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
                >
                  <span>{whyUsData.cta.primary.text}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href={whyUsData.cta.secondary.url}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  <span>{whyUsData.cta.secondary.text}</span>
                </a>
              </div> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" ref={imageRef}>
            <div className="relative">
              {/* Main Image */}
              <div
                className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
                style={{
                  animation: imageInView
                    ? "fadeInRight 1s ease-out 0.3s both"
                    : "none",
                }}
              >
                <img
                  src={whyUsData.image.url}
                  alt={whyUsData.image.alt}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">99%</div>
                    <div className="text-sm text-gray-600">
                      Customer Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">10K+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl lg:rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;
