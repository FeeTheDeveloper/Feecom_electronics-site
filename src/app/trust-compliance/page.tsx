import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & Compliance",
  description: "Feecom Electronics operates with strict adherence to business compliance, secure handling of electronics, and transparent customer transactions.",
};

const businessReadiness = [
  { title: "EIN Established", description: "Fully registered and tax compliant" },
  { title: "Business Bank Account", description: "Secured for transparent transactions" },
  { title: "Domain & Branded Email", description: "Professional communication channels" },
  { title: "E-Commerce Ready", description: "Structured for online scale" },
  { title: "Logistics Ready", description: "Shipping and fulfillment in place" },
];

export default function TrustCompliance() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel py-16 px-4">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trust & Compliance</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Operating with integrity, transparency, and accountability in every transaction.
          </p>
        </Container>
      </section>

      {/* Main Compliance Section */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeading
            title="Our Commitment"
            subtitle="Building trust through transparent business practices"
          />

          <Card padding="lg" className="mb-8">
            <p className="text-white/80 text-lg leading-relaxed">
              Feecom Electronics & Exchange LLC operates with strict adherence to business compliance, secure handling of electronics, and transparent customer transactions. All inventory sourcing and sales are documented to support financial accountability and customer trust.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card padding="lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Secure Transactions
              </h2>
              <p className="text-white/70 mb-4">
                Every purchase is protected with secure payment processing. We use industry-standard encryption and fraud protection to ensure your information stays safe.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Encrypted payment processing</li>
                <li>Fraud detection and prevention</li>
                <li>Transparent pricing with no hidden fees</li>
                <li>Clear refund and return policies</li>
              </ul>
            </Card>

            <Card padding="lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                Documented Sourcing
              </h2>
              <p className="text-white/70 mb-4">
                All inventory is acquired through verified channels with full documentation. We maintain records for accountability and can verify the origin of our products.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Verified supplier relationships</li>
                <li>Product authenticity checks</li>
                <li>Complete transaction records</li>
                <li>Quality inspection documentation</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Business Readiness */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container>
          <SectionHeading
            title="Business Readiness"
            subtitle="Structured and compliant for professional operations"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {businessReadiness.map((item) => (
              <Card key={item.title} padding="md" className="text-center">
                <div className="text-2xl mb-2">✓</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer Trust */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeading
            title="Customer Trust"
            subtitle="Your satisfaction and security are our priority"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <Card padding="lg" hover>
              <h3 className="text-xl font-semibold mb-3 text-white">Quality Guarantee</h3>
              <p className="text-white/70">
                Every product is tested and inspected before shipping. We stand behind the quality of our inventory.
              </p>
            </Card>
            <Card padding="lg" hover>
              <h3 className="text-xl font-semibold mb-3 text-white">Responsive Support</h3>
              <p className="text-white/70">
                Questions or concerns? Our team responds promptly to help resolve any issues.
              </p>
            </Card>
            <Card padding="lg" hover>
              <h3 className="text-xl font-semibold mb-3 text-white">Clear Policies</h3>
              <p className="text-white/70">
                Transparent return, refund, and exchange policies. No surprises, no fine print.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Container size="narrow">
          <Card padding="lg" className="text-center bg-gradient-to-r from-deep/50 to-steel/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Questions About Our Practices?
            </h2>
            <p className="text-white/70 mb-6">
              We&apos;re happy to discuss our compliance standards and business practices.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </Card>
        </Container>
      </section>
    </div>
  );
}
