import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Auction Chit Fund", href: "/servicespage/AuctionChit" },
    { name: "Daily Finance", href: "/servicespage/DailyFinance" },
    { name: "Weekly Finance", href: "/servicespage/WeeklyFinance" },
    { name: "Personal Loans", href: "/servicespage/PersonalLoans" },
    { name: "Mortgage Loans", href: "/servicespage/MortgageLoans" },
    { name: "Vehicle Finance", href: "/servicespage/VehicleFinance" },
    { name: "Auto Car Rental", href: "/servicespage/AutoCarRental" },
    { name: "Kulukkal Chit", href: "/servicespage/KulukkalChit" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", dropdown: services },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 97102 28721</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kblautoconsulting2702@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span># 7/297, Pandiyan Nagar Nanmangalam Chennai - 600129</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-yellow-400">★★★★★</span>
            <span>Trusted by 2,000+ customers</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-blue-900 shadow-lg"
            : "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"
        }`}
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <img
                    src="/img/kbl-logo.png"
                    alt="KBL Finance Logo"
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.dropdown ? (
                    <button
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 hover:bg-white/10"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-white hover:text-blue-200 hover:bg-white/10"
                    >
                      <span>{link.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <Link
                to="https://wa.link/27fkl0"
                target="_blank"
                className="hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Get Started</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-blue-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue-700 bg-blue-800">
            <div className="flex items-center space-x-3">
              <img
                src="/img/kbl-logo.png"
                alt="KBL Finance Logo"
                className="w-24 h-24 object-contain"
              />
              <div>
                <h2 className="text-white font-bold text-lg">KBL Finance</h2>
                <p className="text-blue-200 text-sm">Your Financial Partner</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-blue-200 hover:bg-blue-700 rounded-lg transition-all duration-200 font-medium">
                    {link.dropdown ? (
                      <div
                        className="flex-1"
                        onClick={() => toggleDropdown(index)}
                      >
                        {link.name}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex-1"
                      >
                        {link.name}
                      </Link>
                    )}
                    {link.dropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(index);
                        }}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="ml-4 mt-1 mb-2 space-y-1 animate-fade-in">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-600 rounded-lg transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-blue-700">
              <Link
                to="https://wa.link/27fkl0"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-6 p-4 bg-blue-800 rounded-lg">
              <h3 className="font-semibold text-white mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 87783 82253</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>kblautoconsulting2702@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    # 7/297, Pandiyan Nagar Nanmangalam Chennai 600129
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
