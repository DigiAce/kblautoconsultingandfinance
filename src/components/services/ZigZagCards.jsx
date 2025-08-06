import { cards } from "../../data";
import {
  ArrowRight,
  ExternalLink,
  CreditCard,
  Car,
  PiggyBank,
  FileCheck,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

const getServiceIcon = (index) => {
  const icons = [CreditCard, Car, PiggyBank, FileCheck, Shield];
  const IconComponent = icons[index % icons.length];
  return <IconComponent className="w-6 h-6 text-blue-600" />;
};

const ZigZagCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
      <div className="space-y-16 md:space-y-24 lg:space-y-32">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative"
          >
            {/* Card Container */}
            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Content Layout */}
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } min-h-[400px] md:min-h-[500px]`}
              >
                {/* Image Section */}
                <div className="lg:w-2/5 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <motion.img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 w-full p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center relative z-20">
                  {/* Card number indicator */}
                  <motion.div
                    className="absolute top-4 left-4 lg:top-8 lg:left-8 text-6xl md:text-7xl font-bold text-slate-100 group-hover:text-blue-50 transition-colors duration-500"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div className="relative z-10 pt-8 lg:pt-0">
                    {/* Service Icon */}
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        {getServiceIcon(index)}
                      </div>
                    </motion.div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                      <a
                        href={card.link}
                        className="inline-block group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {card.title}
                      </a>
                    </h2>

                    <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                      {card.description}
                    </p>

                    {/* Call to action */}
                    <div className="flex items-center">
                      <motion.a
                        href={card.link}
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group/link shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative line connector */}
            {index < cards.length - 1 && (
              <div className="flex justify-center mt-12 md:mt-16">
                <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZigZagCards;
