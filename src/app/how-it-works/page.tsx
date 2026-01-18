import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Feecom Electronics operates as a digital-first marketplace. We acquire inventory from verified suppliers, perform quality checks, and distribute nationwide.",
};

const steps = [
  {
    number: 1,
    title: "We Source Quality Inventory",
    description: "We acquire inventory from verified suppliers and individual sellers through trusted channels. Every source is vetted for reliability and product authenticity.",
  },
  {
    number: 2,
    title: "Quality Checks & Refurbishment",
    description: "All devices undergo thorough inspection and testing. Products that need it receive professional refurbishment to ensure they meet our quality standards.",
  },
  {
    number: 3,
    title: "List & Price Competitively",
    description: "Products are listed on our online storefront and partner platforms with transparent pricing. Our low-overhead model means better prices for you.",
  },
  {
    number: 4,
    title: "Secure Transaction Processing",
    description: "Checkout is simple and secure. We support multiple payment methods with encryption and fraud protection on every transaction.",
  },
  {
    number: 5,
    title: "Fast Fulfillment & Shipping",
    description: "Orders are processed quickly and shipped via trusted carriers with tracking. Nationwide delivery with insurance options available.",
  },
  {
    number: 6,
    title: "Customer Support & Satisfaction",
    description: "Our team is here to help with questions, returns, or issues. We stand behind every sale with responsive customer service.",
  },
];

const highlights = [
  { title: "Digital-First", description: "Online marketplace and dealer model for efficiency" },
  { title: "Verified Suppliers", description: "Trusted sourcing from vetted channels" },
  { title: "Quality Assured", description: "Every product tested before sale" },
  { title: "Competitive Pricing", description: "Low overhead means better prices" },
  { title: "Nationwide Shipping", description: "Fast delivery across the country" },
];

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel py-16 px-4">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Feecom Electronics & Exchange operates as a digital-first marketplace and dealer. Our streamlined process allows fast turnaround, competitive pricing, and nationwide shipping.
          </p>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="From sourcing to delivery, here's how we work"
          />

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/[0.08] transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container>
          <SectionHeading
            title="Why Our Model Works"
            subtitle="Built for efficiency, transparency, and customer satisfaction"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((item) => (
              <Card key={item.title} padding="md" className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Container size="narrow">
          <Card padding="lg" className="text-center bg-gradient-to-r from-deep/50 to-steel/50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-white/70 mb-6">
              Whether you&apos;re buying, selling, or looking for bulk deals, we&apos;re here to help.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us Today
              </Button>
            </Link>
          </Card>
        </Container>
      </section>
    </div>
  );
}
