import React from "react";

const FinanceBanner = ({ data }) => {
  // Safely access data properties with defaults
  const backgroundImage = data?.backgroundImage || "";
  const title = data?.title || { part1: "", highlighted: "" };
  const subtitle = data?.subtitle || "";
  const ctaButtons = data?.ctaButtons || [];
  const stats = data?.stats || [];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
      {/* Background image with overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>

      {/* Wave divider */}
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="-mb-1 w-full text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title.part1}{" "}
            <span className="text-blue-400">{title.highlighted}</span>
          </h1>
          <p className="mb-8 text-xl text-blue-100 md:text-2xl">{subtitle}</p>

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href || "#"}
                  className={`flex items-center justify-center rounded-lg px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 focus:ring-4 focus:outline-none w-full sm:w-auto ${
                    button.variant === "primary"
                      ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-300"
                      : "border-2 border-white hover:bg-white/10 focus:ring-gray-300"
                  }`}
                >
                  {button.text}
                  <svg
                    className="ml-3 w-5 h-5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        button.variant === "primary"
                          ? "m9 5 7 7-7 7"
                          : "m19 9-7 7-7-7"
                      }
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}

          {/* Stats Section */}
          {stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="text-4xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
    </div>
  );
};

// Default props for safer rendering
FinanceBanner.defaultProps = {
  data: {
    backgroundImage: "",
    title: {
      part1: "Strategic Financial Solutions for",
      highlighted: "Sustainable Growth",
    },
    subtitle:
      "Expert consulting services that transform your financial strategy and drive business success",
    ctaButtons: [],
    stats: [],
  },
};

export default FinanceBanner;
