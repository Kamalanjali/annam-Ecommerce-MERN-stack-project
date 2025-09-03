import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nuvvula Podi',
    description: 'Traditional sesame seed powder made with authentic spices and ghee. Perfect with rice and ghee.',
    price: 280,
    originalPrice: 320,
    category: 'podis',
    image: 'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg',
    ingredients: ['Sesame Seeds', 'Red Chillies', 'Salt', 'Asafoetida', 'Ghee'],
    weight: '200g',
    inStock: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    name: 'Kobbari Karam',
    description: 'Spicy coconut powder blend with traditional tempering. A must-have for every Telugu meal.',
    price: 320,
    category: 'karams',
    image: 'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg',
    ingredients: ['Fresh Coconut', 'Red Chillies', 'Tamarind', 'Coriander Seeds', 'Urad Dal'],
    weight: '250g',
    inStock: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '3',
    name: 'Mango Avakaya Pickle',
    description: 'Traditional Andhra-style mango pickle made with tender mangoes and aromatic spices.',
    price: 450,
    category: 'pickles',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    ingredients: ['Raw Mangoes', 'Mustard Seeds', 'Fenugreek Seeds', 'Red Chilli Powder', 'Salt', 'Sesame Oil'],
    weight: '500g',
    inStock: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    name: 'Rice Fryums',
    description: 'Crispy rice fryums made with pure rice flour. Perfect for deep frying and snacking.',
    price: 180,
    category: 'fryums',
    image: 'https://images.pexels.com/photos/4198430/pexels-photo-4198430.jpeg',
    ingredients: ['Rice Flour', 'Salt', 'Turmeric', 'Water'],
    weight: '300g',
    inStock: true,
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: '5',
    name: 'Pesalu Vadiyalu',
    description: 'Sun-dried green gram dumplings, a traditional preservative made with pure ingredients.',
    price: 240,
    category: 'vadiyalu',
    image: 'https://images.pexels.com/photos/4198032/pexels-photo-4198032.jpeg',
    ingredients: ['Green Gram', 'Salt', 'Green Chillies', 'Ginger', 'Curry Leaves'],
    weight: '200g',
    inStock: true,
    rating: 4.8,
    reviewCount: 91
  },
  {
    id: '6',
    name: 'Fresh Paneer',
    description: 'Soft, fresh paneer made from pure cow milk. No preservatives or artificial additives.',
    price: 160,
    category: 'milk-products',
    image: 'https://images.pexels.com/photos/4198421/pexels-photo-4198421.jpeg',
    ingredients: ['Pure Cow Milk', 'Lemon Juice'],
    weight: '250g',
    inStock: true,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '7',
    name: 'Curry Leaves Podi',
    description: 'Aromatic curry leaves powder with roasted lentils. Rich in nutrients and flavor.',
    price: 300,
    category: 'podis',
    image: 'https://images.pexels.com/photos/4198098/pexels-photo-4198098.jpeg',
    ingredients: ['Curry Leaves', 'Urad Dal', 'Chana Dal', 'Red Chillies', 'Asafoetida'],
    weight: '150g',
    inStock: true,
    rating: 4.7,
    reviewCount: 78
  },
  {
    id: '8',
    name: 'Tomato Pickle',
    description: 'Tangy tomato pickle made with fresh tomatoes and traditional spices.',
    price: 380,
    category: 'pickles',
    image: 'https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg',
    ingredients: ['Fresh Tomatoes', 'Mustard Seeds', 'Fenugreek Powder', 'Red Chilli Powder', 'Turmeric', 'Sesame Oil'],
    weight: '400g',
    inStock: true,
    rating: 4.6,
    reviewCount: 134
  }
];

export const categories = [
  { id: 'podis', name: 'Podis', description: 'Traditional spice powders' },
  { id: 'karams', name: 'Karams', description: 'Spicy powder blends' },
  { id: 'pickles', name: 'Pickles', description: 'Authentic Telugu pickles' },
  { id: 'fryums', name: 'Fryums', description: 'Crispy fried snacks' },
  { id: 'vadiyalu', name: 'Vadiyalu', description: 'Sun-dried preservatives' },
  { id: 'milk-products', name: 'Milk Products', description: 'Fresh dairy items' }
];