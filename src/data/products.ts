import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mini Barbell Set',
    description: 'Perfect first barbell for your little athlete. Made from durable, child-safe plastic with colorful weight plates.',
    price: 34.99,
    images: [
      'https://i.etsystatic.com/56759122/r/il/d02064/6709757229/il_1588xN.6709757229_8p30.jpg',
      'https://i.etsystatic.com/56759122/r/il/dfe6f3/6703836547/il_1588xN.6703836547_mp0n.jpg'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Pink', hex: '#FFC0CB', available: true },
      { name: 'Green', hex: '#90EE90', available: true }
    ],
    category: 'Barbells',
    featured: true,
    ageRange: '3-6 years',
    weight: '1.5 lbs',
    dimensions: '24" x 4" x 4"'
  },
  {
    id: '2',
    name: 'Kids Kettlebell',
    description: 'Lightweight kettlebell designed specifically for children. Helps develop coordination and strength in a fun way.',
    price: 24.99,
    images: [
      'https://i.etsystatic.com/56759122/r/il/b09b41/6710023661/il_1588xN.6710023661_feke.jpg',
      'https://i.etsystatic.com/56759122/r/il/825135/6661979456/il_1588xN.6661979456_ehm5.jpg'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Pink', hex: '#FFC0CB', available: true },
      { name: 'Yellow', hex: '#FFFF00', available: true }
    ],
    category: 'Kettlebells',
    featured: true,
    ageRange: '4-8 years',
    weight: '2 lbs',
    dimensions: '6" x 4" x 4"'
  },
  {
    id: '3',
    name: 'Mini Dumbbells (Pair)',
    description: 'Colorful, easy-grip dumbbells perfect for little hands. Great for introducing weight training concepts.',
    price: 19.99,
    images: [
      'https://i.etsystatic.com/56759122/r/il/a87f35/6661955588/il_1588xN.6661955588_9s1u.jpg',
      'https://i.etsystatic.com/56759122/r/il/fd25e8/6710002847/il_1588xN.6710002847_dj7t.jpg'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Orange', hex: '#FFA500', available: true },
      { name: 'Purple', hex: '#800080', available: true }
    ],
    category: 'Dumbbells',
    featured: false,
    ageRange: '3-7 years',
    weight: '1 lb each',
    dimensions: '5" x 3" x 3" each'
  },
  {
    id: '4',
    name: 'Little Athlete Starter Kit',
    description: 'Complete set including mini barbell, kettlebell, and dumbbells. Everything your child needs to start their fitness journey!',
    price: 69.99,
    images: [
      'https://macymakes3d.com/cdn/shop/files/FunFiesta_c4d345b6-6436-42da-86c4-f0d8501c5346.png?v=1718823123&width=1946',
      'https://macymakes3d.com/cdn/shop/files/FunFiesta_c4d345b6-6436-42da-86c4-f0d8501c5346.png?v=1718823123&width=1946'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Pink', hex: '#FFC0CB', available: true },
      { name: 'Multi-color', hex: '#FFFFFF', available: true }
    ],
    category: 'Sets',
    featured: true,
    ageRange: '3-8 years'
  },
  {
    id: '5',
    name: 'Weight Plate Coaster',
    description: 'Set of 4 And Barbell Squat Rack Holder - Non Slip Drink Coasters - Gift, Weightlifting',
    price: 14.99,
    images: [
      'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    colors: [
      { name: 'Sky Blue', hex: '#87CEEB', available: true },
      { name: 'Green', hex: '#90EE90', available: true },
      { name: 'Red', hex: '#FF0000', available: true }
    ],
    category: 'Gifs for Adults',
    featured: false,
    ageRange: '18-199 years',
    dimensions: 'Adjustable length up to 7 feet'
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};