import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const services = [
  {
    title: "Buying & Reselling Smartphones",
    description:
      "Quality certified smartphones from trusted suppliers, available for individual and bulk purchases.",
  },
  {
    title: "Tablets & Mobile Computing",
    description:
      "Wide selection of tablets and mobile computing devices for personal and business use.",
  },
  {
    title: "Consumer Electronics & Accessories",
    description:
      "Comprehensive accessories and consumer electronics to complement your devices.",
  },
  {
    title: "Wholesale & Bulk Purchasing",
    description:
      "Competitive pricing for resellers, businesses, and high-volume buyers.",
  },
  {
    title: "Online Direct-to-Consumer Sales",
    description:
      "Shop directly from our online storefront with secure checkout and fast shipping.",
  },
  {
    title: "Secure Shipping & Fulfillment",
    description:
      "Reliable logistics and nationwide delivery with tracking and insurance options.",
  },
];

const whyFeecom = [
  {
    title: "Online-First Operations",
    description: "Low overhead means better prices for you",
  },
  {
    title: "Secure Transactions",
    description: "Safe payment and handling on every order",
  },
  {
    title: "Scalable Inventory",
    description: "From single units to bulk orders",
  },
  {
    title: "Fast Fulfillment",
    description: "Quick processing and nationwide shipping",
  },
  {
    title: "Customer-Focused",
    description: "Dedicated support and exchange experience",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-bg px-4 md:min-h-[80vh]">
        {/* Animated blurred blobs */}
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-pulse-slow rounded-full bg-neonPurple opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 animate-pulse-slow rounded-full bg-neonPink opacity-40 blur-3xl" />
        {/* Hero background image */}
        <Image
          src="/assets/hero-bg.png"
          alt="Futuristic background"
          fill
          className="absolute inset-0 -z-10 object-cover opacity-30"
        />
        <div className="flex flex-col items-center text-center">
          {/* Logo Container - Responsive sizing */}
          <div className="mb-8 w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px]">
            <Image
              src="/assets/feecom-logo.svg"
              alt="Feecom Electronics & Exchange - Online Buyer, Seller & Distributor of Mobile Devices"
              width={480}
              height={120}
              priority
              className="h-auto w-full"
            />
          </div>

          {/* Headline */}
          <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/90 md:text-xl lg:text-2xl">
            Online Buyer, Seller &amp; Distributor of Mobile Devices and
            Electronics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
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
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Who We Are"
            subtitle="Your trusted partner in electronics trading"
          />
          <Card padding="lg" className="text-center">
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-white/80">
              Feecom Electronics & Exchange LLC is an online-based electronics
              buyer and dealer specializing in cell phones, tablets, and
              consumer electronic accessories. We source, purchase, refurbish,
              and resell devices through secure logistics and trusted supplier
              channels, serving both individual and bulk buyers nationwide.
            </p>
          </Card>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-white/[0.02] px-4 py-20">
        <Container>
          <SectionHeading
            title="Products & Services"
            subtitle="Comprehensive electronics solutions for every need"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                hover
                className="hover:scale-[1.03] hover:shadow-neonPink/30"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products-services">
              <Button variant="subtle">Learn More About Our Services</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Feecom Section */}
      <section className="px-4 py-20">
        <Container>
          <SectionHeading
            title="Why Choose Feecom"
            subtitle="Built for speed, security, and scale"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whyFeecom.map((item) => (
              <Card
                key={item.title}
                padding="md"
                className="text-center hover:scale-[1.03] hover:shadow-neonPurple/30"
              >
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
      <section className="bg-gradient-to-r from-deep via-steel to-primary px-4 py-20">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Contact us today for pricing, inventory inquiries, or partnership
              opportunities.
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
