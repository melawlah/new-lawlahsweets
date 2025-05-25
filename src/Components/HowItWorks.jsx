// src/components/HowItWorks.jsx
import {
  FaCookieBite,
  FaPaintBrush,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCookieBite className="text-4xl text-deepPink mb-4" />,
      title: "Browse Our Sweet Creations",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-deepPink mb-4" />,
      title: "Select Design, Flavour, Size & Color",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-deepPink mb-4" />,
      title: "Make Payment & Receive Confirmation",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-deepPink mb-4" />,
      title: "Order Confirmation Received",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-snug mb-12">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
            >
              {/* Step Icon */}
              {step.icon}

              {/* Step Title */}
              <p className="text-sm md:text-md text-black font-medium leading-relaxed">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Design CTA Section */}
        <div className="bg-lightPink/60 py-12 px-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Want a Custom Design?
          </h3>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Have a unique idea in mind? Let us create a one-of-a-kind masterpiece just for you. Reach out and we’ll make it happen!
          </p>
          <a
            href="#contact"
            className="inline-block bg-deepPink text-white py-2 px-8 rounded-full text-sm font-semibold shadow-md hover:bg-white hover:border-1 hover:border-deepPink hover:text-deepPink transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
