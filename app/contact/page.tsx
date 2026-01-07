import config from "@/config.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-dark to-brand-gray text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200">
            Ready to transform your lawn? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Phone</h3>
                    <a
                      href={`tel:${config.business.phone.replace(/\D/g, "")}`}
                      className="text-brand-green hover:text-green-600 text-lg"
                    >
                      {config.business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Email</h3>
                    <a
                      href={`mailto:${config.business.email}`}
                      className="text-brand-green hover:text-green-600 break-all"
                    >
                      {config.business.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Service Area</h3>
                    <p className="text-gray-600">{config.business.address}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {config.serviceAreas.map((area, index) => (
                        <span
                          key={index}
                          className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-brand-green" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Follow Us</h3>
                    <a
                      href={config.business.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-green hover:text-green-600"
                    >
                      Visit our Facebook page
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-brand-green/10 border border-brand-green rounded-lg p-6">
                <h3 className="font-bold text-brand-dark mb-2">Business Hours</h3>
                <p className="text-gray-700">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
                <p className="text-sm text-gray-600 mt-3">
                  *Hours may vary seasonally. Call for availability.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-dark">Send Us a Message</h2>
              <div className="bg-brand-dark rounded-lg p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="text-gray-600">Google Maps integration coming soon</p>
              <p className="text-sm text-gray-500 mt-2">Serving {config.serviceAreas.join(", ")} and surrounding areas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
