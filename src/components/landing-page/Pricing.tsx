import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      features: ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      name: "Pro",
      price: "$29",
      features: ["Everything in Basic", "Feature 4", "Feature 5", "Feature 6"]
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Everything in Pro", "Feature 7", "Feature 8", "Feature 9"]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Simple Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works best for you
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">Get Started</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};