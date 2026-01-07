"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Wire up to actual email service
    // For now, just simulate a successful submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!mounted) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="h-64 bg-brand-gray/20 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg bg-brand-gray text-white border border-gray-600 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg bg-brand-gray text-white border border-gray-600 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-lg bg-brand-gray text-white border border-gray-600 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-300 mb-2">
            Property Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            autoComplete="street-address"
            className="w-full px-4 py-3 rounded-lg bg-brand-gray text-white border border-gray-600 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-brand-gray text-white border border-gray-600 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brand-green hover:bg-green-600 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-brand-green text-center font-semibold">
          Thank you! We'll get back to you soon.
        </p>
      )}
    </form>
  );
}
