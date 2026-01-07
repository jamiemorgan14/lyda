import config from "@/config.json";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const renderIcon = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      calendar: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      shield: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      star: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      clipboard: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    };
    return icons[iconName] || icons.star;
  };

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
                <div className="flex justify-center mb-4 text-brand-green">
                  {renderIcon(item.icon)}
                </div>
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
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free estimate today and see why Treasure Valley homeowners trust us with their lawns.
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
