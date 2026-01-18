import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "Buying & Reselling Smartphones",
    description: "Quality certified smartphones from trusted suppliers, available for individual and bulk purchases.",
  },
  {
    title: "Tablets & Mobile Computing",
    description: "Wide selection of tablets and mobile computing devices for personal and business use.",
  },
  {
    title: "Consumer Electronics & Accessories",
    description: "Comprehensive accessories and consumer electronics to complement your devices.",
  },
  {
    title: "Wholesale & Bulk Purchasing",
    description: "Competitive pricing for resellers, businesses, and high-volume buyers.",
  },
  {
    title: "Online Direct-to-Consumer Sales",
    description: "Shop directly from our online storefront with secure checkout and fast shipping.",
  },
  {
    title: "Secure Shipping & Fulfillment",
    description: "Reliable logistics and nationwide delivery with tracking and insurance options.",
  },
];

const whyFeecom = [
  { title: "Online-First Operations", description: "Low overhead means better prices for you" },
  { title: "Secure Transactions", description: "Safe payment and handling on every order" },
  { title: "Scalable Inventory", description: "From single units to bulk orders" },
  { title: "Fast Fulfillment", description: "Quick processing and nationwide shipping" },
  { title: "Customer-Focused", description: "Dedicated support and exchange experience" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-bg px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo Container - Responsive sizing */}
          <div className="w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px] mb-8">
            <Image
              src="/assets/feecom-logo.svg"
              alt="Feecom Electronics & Exchange - Online Buyer, Seller & Distributor of Mobile Devices"
              width={480}
              height={120}
              priority
              className="w-full h-auto"
            />
          </div>
          
          {/* Headline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            Online Buyer, Seller &amp; Distributor of Mobile Devices and Electronics
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products-services">
              <Button variant="primary" size="lg">
                Products &amp; Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeading
            title="Who We Are"
            subtitle="Your trusted partner in electronics trading"
          />
          <Card padding="lg" className="text-center">
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              Feecom Electronics & Exchange LLC is an online-based electronics buyer and dealer specializing in cell phones, tablets, and consumer electronic accessories. We source, purchase, refurbish, and resell devices through secure logistics and trusted supplier channels, serving both individual and bulk buyers nationwide.
            </p>
          </Card>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <Container>
          <SectionHeading
            title="Products & Services"
            subtitle="Comprehensive electronics solutions for every need"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} hover>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products-services">
              <Button variant="subtle">Learn More About Our Services</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Feecom Section */}
      <section className="py-20 px-4">
        <Container>
          <SectionHeading
            title="Why Choose Feecom"
            subtitle="Built for speed, security, and scale"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyFeecom.map((item) => (
              <Card key={item.title} padding="md" className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-deep to-steel">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Contact us today for pricing, inventory inquiries, or partnership opportunities.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
