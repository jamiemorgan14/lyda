import config from "@/config.json";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-gray text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-200">
            See the transformations we've created for Treasure Valley homeowners
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.gallery.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow aspect-video"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-green/20 to-brand-gray/20">
                  <div className="text-center p-8">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 text-brand-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm text-gray-600">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/10 border-2 border-dashed border-brand-green rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-3 text-brand-dark">
              📷 Send Me Your Best Work Photos!
            </h3>
            <p className="text-gray-700 mb-2">
              Take photos of 6-10 of your best lawns, landscape projects, and transformations. Before & after shots work especially well!
            </p>
            <p className="text-sm text-gray-600 font-semibold">
              Send them over and I'll get them on the site
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get a Free Quote
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us to discuss your lawn care needs.
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
