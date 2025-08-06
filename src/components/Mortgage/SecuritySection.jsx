import { Shield } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <Shield className="w-8 h-8 text-blue-800" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Your Assets, Our Security Promise
        </h2>
        <p className="text-xl text-black mb-8">
          We ensure complete security of your documents with legal compliance
          and transparent processes. Your assets remain in your possession while
          you access the funds you need.
        </p>
      </div>
    </section>
  );
};

export default SecuritySection;
