export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: Color[];
  category: string;
  featured: boolean;
  ageRange: string;
  weight?: string;
  dimensions?: string;
}

export interface Color {
  name: string;
  hex: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: Color;
}

export interface FAQ {
  question: string;
  answer: string;
}