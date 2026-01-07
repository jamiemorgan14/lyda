import config from "@/config.json";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-gray text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            {config.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-brand-green mb-6">{config.hero.subtitle}</p>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">{config.hero.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              {config.hero.cta}
            </Link>
            <a
              href={`tel:${config.business.phone.replace(/\D/g, "")}`}
              className="inline-block bg-white hover:bg-gray-100 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call {config.business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-brand-dark">
            Why Choose Lyda Lawn Care?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We've been taking care of Treasure Valley lawns since 1994
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-2 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-dark">
            Our Services
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From weekly maintenance to complete landscape transformations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {config.services.slice(0, 3).map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-brand-dark">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="inline-block bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Lawn Care?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Call for a free estimate. We've been serving the Treasure Valley for over 30 years.
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
