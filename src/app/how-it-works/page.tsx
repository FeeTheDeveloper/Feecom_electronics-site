export default function HowItWorks() {
  return (
    <div className="w-full">
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">How It Works</h1>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Browse Our Catalog</h3>
                <p className="text-gray-700">
                  Explore our comprehensive selection of quality electronics and devices.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
                <p className="text-gray-700">
                  Contact us for pricing and availability. We provide competitive rates and fast turnaround.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Complete Transaction</h3>
                <p className="text-gray-700">
                  Secure payment options and transparent pricing. No hidden fees or surprises.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Receive & Support</h3>
                <p className="text-gray-700">
                  Fast shipping and full technical support. We&apos;re here to help after your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
