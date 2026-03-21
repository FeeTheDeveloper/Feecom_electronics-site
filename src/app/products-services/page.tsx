import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Smartphones, tablets, consumer electronics, wholesale purchasing, and secure shipping. Feecom Electronics offers comprehensive solutions for individual and bulk buyers.",
};

const products = [
  {
    title: "Buying & Reselling Smartphones",
    description:
      "We acquire smartphones from verified suppliers and individual sellers, perform thorough quality checks, and offer them at competitive prices. Our inventory includes popular brands and models suitable for resale or personal use.",
    icon: "📱",
  },
  {
    title: "Tablets & Mobile Computing Devices",
    description:
      "From consumer tablets to professional mobile computing solutions, we stock a range of devices for various needs. All units are tested and verified before listing.",
    icon: "📟",
  },
  {
    title: "Consumer Electronics & Accessories",
    description:
      "Complement your devices with our selection of quality accessories including chargers, cases, cables, audio equipment, and more.",
    icon: "🎧",
  },
];

const services = [
  {
    title: "Wholesale & Bulk Electronics Purchasing",
    description:
      "Competitive pricing for resellers, retailers, and businesses looking to purchase electronics in volume. Contact us for custom quotes and inventory availability.",
    icon: "📦",
  },
  {
    title: "Online Direct-to-Consumer Sales",
    description:
      "Shop directly from our online storefront with transparent pricing, detailed product information, and secure checkout. No middlemen, no hidden fees.",
    icon: "🛒",
  },
  {
    title: "Secure Shipping & Fulfillment",
    description:
      "We handle logistics through trusted carriers with tracking, insurance options, and fast turnaround times. Nationwide delivery available on all orders.",
    icon: "🚚",
  },
];

export default function ProductsServices() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel px-4 py-16">
        <Container>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Products & Services
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Comprehensive electronics solutions for individual buyers,
            resellers, and businesses.
          </p>
        </Container>
      </section>

      {/* Products Section */}
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Our Products"
            subtitle="Quality electronics from trusted sources"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} padding="lg" hover>
                <div className="mb-4 text-4xl">{product.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {product.title}
                </h3>
                <p className="text-white/70">{product.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-white/[0.02] px-4 py-20">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="End-to-end support for your electronics needs"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} padding="lg" hover>
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
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
              Interested in Our Products or Services?
            </h2>
            <p className="mb-6 text-white/70">
              Contact us for pricing, availability, or custom bulk orders.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </Card>
        </Container>
      </section>
    </div>
  );
}
