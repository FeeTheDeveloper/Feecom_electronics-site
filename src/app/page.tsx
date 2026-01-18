export default function Home() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Feecom Electronics & Exchange
          </h1>
          <p className="text-xl mb-8">
            Your trusted partner for electronics trading and services
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Electronics Trading</h3>
            <p className="text-gray-600">
              Quality electronics and components for businesses and individuals
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Exchange Services</h3>
            <p className="text-gray-600">
              Trade in your old electronics for new ones with fair pricing
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
            <p className="text-gray-600">
              Expert advice and support for all your electronics needs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
