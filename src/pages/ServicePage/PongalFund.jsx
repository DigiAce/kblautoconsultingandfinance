import {
  CalendarDays,
  Users,
  Wheat,
  Briefcase,
  CheckCircle,
  ShieldCheck,
  PiggyBank,
  Wallet,
} from "lucide-react";

export default function PongalFund() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2 text-sm mb-6">
            🪔 Pongal Fund
          </span>

          <h1 className="text-5xl font-bold mb-5">
            Celebrate Pongal Without Financial Stress
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-blue-100 mb-14">
            Plan your Pongal celebrations with confidence through our flexible
            Pongal Savings Fund. Save small amounts regularly and receive a lump
            sum before the festival for shopping, gifts and family expenses.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <PiggyBank className="text-green-600" />
              </div>

              <h3 className="font-bold text-xl mb-4">
                Start Saving
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Savings</span>
                  <span>₹500+</span>
                </div>

                <div className="flex justify-between">
                  <span>Flexible Plans</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between font-semibold text-green-600">
                  <span>Pongal Payout</span>
                  <span>Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
                <CalendarDays className="text-blue-600" />
              </div>

              <h3 className="font-bold text-xl mb-4">
                Flexible Contributions
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Plans</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between">
                  <span>Easy Enrollment</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between font-semibold text-blue-600">
                  <span>Safe Savings</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-5">
                <Wallet className="text-purple-600" />
              </div>

              <h3 className="font-bold text-xl mb-4">
                Festival Ready
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Payout Before Pongal</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between">
                  <span>Quick Settlement</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between font-semibold text-purple-600">
                  <span>Trusted Savings</span>
                  <span>Secure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">
              Perfect For Everyone
            </h2>

            <p className="text-gray-600">
              A savings solution designed to help you celebrate Pongal with peace
              of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Families */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-5">
                <Users className="text-green-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Families
              </h3>

              <p className="text-gray-600 mb-5">
                Perfect for household Pongal celebrations.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Festival shopping</li>
                <li>✔ Grocery expenses</li>
                <li>✔ New clothes</li>
                <li>✔ Home decoration</li>
              </ul>
            </div>

            {/* Farmers */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <Wheat className="text-blue-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Farmers
              </h3>

              <p className="text-gray-600 mb-5">
                Designed especially for farmers and agricultural families.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Harvest season support</li>
                <li>✔ Festival expenses</li>
                <li>✔ Flexible savings</li>
                <li>✔ Quick settlement</li>
              </ul>
            </div>

            {/* Employees */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
                <Briefcase className="text-purple-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Employees
              </h3>

              <p className="text-gray-600 mb-5">
                Best for salaried individuals planning ahead.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Monthly savings</li>
                <li>✔ Secure investment</li>
                <li>✔ Festival budgeting</li>
                <li>✔ Easy withdrawals</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose + Features */}
      <section className="py-20 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Pongal Fund?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">

              {[
                "Guaranteed savings before Pongal",
                "Flexible monthly contributions",
                "Easy enrollment process",
                "Timely fund disbursement",
                "Safe and reliable savings",
                "Perfect for family expenses",
                "No financial burden",
                "Trusted by hundreds",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mt-1"
                  />
                  <span>{item}</span>
                </div>
              ))}

            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Pongal Fund Features
            </h3>

            <div className="space-y-4">

              {[
                "Savings starting from affordable amounts",
                "Flexible contribution options",
                "Secure fund management",
                "Timely payout before Pongal",
                "Simple documentation",
                "Friendly customer support",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex gap-3 items-center border rounded-lg p-3"
                >
                  <ShieldCheck
                    size={18}
                    className="text-green-500"
                  />
                  <span>{feature}</span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-5">
            Start Saving For Pongal Today
          </h2>

          <p className="text-gray-600 mb-8">
            Begin your Pongal Savings Fund today and celebrate the festival
            without financial worries.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition">
            Join Pongal Fund
          </button>

        </div>
      </section>

    </div>
  );
}
