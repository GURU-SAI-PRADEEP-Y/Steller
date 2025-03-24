import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShoppingBag, ArrowRight, Star, Palette, Shirt, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-white text-2xl font-bold">STELLAR</h1>
          <button className="bg-white text-purple-900 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all">
            Shop Now <ShoppingBag size={18} />
          </button>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" fill="currentColor" />
              <p className="text-sm">Premium Quality Hoodies</p>
            </div>
            
            <h2 className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Elevate Your Style with 3D Crafted Comfort
            </h2>
            
            <p className="text-gray-300 text-lg">
              Experience the perfect blend of style and comfort with our premium 3D-designed hoodies. 
              Each piece is crafted to perfection, ensuring you stand out in every crowd.
            </p>

            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-all">
                Explore Collection <ArrowRight size={18} />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-900 transition-all">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold">50K+</h3>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">4.9/5</h3>
                <p className="text-gray-400">Customer Rating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm">
              <Spline scene="https://prod.spline.design/D2LuHG3l3EFLKVU5/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-3 gap-8">
          {['Premium Materials', 'Custom Fit', 'Lifetime Warranty'].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-white hover:transform hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4">{feature}</h3>
              <p className="text-gray-300">Experience unmatched quality and comfort with our carefully selected materials and expert craftsmanship.</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Models Showcase */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Explore Our 3D Collection</h2>
          <p className="text-xl text-gray-300">Discover our range of premium products in stunning 3D detail</p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/10 transition-all">
            <div className="h-[400px] relative mb-4">
              <Spline scene="https://prod.spline.design/4SszHETa3HeMSGG3/scene.splinecode" />
            </div>
            <h3 className="text-xl font-bold text-white text-center">Premium T-Shirt</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/10 transition-all">
            <div className="h-[400px] relative mb-4">
              <Spline scene="https://prod.spline.design/OJawuOPaKmjv5qQO/scene.splinecode" />
            </div>
            <h3 className="text-xl font-bold text-white text-center">Designer Hat</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 hover:bg-white/10 transition-all">
            <div className="h-[400px] relative mb-4">
              <Spline scene="https://prod.spline.design/EcftLb8TVUS9Si6W/scene.splinecode" />
            </div>
            <h3 className="text-xl font-bold text-white text-center">Signature Mug</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;