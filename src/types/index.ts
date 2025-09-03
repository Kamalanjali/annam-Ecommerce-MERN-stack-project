export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  image: string;
  ingredients: string[];
  weight: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
}

export type ProductCategory = 
  | 'podis' 
  | 'karams' 
  | 'pickles' 
  | 'fryums' 
  | 'vadiyalu' 
  | 'milk-products';