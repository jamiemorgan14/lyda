import config from "@/config.json";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Reviews() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-gray text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-200">
            See what our customers have to say about our work
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {config.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-brand-dark">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/10 border-2 border-dashed border-brand-green rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-brand-dark">
              📸 Send Me Your Customer Reviews!
            </h3>
            <p className="text-gray-700 mb-4">
              Ask 3-5 of your happiest customers for a quick review. Get their name, city, what they loved about your service, and a photo if possible.
            </p>
            <p className="text-sm text-gray-600 font-semibold">
              Then send them my way and I'll add them to the site!
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-dark">
            Read More on Google
          </h2>
          <p className="text-gray-600 mb-8">
            See what our customers are saying on Google Business
          </p>
          <a
            href={config.business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors border-2 border-gray-200 shadow-sm"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read Our Google Reviews
          </a>
          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700 font-semibold mb-2">⭐ Send Me Your Google Business Review Link</p>
            <p className="text-sm text-gray-600">
              Go to your Google Business profile, click "Get more reviews" and send me the link. I'll wire it up!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Schedule Your Service
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Call for a free estimate on your lawn care needs.
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
