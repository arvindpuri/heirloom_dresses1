import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Filter, Grid, List } from 'lucide-react'

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Royal Banarasi Lehenga",
      category: "lehenga",
      price: "₹45,000",
      rentPrice: "₹4,500",
      image: "https://images.pexels.com/photos/8947308/pexels-photo-8947308.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Exquisite gold zari work on rich silk fabric"
    },
    {
      id: 2,
      name: "Vintage Kanjeevaram Saree",
      category: "saree",
      price: "₹28,000",
      rentPrice: "₹2,800",
      image: "https://images.pexels.com/photos/5935237/pexels-photo-5935237.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Traditional temple border with peacock motifs"
    },
    {
      id: 3,
      name: "Heritage Anarkali Suit",
      category: "suit",
      price: "₹22,000",
      rentPrice: "₹2,200",
      image: "https://images.pexels.com/photos/8448014/pexels-photo-8448014.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Intricate thread work with mirror embellishments"
    },
    {
      id: 4,
      name: "Classic Silk Saree",
      category: "saree",
      price: "₹35,000",
      rentPrice: "₹3,500",
      image: "https://images.pexels.com/photos/5935235/pexels-photo-5935235.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Handwoven silk with traditional patterns"
    },
    {
      id: 5,
      name: "Bridal Lehenga Set",
      category: "lehenga",
      price: "₹85,000",
      rentPrice: "₹8,500",
      image: "https://images.pexels.com/photos/8448022/pexels-photo-8448022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Heavy embroidered bridal ensemble with dupatta"
    },
    {
      id: 6,
      name: "Festive Sharara Set",
      category: "suit",
      price: "₹18,000",
      rentPrice: "₹1,800",
      image: "https://images.pexels.com/photos/8448011/pexels-photo-8448011.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary cut with traditional embroidery"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'lehenga', name: 'Lehengas' },
    { id: 'saree', name: 'Sarees' },
    { id: 'suit', name: 'Suits' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Shop Collection
        </h1>
        <p className="text-xl text-gray-600">
          Discover our exquisite range of heirloom Indian outfits
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Filter className="mr-2" size={20} />
              Filters
            </h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-rose-100 text-rose-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Under ₹20,000
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  ₹20,000 - ₹40,000
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Above ₹40,000
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Availability</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Available for Purchase
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Available for Rent
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-rose-100 text-rose-600' : 'text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-rose-100 text-rose-600' : 'text-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`card overflow-hidden group ${
                viewMode === 'list' ? 'flex' : ''
              }`}>
                <div className={`overflow-hidden ${
                  viewMode === 'list' ? 'w-1/3' : 'aspect-w-3 aspect-h-4'
                }`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-80'
                    }`}
                  />
                </div>
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Buy: <span className="font-semibold text-gray-900">{product.price}</span></p>
                        <p className="text-sm text-gray-600">Rent: <span className="font-semibold text-rose-600">{product.rentPrice}/day</span></p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to={`/product/${product.id}`}
                    className="btn-primary text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop