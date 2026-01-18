"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { FormEvent, useState } from "react";

const contactInfo = [
  {
    title: "Website",
    value: "feecomelectronics.com",
    href: "https://feecomelectronics.com",
    icon: "🌐",
  },
  {
    title: "Email",
    value: "contact@feecomelectronics.com",
    href: "mailto:contact@feecomelectronics.com",
    icon: "✉️",
  },
  {
    title: "Phone",
    value: "469-547-7428",
    href: "tel:+14695477428",
    icon: "📞",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition";

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-deep to-steel py-16 px-4">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Have questions about our products or services? Get in touch with our team.
          </p>
        </Container>
      </section>

      <section className="py-20 px-4">
        <Container size="narrow">
          <SectionHeading
            title="Send Us a Message"
            subtitle="We&apos;ll get back to you as soon as possible"
          />

          {submitted && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          <Card padding="lg" className="mb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/70 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="How can we help you?"
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info Cards */}
          <SectionHeading
            title="Other Ways to Reach Us"
            subtitle="Connect with us directly"
          />

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.title === "Website" ? "_blank" : undefined}
                rel={info.title === "Website" ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card padding="md" hover className="text-center h-full">
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-primary hover:underline">{info.value}</p>
                </Card>
              </a>
            ))}
          </div>

          {/* Mailto Fallback */}
          <Card padding="lg" className="text-center bg-gradient-to-r from-deep/50 to-steel/50">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Prefer Email?
            </h2>
            <p className="text-white/70 mb-4">
              Send us a message directly from your email client.
            </p>
            <a href="mailto:contact@feecomelectronics.com?subject=Inquiry%20from%20Website">
              <Button variant="outline">
                Open Email Client
              </Button>
            </a>
          </Card>
        </Container>
      </section>
    </div>
  );
}
