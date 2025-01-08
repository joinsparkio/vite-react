import { Card } from "@/components/ui/card";

export const SocialProof = () => {
  const companies = [
    "Company 1",
    "Company 2",
    "Company 3",
    "Company 4",
    "Company 5",
    "Company 6",
  ];

  return (
    <section className="py-12 border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};