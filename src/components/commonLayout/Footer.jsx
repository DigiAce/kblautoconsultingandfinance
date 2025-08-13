import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    // Update copyright year
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 lg:py-32 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Logo/Name section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/img/logo-main.png"
                alt=""
                className="w-28 h-20 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for financial solutions and consulting
              services.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicespage/AuctionChit"
                  className="text-gray-300 hover:text-white transition"
                >
                  Auction Chit Fund
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/DailyFinance"
                  className="text-gray-300 hover:text-white transition"
                >
                  Daily Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/WeeklyFinance"
                  className="text-gray-300 hover:text-white transition"
                >
                  Weekly Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/PersonalLoans"
                  className="text-gray-300 hover:text-white transition"
                >
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/MortgageLoans"
                  className="text-gray-300 hover:text-white transition"
                >
                  Mortgage Loans
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/VehicleFinance"
                  className="text-gray-300 hover:text-white transition"
                >
                  Vehicle Finance
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/AutoCarRental"
                  className="text-gray-300 hover:text-white transition"
                >
                  Auto Car Rental
                </Link>
              </li>
              <li>
                <Link
                  to="/servicespage/KulukkalChit"
                  className="text-gray-300 hover:text-white transition"
                >
                  Kulukkal Chit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <a
                    href="mailto:kblautoconsulting2702@gmail.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    kblautoconsulting2702@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <a
                    href="tel:+919876543210"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +91 87783 82253
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-300">
                    # 7/297, Pandiyan Nagar Nanmangalam Chennai - 600129
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; <span id="year"></span>
            <b className="text-blue-400 font-bold">
              {" "}
              KBL Consulting & Finance{" "}
            </b>
            . All rights reserved.
            <span className="block md:inline">
              {" "}
              Powered by
              <a
                href="https://www.digiace.in/"
                className="text-blue-400 font-bold"
              >
                {" "}
                DigiAce
              </a>
            </span>
          </p>

          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
