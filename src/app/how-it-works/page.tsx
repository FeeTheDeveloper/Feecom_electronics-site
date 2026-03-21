import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Feecom Electronics operates as a digital-first marketplace. We acquire inventory from verified suppliers, perform quality checks, and distribute nationwide.",
};

const steps = [
  {
    number: 1,
    title: "We Source Quality Inventory",
    description:
      "We acquire inventory from verified suppliers and individual sellers through trusted channels. Every source is vetted for reliability and product authenticity.",
  },
  {
    number: 2,
    title: "Quality Checks & Refurbishment",
    description:
      "All devices undergo thorough inspection and testing. Products that need it receive professional refurbishment to ensure they meet our quality standards.",
  },
  {
    number: 3,
    title: "List & Price Competitively",
    description:
      "Products are listed on our online storefront and partner platforms with transparent pricing. Our low-overhead model means better prices for you.",
  },
  {
    number: 4,
    title: "Secure Transaction Processing",
    description:
      "Checkout is simple and secure. We support multiple payment methods with encryption and fraud protection on every transaction.",
  },
  {
    number: 5,
    title: "Fast Fulfillment & Shipping",
    description:
      "Orders are processed quickly and shipped via trusted carriers with tracking. Nationwide delivery with insurance options available.",
  },
  {
    number: 6,
    title: "Customer Support & Satisfaction",
    description:
      "Our team is here to help with questions, returns, or issues. We stand behind every sale with responsive customer service.",
  },
];

const highlights = [
  {
    title: "Digital-First",
    description: "Online marketplace and dealer model for efficiency",
  },
  {
    title: "Verified Suppliers",
    description: "Trusted sourcing from vetted channels",
  },
  { title: "Quality Assured", description: "Every product tested before sale" },
  {
    title: "Competitive Pricing",
    description: "Low overhead means better prices",
  },
  {
    title: "Nationwide Shipping",
    description: "Fast delivery across the country",
  },
];

export default function HowItWorks() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel px-4 py-16">
        <Container>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            How It Works
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Feecom Electronics & Exchange operates as a digital-first
            marketplace and dealer. Our streamlined process allows fast
            turnaround, competitive pricing, and nationwide shipping.
          </p>
        </Container>
      </section>

      {/* Process Steps */}
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="From sourcing to delivery, here's how we work"
          />

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 rounded-lg border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
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
      <section className="bg-white/[0.02] px-4 py-20">
        <Container>
          <SectionHeading
            title="Why Our Model Works"
            subtitle="Built for efficiency, transparency, and customer satisfaction"
          />
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {highlights.map((item) => (
              <Card key={item.title} padding="md" className="text-center">
                <h3 className="mb-2 text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <Container size="narrow">
          <Card
            padding="lg"
            className="bg-gradient-to-r from-deep/50 to-steel/50 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ready to Work With Us?
            </h2>
            <p className="mb-6 text-white/70">
              Whether you&apos;re buying, selling, or looking for bulk deals,
              we&apos;re here to help.
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
