import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl py-12 px-6 md:py-16 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Join thousands of satisfied users today
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};