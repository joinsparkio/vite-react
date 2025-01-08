export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by thousands of users worldwide
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">User Name</h4>
                  <p className="text-sm text-gray-600">Company</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};