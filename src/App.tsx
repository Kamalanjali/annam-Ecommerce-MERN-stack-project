import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';
import { products } from './data/products';
import { ProductCategory } from './types';

function App() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    handleExploreProducts();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />
      
      <main>
        <Hero onExploreClick={handleExploreProducts} />
        
        <ProductGrid
          products={products}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onAddToCart={addToCart}
          searchQuery={searchQuery}
        />
        
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;