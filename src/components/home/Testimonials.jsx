import React, { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data";

const Testimonials = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollDirection = useRef(isMobile ? 1 : 1);
  const scrollSpeed = isMobile ? 0.8 : 0.5;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      scrollDirection.current = window.innerWidth <= 768 ? 1 : 1;
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const container = containerRef.current;
    if (!container) return;

    let animationId;
    let lastScrollPosition = 0;

    const animateScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = container;
      const maxScroll = scrollHeight - clientHeight;

      if (!isMobile) {
        if (scrollTop >= maxScroll - 1) {
          scrollDirection.current = -1;
        } else if (scrollTop <= 1) {
          scrollDirection.current = 1;
        }
      } else {
        if (scrollTop >= maxScroll - 1) {
          container.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          return;
        }
      }

      const newScrollPosition =
        scrollTop + scrollSpeed * scrollDirection.current;

      container.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });

      animationId = requestAnimationFrame(animateScroll);
    };

    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(animateScroll);
    }, 1000);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      lastScrollPosition = container.scrollTop;
      animationId = requestAnimationFrame(animateScroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleMouseEnter);
    container.addEventListener("touchend", handleMouseLeave);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleMouseEnter);
      container.removeEventListener("touchend", handleMouseLeave);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight text-center">
          <span className="relative z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            Customer Testimonials
          </span>
        </h1>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 via-blue-50 to-transparent z-10 pointer-events-none" />

          <div
            ref={containerRef}
            className={`columns-1 ${
              isMobile ? "" : "md:columns-2 lg:columns-3"
            } gap-6 p-4 h-[70vh] max-h-[600px] overflow-y-auto scroll-smooth`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="animate-fade-in mb-6 break-inside-avoid"
              >
                <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      alt={`${testimonial.name}'s avatar`}
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="relative">
                    <span className="absolute -left-2 -top-2 text-3xl text-gray-300">
                      "
                    </span>
                    <p className="text-gray-700 italic pl-4">
                      {testimonial.content}
                    </p>
                    <span className="absolute -right-2 -bottom-2 text-3xl text-gray-300">
                      "
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
