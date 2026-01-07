import config from "@/config.json";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-gray text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200">
            Professional lawn care and landscaping for the Treasure Valley
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-brand-dark">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/10 border-2 border-dashed border-brand-green rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-3 text-brand-dark">
              Want to add pricing or more details?
            </h3>
            <p className="text-gray-700 mb-4">
              Send me updated service descriptions with pricing (if you want to include it) and I'll add them to the site!
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand-dark">
            Proudly Serving the Treasure Valley
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {config.business.address}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {config.serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200"
              >
                <div className="flex justify-center mb-3 text-brand-green">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-brand-dark">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get a Free Estimate
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Call or contact us for pricing on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${config.business.phone.replace(/\D/g, "")}`}
              className="inline-block bg-white hover:bg-gray-100 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              {config.business.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
