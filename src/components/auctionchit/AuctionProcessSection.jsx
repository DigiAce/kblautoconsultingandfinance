import React from "react";

const AuctionProcessSection = () => {
  const auctionProcess = [
    {
      step: "1",
      title: "Monthly Meeting",
      description: "All members gather for the monthly auction meeting",
    },
    {
      step: "2",
      title: "Bidding Process",
      description: "Members bid for the chit amount with their discount offers",
    },
    {
      step: "3",
      title: "Winner Selection",
      description: "Highest bidder wins the chit amount for that month",
    },
    {
      step: "4",
      title: "Amount Distribution",
      description: "Winner receives the chit amount minus the winning bid",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How Our Auction Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our transparent auction process ensures fairness and gives every
            member an equal opportunity to benefit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {auctionProcess.map((process, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {process.step}
                  </span>
                </div>
                {index < auctionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionProcessSection;
