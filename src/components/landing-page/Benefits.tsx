import { CheckCircle, Award, ThumbsUp, Rocket } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Easy to Use",
      description: "Get started in minutes with our intuitive interface"
    },
    {
      icon: Award,
      title: "Best in Class",
      description: "Industry-leading features and performance"
    },
    {
      icon: ThumbsUp,
      title: "Reliable",
      description: "99.9% uptime guarantee for peace of mind"
    },
    {
      icon: Rocket,
      title: "Scalable",
      description: "Grows with your business needs"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Benefits that set us apart
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};