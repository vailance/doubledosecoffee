import type { CoffeeProduct } from '@/types';

const COFFEE_BEAN_IMG = 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80';

export const products: CoffeeProduct[] = [
  {
    id: 'ethiopian-yirgacheffe',
    slug: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    description: 'A light roast coffee with bright acidity and floral notes. This Ethiopian single-origin bean offers a delicate cup with hints of citrus, jasmine, and stone fruit. Perfect for pour-over brewing methods.',
    origin: 'Ethiopia',
    roastType: 'Light',
    notes: ['Citrus', 'Jasmine', 'Stone Fruit', 'Tea-like'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Ethiopian Yirgacheffe Coffee Beans',
  },
  {
    id: 'colombian-supremo',
    slug: 'colombian-supremo',
    name: 'Colombian Supremo',
    description: 'A medium roast coffee with balanced acidity and rich body. This Colombian single-origin delivers notes of caramel, nuts, and subtle fruit sweetness. Excellent for espresso or drip brewing.',
    origin: 'Colombia',
    roastType: 'Medium',
    notes: ['Caramel', 'Nuts', 'Subtle Fruit', 'Chocolate'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Colombian Supremo Coffee Beans',
  },
  {
    id: 'sumatra-mandheling',
    slug: 'sumatra-mandheling',
    name: 'Sumatra Mandheling',
    description: 'A dark roast coffee with bold, full body and low acidity. This Indonesian single-origin features earthy, herbal notes with a spicy finish. Ideal for French press or espresso.',
    origin: 'Indonesia',
    roastType: 'Dark',
    notes: ['Earthy', 'Herbal', 'Spicy', 'Molasses'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Sumatra Mandheling Coffee Beans',
  },
  {
    id: 'guatemala-antigua',
    slug: 'guatemala-antigua',
    name: 'Guatemala Antigua',
    description: 'A medium roast coffee with complex flavor profile and smooth finish. This Guatemalan single-origin offers notes of cocoa, spice, and cherry with a clean, bright cup.',
    origin: 'Guatemala',
    roastType: 'Medium',
    notes: ['Cocoa', 'Spice', 'Cherry', 'Smoky'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Guatemala Antigua Coffee Beans',
  },
  {
    id: 'brazilian-santos',
    slug: 'brazilian-santos',
    name: 'Brazilian Santos',
    description: 'A medium roast coffee with classic Brazilian character and nutty sweetness. This Brazil single-origin delivers a smooth, low-acid cup perfect for espresso blends or morning drip.',
    origin: 'Brazil',
    roastType: 'Medium',
    notes: ['Nutty', 'Chocolate', 'Caramel', 'Sweet'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Brazilian Santos Coffee Beans',
  },
  {
    id: 'kenyan-aa',
    slug: 'kenyan-aa',
    name: 'Kenyan AA',
    description: 'A light roast coffee with exceptional brightness and wine-like acidity. This Kenyan single-origin delivers bold blackcurrant, citrus, and tropical fruit notes with a clean finish.',
    origin: 'Kenya',
    roastType: 'Light',
    notes: ['Blackcurrant', 'Citrus', 'Tropical Fruit', 'Wine-like'],
    pricing: {
      size250g: 49,
      size500g: 79,
    },
    image: COFFEE_BEAN_IMG,
    imageAlt: 'Kenyan AA Coffee Beans',
  },
];

export function getProductBySlug(slug: string): CoffeeProduct | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByRoastType(roastType: string): CoffeeProduct[] {
  return products.filter(product => product.roastType === roastType);
}
