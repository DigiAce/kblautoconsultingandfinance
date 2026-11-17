
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);

      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you. Fill out the form below or contact us directly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left Side - Map and Contact Info */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-900 to-indigo-900 p-8 text-white relative">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90 z-10"></div>

              <div className="relative z-20">

                {/* Map Placeholder */}
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <p className="text-gray-500">
                      Google Maps Integration
                    </p>
                  </div>
                </div>

                {/* Office Addresses */}
                <div className="space-y-6">

                  {/* Head Office */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Head Office
                    </h3>

                    <p className="text-blue-200">
                      Plot No. 23, V.G.P Pon Nagar 2nd Street,
                      Sembakkam, Chennai - 600 073
                    </p>
                  </div>

                  {/* Branch 1 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Branch 1
                    </h3>

                    <p className="text-blue-200">
                      No. 7/297, Pandian Nagar, Nanmangalam,
                      Chennai - 600129
                    </p>
                  </div>

                  {/* Branch 2 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Branch 2
                    </h3>

                    <p className="text-blue-200">
                      No. 261, Velachery Main Road,
                      Rajakilpakkam, Chennai - 600073
                    </p>
                  </div>

                  {/* Branch 3 */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Branch 3
                    </h3>

                    <p className="text-blue-200">
                      No. 54, G.G Baba Complex, First Floor (F6),
                      Madambakkam Main Road, Chennai - 600 126
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Contact Info
                    </h3>

                    <p className="text-blue-200">
                      Email: kblautoconsulting2702@gmail.com
                    </p>

                    <p className="text-blue-200">
                      Phone: +91 87783 82253
                    </p>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Business Hours
                    </h3>

                    <p className="text-blue-200">
                      Monday - Friday: 9AM - 6PM
                    </p>

                    <p className="text-blue-200">
                      Saturday: 10AM - 4PM
                    </p>

                    <p className="text-blue-200">
                      Sunday: Closed
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-1/2 p-8 lg:p-12">

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a message
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-medium">
                    Thank you for your message!
                  </p>

                  <p>
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              )}

              <div className="space-y-6">

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="John Doe"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="john@example.com"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="How can we help you?"
                  ></textarea>

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>

                {/* Email Contact */}
                <div className="text-center mt-4">
                  <p className="text-gray-600">
                    Prefer email?{" "}

                    <a
                      href="mailto:kblautoconsulting2702@gmail.com"
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      kblautoconsulting2702@gmail.com
                    </a>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
