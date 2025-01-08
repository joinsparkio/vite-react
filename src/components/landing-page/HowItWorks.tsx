export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in minutes"
    },
    {
      number: "02",
      title: "Configure",
      description: "Set up your preferences and settings"
    },
    {
      number: "03",
      title: "Get Started",
      description: "Begin using the platform immediately"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get started in three simple steps
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-4xl font-bold text-gray-200">{step.number}</div>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};