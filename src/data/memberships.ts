import { MembershipLevel } from '../types';

export const memberships: MembershipLevel[] = [
  {
    name: "Little Athlete",
    price: 9.99,
    benefits: [
      "10% off all products",
      "Free shipping on orders over $50",
      "Early access to new products",
      "Monthly workout guide for kids"
    ],
    recommended: false
  },
  {
    name: "Future Champion",
    price: 19.99,
    benefits: [
      "15% off all products",
      "Free shipping on all orders",
      "Early access to new products",
      "Monthly workout guide for kids",
      "Quarterly surprise gift",
      "Access to exclusive products"
    ],
    recommended: true
  },
  {
    name: "Mini Elite",
    price: 29.99,
    benefits: [
      "20% off all products",
      "Free shipping on all orders",
      "Early access to new products",
      "Monthly workout guide for kids",
      "Monthly surprise gift",
      "Access to exclusive products",
      "1-on-1 virtual coaching session quarterly",
      "Custom workout program for your child"
    ],
    recommended: false
  }
];