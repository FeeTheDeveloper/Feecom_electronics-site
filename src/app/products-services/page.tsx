export default function ProductsServices() {
  return (
    <div className="w-full">
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Products & Services</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Electronics Trading
            </h2>
            <p className="text-gray-700 mb-4">
              We offer a wide range of quality electronics including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Computing devices and peripherals</li>
              <li>Mobile phones and tablets</li>
              <li>Audio and video equipment</li>
              <li>Smart home devices</li>
              <li>Industrial electronics components</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Exchange Programs
            </h2>
            <p className="text-gray-700 mb-4">
              Trade in your used electronics and receive fair market value credits toward new purchases.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Technical Services
            </h2>
            <p className="text-gray-700 mb-4">
              Professional support and consultation for electronics procurement and integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
