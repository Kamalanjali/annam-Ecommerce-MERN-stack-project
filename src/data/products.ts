import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nuvvula Podi',
    description: 'Traditional sesame seed powder made with authentic spices and ghee. Perfect with rice and ghee.',
    detailedDescription: 'Our Nuvvula Podi is a traditional Telugu delicacy made from premium quality sesame seeds that are carefully roasted to perfection. This aromatic powder blend combines the nutty flavor of sesame with the perfect balance of spices including red chillies, salt, and asafoetida. Enhanced with pure ghee, it creates a rich and flavorful accompaniment that pairs beautifully with steamed rice. Made using age-old family recipes, this podi retains all the authentic flavors and nutritional benefits of sesame seeds, making it a healthy and delicious addition to your meals.',
    price: 280,
    originalPrice: 320,
    category: 'podis-karams',
    images: [
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg',
      'https://images.pexels.com/photos/4198098/pexels-photo-4198098.jpeg',
      'https://images.pexels.com/photos/4198032/pexels-photo-4198032.jpeg'
    ],
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
    detailedDescription: 'Kobbari Karam is a quintessential Telugu spice blend that brings the authentic taste of Andhra cuisine to your table. Made from fresh coconut that is carefully dried and ground with a perfect blend of red chillies, tamarind, and aromatic spices. The traditional tempering process enhances the flavors, creating a spicy and tangy powder that elevates any simple meal. This versatile karam can be mixed with rice, used as a side dish, or sprinkled over various preparations to add that authentic Telugu flavor.',
    price: 320,
    category: 'podis-karams',
    images: [
      'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg',
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg',
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg'
    ],
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
    detailedDescription: 'Our Mango Avakaya is the crown jewel of Andhra pickles, made from carefully selected raw mangoes that are cut and mixed with a perfect blend of traditional spices. This pickle follows an authentic family recipe that has been passed down through generations. The mangoes are combined with mustard seeds, fenugreek seeds, red chilli powder, and pure sesame oil, then aged to perfection. The result is a tangy, spicy, and aromatic pickle that captures the essence of traditional Telugu cuisine. Each bite delivers a burst of flavors that complement any meal.',
    price: 450,
    category: 'pickles',
    images: [
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg',
      'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg'
    ],
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
    detailedDescription: 'Our Rice Fryums are traditional South Indian snacks made from the finest quality rice flour. These sun-dried delicacies are prepared using time-honored techniques that ensure they puff up beautifully when deep-fried. Each fryum is carefully shaped and dried under natural sunlight, preserving the authentic taste and texture. When fried, they become light, crispy, and incredibly flavorful. These versatile fryums can be enjoyed as a snack with tea or as a crunchy accompaniment to meals. Made without any artificial preservatives, they retain their natural goodness and traditional taste.',
    price: 180,
    category: 'fryums-vadiyalu',
    images: [
      'https://images.pexels.com/photos/4198430/pexels-photo-4198430.jpeg',
      'https://images.pexels.com/photos/4198032/pexels-photo-4198032.jpeg',
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg'
    ],
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
    detailedDescription: 'Pesalu Vadiyalu are traditional Telugu sun-dried dumplings made from green gram (moong dal) that have been a staple in South Indian households for centuries. These nutritious vadiyalu are prepared by grinding soaked green gram into a smooth paste, seasoning it with green chillies, ginger, and curry leaves, then shaping into small dumplings and sun-drying them. This natural preservation method ensures they can be stored for months while retaining their nutritional value. When fried or roasted, they become crispy and flavorful, making them perfect as a side dish or snack.',
    price: 240,
    category: 'fryums-vadiyalu',
    images: [
      'https://images.pexels.com/photos/4198032/pexels-photo-4198032.jpeg',
      'https://images.pexels.com/photos/4198430/pexels-photo-4198430.jpeg',
      'https://images.pexels.com/photos/4198098/pexels-photo-4198098.jpeg'
    ],
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
    detailedDescription: 'Our Fresh Paneer is made daily from pure, organic cow milk sourced from local farms. This soft, creamy cottage cheese is prepared using traditional methods without any preservatives or artificial additives. The milk is carefully curdled using natural lemon juice, then pressed to achieve the perfect texture. Rich in protein and calcium, our paneer is ideal for various Indian dishes like paneer curry, palak paneer, or can be enjoyed fresh with a sprinkle of salt and pepper. The freshness and quality of our paneer make it a healthy and delicious choice for your family.',
    price: 160,
    category: 'milk-products',
    images: [
      'https://images.pexels.com/photos/4198421/pexels-photo-4198421.jpeg',
      'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg',
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg'
    ],
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
    detailedDescription: 'Our Curry Leaves Podi is a nutritious and flavorful powder made from fresh curry leaves that are carefully dried and ground with roasted lentils. This aromatic blend combines the distinctive flavor of curry leaves with the nutty taste of urad dal and chana dal. Rich in antioxidants, vitamins, and minerals, this podi not only enhances the taste of your meals but also provides numerous health benefits. The curry leaves are known for their medicinal properties, making this podi a healthy addition to your daily diet. Perfect with rice, idli, or dosa.',
    price: 300,
    category: 'podis-karams',
    images: [
      'https://images.pexels.com/photos/4198098/pexels-photo-4198098.jpeg',
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg',
      'https://images.pexels.com/photos/4198032/pexels-photo-4198032.jpeg'
    ],
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
    detailedDescription: 'Our Tomato Pickle is a delightful blend of fresh, ripe tomatoes and traditional spices that creates a perfect balance of tangy and spicy flavors. Made using a time-tested family recipe, fresh tomatoes are combined with mustard seeds, fenugreek powder, red chilli powder, turmeric, and pure sesame oil. The pickle is then aged to allow all the flavors to meld together beautifully. This versatile pickle pairs wonderfully with rice, roti, or any Indian bread, adding a burst of flavor to every meal. Made without any artificial preservatives, it retains the natural goodness of tomatoes.',
    price: 380,
    category: 'pickles',
    images: [
      'https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg',
      'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
      'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg'
    ],
    ingredients: ['Fresh Tomatoes', 'Mustard Seeds', 'Fenugreek Powder', 'Red Chilli Powder', 'Turmeric', 'Sesame Oil'],
    weight: '400g',
    inStock: true,
    rating: 4.6,
    reviewCount: 134
  },
  {
    id: '9',
    name: 'A2 Ghee',
    description: 'Premium A2 cow ghee made from grass-fed cows. Pure, aromatic, and nutritious.',
    detailedDescription: 'Our Premium A2 Ghee is made from the milk of indigenous grass-fed cows using the traditional bilona method. This ancient process involves churning curd made from A2 milk to extract butter, which is then slowly heated to produce pure, golden ghee. A2 ghee is easier to digest and contains beneficial nutrients like omega-3 fatty acids, vitamins A, D, E, and K. The rich, nutty aroma and golden color are testament to its purity and quality. This ghee is perfect for cooking, tempering, and adding to various dishes for enhanced flavor and nutrition.',
    price: 850,
    category: 'milk-products',
    images: [
      'https://images.pexels.com/photos/4198421/pexels-photo-4198421.jpeg',
      'https://images.pexels.com/photos/4198038/pexels-photo-4198038.jpeg',
      'https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg'
    ],
    ingredients: ['A2 Cow Milk'],
    weight: '500ml',
    inStock: true,
    rating: 4.9,
    reviewCount: 156
  }
];

export const categories = [
  { id: 'podis-karams', name: 'Podis & Karams', description: 'Traditional spice powders & blends' },
  { id: 'pickles', name: 'Pickles', description: 'Authentic Telugu pickles' },
  { id: 'fryums-vadiyalu', name: 'Fryums & Vadiyalu', description: 'Crispy snacks & preservatives' },
  { id: 'milk-products', name: 'Milk Products', description: 'Fresh dairy items' }
];