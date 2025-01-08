import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Demo = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">See it in Action</h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch how our platform simplifies your workflow
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-100 relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Product demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                <Button size="lg" className="gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};