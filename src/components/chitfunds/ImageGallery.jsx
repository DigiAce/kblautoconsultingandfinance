import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Camera, ExternalLink, ZoomIn } from "lucide-react";

const ImageGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "/img/chit1.jpeg",
      alt: "KBL Financial Services Office",
      category: "Office",
    },
    {
      id: 2,
      src: "/img/chit1.jpeg",
      alt: "Team Meeting",
      category: "Team",
    },
    {
      id: 3,
      src: "/img/chit1.jpeg",
      alt: "Financial Planning",
      category: "Services",
    },
    {
      id: 4,
      src: "/img/chit1.jpeg",
      alt: "Vehicle Finance",
      category: "Services",
    },
    {
      id: 5,
      src: "/img/chit1.jpeg",
      alt: "Customer Service",
      category: "Services",
    },
    {
      id: 6,
      src: "/img/chit1.jpeg",
      alt: "Documentation Process",
      category: "Process",
    },
    {
      id: 7,
      src: "/img/chit1.jpeg",
      alt: "Award Ceremony",
      category: "Awards",
    },
    {
      id: 8,
      src: "/img/chit1.jpeg",
      alt: "Happy Customers",
      category: "Customers",
    },
    {
      id: 9,
      src: "/img/chit1.jpeg",
      alt: "Loan Approval",
      category: "Services",
    },
    {
      id: 10,
      src: "/img/chit1.jpeg",
      alt: "Business Growth",
      category: "Success",
    },
    {
      id: 11,
      src: "/img/chit1.jpeg",
      alt: "Financial Consultation",
      category: "Services",
    },
    {
      id: 12,
      src: "/img/chit1.jpeg",
      alt: "Community Impact",
      category: "Impact",
    },
  ];

  const categories = [
    "All",
    "Office",
    "Team",
    "Services",
    "Process",
    "Awards",
    "Customers",
    "Success",
    "Impact",
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20" ref={ref}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-3 mb-6">
            <Camera className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Chits</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Chit plans{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                starting from
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative" ref={galleryRef}>
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-slate-500">
                No images found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
                  style={{
                    animation: galleryInView
                      ? `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {/* Image Container - Full height without content below */}
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      onClick={() => handleImageClick(image)}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex space-x-3">
                        <button
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(image);
                          }}
                        >
                          <ZoomIn className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute top-0 right-0 m-4">
              <button
                onClick={closeModal}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

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

export default ImageGallery;
