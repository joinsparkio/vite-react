import { Check } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Describe feature one",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      benefits: [
        "Benefit one of this feature",
        "Benefit two of this feature",
        "Benefit three of this feature"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Describe feature two",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      benefits: [
        "Benefit one of this feature",
        "Benefit two of this feature",
        "Benefit three of this feature"
      ],
      image: "/placeholder.svg"
    },
    {
      title: "Describe feature three",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      benefits: [
        "Benefit one of this feature",
        "Benefit two of this feature",
        "Benefit three of this feature"
      ],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index !== features.length - 1 ? "mb-24" : ""
            } ${
              index % 2 === 1 ? "md:grid-flow-col-dense" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-gray-100 rounded-lg aspect-square flex items-center justify-center ${
              index % 2 === 1 ? "md:col-start-1" : ""
            }`}>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};