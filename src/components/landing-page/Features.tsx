import { Check } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Feature 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Feature 2",
      description: "Suspendisse varius enim in eros elementum tristique."
    },
    {
      title: "Feature 3",
      description: "Duis cursus, mi quis viverra ornare, eros dolor."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to get started
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};