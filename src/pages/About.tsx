import React from 'react'
import { Award, Users, Globe, Heart } from 'lucide-react'

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
          Our Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Heritage Threads was born from a passion to preserve the timeless beauty of traditional Indian craftsmanship while making it accessible to modern women who appreciate authentic artistry.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img 
            src="https://images.pexels.com/photos/5935237/pexels-photo-5935237.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Traditional craftsman"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
            Preserving Tradition, Embracing Modernity
          </h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, Heritage Threads emerged from a deep reverence for India's rich textile heritage. Our founder, a third-generation textile connoisseur, recognized the need to bridge the gap between traditional craftsmanship and contemporary accessibility.
          </p>
          <p className="text-gray-600 mb-4">
            We work directly with master artisans across India, from the silk weavers of Varanasi to the embroiderers of Lucknow, ensuring that each piece in our collection tells a story of cultural heritage and artistic excellence.
          </p>
          <p className="text-gray-600">
            Our unique buy-and-rent model makes these precious heirloom pieces accessible to women who want to honor tradition without compromising on authenticity or quality.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
              <Award className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">Every piece is carefully sourced and verified for its traditional craftsmanship and cultural significance.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
              <Users className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">We support local artisans and craftspeople, ensuring fair wages and sustainable livelihoods.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
              <Globe className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">Our rental model promotes sustainable fashion by extending the lifecycle of beautiful garments.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
              <Heart className="text-rose-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">Our love for Indian textiles drives everything we do, from curation to customer service.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Priya Sharma"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
            <p className="text-gray-600 mb-2">Founder & Creative Director</p>
            <p className="text-sm text-gray-500">Third-generation textile enthusiast with a passion for preserving Indian craftsmanship.</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Rajesh Kumar"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Rajesh Kumar</h3>
            <p className="text-gray-600 mb-2">Head of Artisan Relations</p>
            <p className="text-sm text-gray-500">Builds relationships with craftspeople across India to source authentic pieces.</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Ananya Patel"
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">Ananya Patel</h3>
            <p className="text-gray-600 mb-2">Customer Experience Manager</p>
            <p className="text-sm text-gray-500">Ensures every customer receives personalized service and finds their perfect outfit.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-rose-50 rounded-2xl p-12">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
          Join Our Heritage Story
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Discover the beauty of traditional Indian craftsmanship and be part of preserving this incredible heritage.
        </p>
        <button className="btn-primary">
          Explore Our Collection
        </button>
      </div>
    </div>
  )
}

export default About