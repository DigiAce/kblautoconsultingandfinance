import {
  CalendarDays,
  Users,
  Briefcase,
  PiggyBank,
  ShieldCheck,
  Wallet,
  CheckCircle,
  User,
} from "lucide-react";

export default function SavingsSchemes() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2 text-sm mb-6">
            💰 Savings Schemes
          </span>

          <h1 className="text-5xl font-bold mb-5">
            Build Your Future with Smart Savings
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-blue-100 mb-14">
            Our Savings Schemes are designed to help individuals and families
            achieve their financial goals through disciplined and secure savings
            plans.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <PiggyBank className="text-green-600" />
              </div>

              <h3 className="font-bold text-xl mb-4">Start Saving</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Flexible Plans</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between">
                  <span>Regular Savings</span>
                  <span>Weekly / Monthly</span>
                </div>

                <div className="flex justify-between font-semibold text-green-600">
                  <span>Secure Growth</span>
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
                  <span>Weekly Plans</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between">
                  <span>Monthly Plans</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between font-semibold text-blue-600">
                  <span>Transparent</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-xl p-7 text-gray-800">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-5">
                <Wallet className="text-purple-600" />
              </div>

              <h3 className="font-bold text-xl mb-4">Goal-Based Savings</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Secure Deposits</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between">
                  <span>Easy Enrollment</span>
                  <span>✔</span>
                </div>

                <div className="flex justify-between font-semibold text-purple-600">
                  <span>Trusted Partner</span>
                  <span>Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Suitable For</h2>

            <p className="text-gray-600">
              Smart savings plans tailored for individuals, families and small
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Individuals */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-5">
                <User className="text-green-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Individuals</h3>

              <p className="text-gray-600 mb-5">
                Build financial stability through disciplined savings.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Personal savings</li>
                <li>✔ Emergency fund</li>
                <li>✔ Future planning</li>
                <li>✔ Financial security</li>
              </ul>
            </div>

            {/* Families */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                <Users className="text-blue-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">Families</h3>

              <p className="text-gray-600 mb-5">
                Plan for your family's future with confidence.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Children's education</li>
                <li>✔ Marriage savings</li>
                <li>✔ Household planning</li>
                <li>✔ Long-term wealth</li>
              </ul>
            </div>

            {/* Business */}
            <div className="rounded-xl border shadow-sm p-7">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
                <Briefcase className="text-purple-600" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                Small Business Owners
              </h3>

              <p className="text-gray-600 mb-5">
                Strengthen your business with planned financial reserves.
              </p>

              <ul className="space-y-2 text-sm">
                <li>✔ Business reserve</li>
                <li>✔ Future expansion</li>
                <li>✔ Emergency backup</li>
                <li>✔ Better financial management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Savings Schemes?
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                "Flexible savings plans",
                "Safe & secure deposits",
                "Regular contribution options",
                "Goal-based savings",
                "Easy enrollment",
                "Transparent process",
                "Trusted financial partner",
                "Excellent customer support",
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

          {/* Features */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">
              Savings Scheme Features
            </h3>

            <div className="space-y-4">
              {[
                "Flexible savings amounts",
                "Weekly & Monthly options",
                "Secure fund management",
                "Easy documentation",
                "Quick account opening",
                "Trusted service",
                "Transparent process",
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
            Start Your Savings Journey Today
          </h2>

          <p className="text-gray-600 mb-8">
            Choose a savings plan that fits your goals and secure your future
            with flexible, transparent and reliable savings schemes.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition">
            Join Savings Scheme
          </button>
        </div>
      </section>
    </div>
  );
}
