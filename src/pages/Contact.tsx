import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you. Whether you have questions about our collection, need styling advice, or want to learn more about our rental process, we're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
            Contact Information
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <MapPin className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Our Showroom</h3>
                <p className="text-gray-600">
                  123 Heritage Lane<br />
                  Bandra West, Mumbai 400050<br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Phone className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">
                  +91 98765 43210<br />
                  +91 98765 43211
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">
                  info@heritagethreads.com<br />
                  support@heritagethreads.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mr-4">
                <Clock className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 10:00 AM - 8:00 PM<br />
                  Sunday: 11:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Personal styling consultations</li>
              <li>• Custom alterations and tailoring</li>
              <li>• Outfit rental for special occasions</li>
              <li>• Heirloom collection curation</li>
              <li>• Virtual appointments available</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="card p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="rental">Rental Information</option>
                  <option value="purchase">Purchase Question</option>
                  <option value="styling">Styling Consultation</option>
                  <option value="alteration">Alteration Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">How does the rental process work?</h3>
            <p className="text-gray-600">
              Simply browse our collection, select your preferred dates, choose your size, and place your order. We'll deliver the outfit to your doorstep and arrange pickup after your event.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">What is your return policy?</h3>
            <p className="text-gray-600">
              For purchases, we offer a 7-day return policy. For rentals, items should be returned within 1 day after your event date in the same condition as received.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Do you offer alterations?</h3>
            <p className="text-gray-600">
              Yes, we provide professional alteration services for both purchased and rented items to ensure the perfect fit for your special occasion.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Are all outfits authentic?</h3>
            <p className="text-gray-600">
              Absolutely. Every piece in our collection is carefully curated and sourced directly from master artisans and verified heritage textile sources across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact