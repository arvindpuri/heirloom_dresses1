import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, Share2, Truck, Shield, RotateCcw, Star } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedOption, setSelectedOption] = useState('buy')

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Royal Banarasi Lehenga",
    price: "₹45,000",
    rentPrice: "₹4,500",
    originalPrice: "₹55,000",
    rating: 4.8,
    reviews: 24,
    description: "This exquisite Royal Banarasi Lehenga is a masterpiece of traditional Indian craftsmanship. Featuring intricate gold zari work on rich silk fabric, this heirloom piece represents centuries of weaving tradition from Varanasi.",
    details: [
      "Fabric: Pure Banarasi Silk",
      "Work: Hand-woven Gold Zari",
      "Includes: Lehenga, Blouse, Dupatta",
      "Care: Dry clean only",
      "Origin: Varanasi, India"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.pexels.com/photos/8947308/pexels-photo-8947308.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8448022/pexels-photo-8448022.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8448014/pexels-photo-8448014.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="aspect-w-4 aspect-h-5 mb-4">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-4 aspect-h-5 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-rose-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center mb-2">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setSelectedOption('buy')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedOption === 'buy'
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSelectedOption('rent')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedOption === 'rent'
                    ? 'bg-rose-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rent
              </button>
            </div>

            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">
                {selectedOption === 'buy' ? product.price : `${product.rentPrice}/day`}
              </span>
              {selectedOption === 'buy' && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Size</h3>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border-2 font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-rose-500 bg-rose-50 text-rose-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-8">
            <button className="flex-1 btn-primary">
              {selectedOption === 'buy' ? 'Add to Cart' : 'Rent Now'}
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-lg hover:border-rose-300 transition-colors">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <Truck className="w-5 h-5 mr-2 text-rose-600" />
              Free shipping
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-5 h-5 mr-2 text-rose-600" />
              Quality guaranteed
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <RotateCcw className="w-5 h-5 mr-2 text-rose-600" />
              Easy returns
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Product Details</h3>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail