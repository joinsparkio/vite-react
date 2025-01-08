import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Percent } from "lucide-react";

export const Offer = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-primary text-primary-foreground p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
              <Percent className="w-8 h-8" />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              Special Launch Offer
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Get 50% off your first 3 months when you sign up today
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary">
                Claim Offer Now
              </Button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Limited time offer. Terms apply.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};