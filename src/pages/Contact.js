import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-purple-200 text-lg mt-2">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="text-3xl text-purple-900 mr-4">📞</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:09362334732"
                      className="text-purple-600 hover:text-purple-900 transition font-semibold text-lg"
                    >
                      0936 233 4732
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="text-3xl text-purple-900 mr-4">✉️</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:iastcgc@gmail.com"
                      className="text-purple-600 hover:text-purple-900 transition font-semibold text-lg break-all"
                    >
                      iastcgc@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="text-3xl text-purple-900 mr-4">🌐</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                    <div className="space-y-3">
                      <a
                        href="https://facebook.com/iastcgc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-900 transition font-semibold"
                      >
                        <span className="mr-2">f</span> Facebook
                      </a>
                      <a
                        href="https://instagram.com/iastcgc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-900 transition font-semibold"
                      >
                        <span className="mr-2">📷</span> Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="font-semibold">Saturday:</span> 9:00 AM - 3:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg border border-purple-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="academic">Academic Programs</option>
                      <option value="financial">Financial Aid</option>
                      <option value="events">Events & Activities</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-transparent transition resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-purple-900 text-white font-bold py-3 rounded-lg hover:bg-purple-800 transition-colors duration-200 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Location */}
      <section className="py-16 md:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Us
            </h2>
            <p className="text-gray-700 text-lg">
              Located in the heart of the city, we're easily accessible
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Institute Location"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.898261253614!2d121.01606471341648!3d14.591734286036057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7f5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sTagaytay%20City%2C%20Cavite!5e0!3m2!1sen!2sph!4v1234567890"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900 to-purple-800 text-white p-8 rounded-lg">
            <p className="text-lg">
              Institute of Arts and Sciences, TCGC | Providing Humanistic and Scientific Education
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Apply Now',
                description: 'Start your journey with us',
                icon: '📋'
              },
              {
                title: 'Schedule a Tour',
                description: 'Visit our campus',
                icon: '🏫'
              },
              {
                title: 'Request Info',
                description: 'Learn more about our programs',
                icon: '📚'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-purple-900 font-semibold hover:text-purple-600 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
