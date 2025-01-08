import { useState } from "react";
import { Box } from "lucide-react";

export const HowItWorks = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: "Describe feature one",
      description: "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
      image: "/placeholder.svg"
    },
    {
      title: "Describe feature two",
      description: "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
      image: "/placeholder.svg"
    },
    {
      title: "Describe feature three",
      description: "Highlight Unique Selling Propositions with a short summary of the key feature and how it benefits customers.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
            <img
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-colors ${
                  selectedFeature === index ? "opacity-100" : "opacity-70 hover:opacity-90"
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <button className="text-primary font-medium mt-2 flex items-center gap-2">
                      Learn more
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};