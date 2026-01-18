export default function TrustCompliance() {
  return (
    <div className="w-full">
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Trust & Compliance</h1>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Commitment to Trust
            </h2>
            <p className="text-gray-700 mb-4">
              Feecom Electronics & Exchange is committed to maintaining the highest standards of integrity, 
              transparency, and ethical business practices. We believe trust is the foundation of all lasting 
              business relationships.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Compliance Standards
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>FDA and regulatory compliance for applicable products</li>
              <li>Export control regulations and international trade compliance</li>
              <li>Environmental protection standards and recycling initiatives</li>
              <li>Data privacy and security best practices</li>
              <li>Industry certifications and quality assurance</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Quality Assurance
            </h2>
            <p className="text-gray-700 mb-4">
              All products are thoroughly tested and inspected before shipment. We stand behind every item 
              with our satisfaction guarantee.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              Your information is protected with industry-standard encryption and security protocols. 
              We never share customer data with third parties without explicit consent.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-gray-700">
              For specific compliance questions or certifications, please <a href="/contact" className="text-blue-600 font-semibold hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
