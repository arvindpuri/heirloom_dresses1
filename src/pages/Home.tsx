import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Royal Banarasi Lehenga",
      price: "₹45,000",
      rentPrice: "₹4,500",
      image: "https://images.pexels.com/photos/8947308/pexels-photo-8947308.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      name: "Vintage Kanjeevaram Saree",
      price: "₹28,000",
      rentPrice: "₹2,800",
      image: "https://images.pexels.com/photos/5935237/pexels-photo-5935237.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      name: "Heritage Anarkali Suit",
      price: "₹22,000",
      rentPrice: "₹2,200",
      image: "https://images.pexels.com/photos/8448014/pexels-photo-8448014.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/5935799/pexels-photo-5935799.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Timeless Indian
            <span className="text-rose-400"> Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover exquisite heirloom dresses and suits - available to buy or rent for your special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
              Shop Collection
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <button className="btn-secondary text-lg px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm border-white hover:bg-white hover:text-gray-900">
              Explore Rentals
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
                <Sparkles className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Craftsmanship</h3>
              <p className="text-gray-600">Handpicked heirloom pieces featuring traditional embroidery and timeless designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
                <Shield className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every piece is carefully curated and maintained to ensure pristine condition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
                <Clock className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
              <p className="text-gray-600">Choose to buy your dream outfit or rent it for special occasions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most coveted heirloom pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card overflow-hidden group">
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Buy: <span className="font-semibold text-gray-900">{product.price}</span></p>
                      <p className="text-sm text-gray-600">Rent: <span className="font-semibold text-rose-600">{product.rentPrice}/day</span></p>
                    </div>
                  </div>
                  <Link 
                    to={`/product/${product.id}`}
                    className="w-full btn-primary text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-secondary">
              View All Collection
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Find Your Perfect Outfit?
          </h2>
          <p className="text-xl mb-8">
            Browse our extensive collection of authentic Indian heirloom dresses and suits
          </p>
          <Link to="/shop" className="btn-secondary bg-white text-rose-600 hover:bg-gray-100">
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home