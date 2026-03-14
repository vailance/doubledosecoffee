import type { MenuCategory } from '@/types';

export const menuCategories: MenuCategory[] = [
  {
    name: 'Espresso',
    items: [
      { id: '1', name: 'Black', price: 10 },
      { id: '2', name: 'White', price: 12 },
      { id: '3', name: 'Vanilla Latte', price: 13 },
      { id: '4', name: 'Spanish Latte', price: 14, note: 'cold only' },
      { id: '5', name: 'Mocha', price: 13 },
      { id: '6', name: 'Shakerato', price: 13, note: 'cold only' },
      { id: '7', name: 'Affogato', price: 13 },
      { id: '8', name: 'Espresso Tonic', price: 15 },
      { id: '9', name: 'Matcha Espresso', price: 16 },
    ],
  },
  {
    name: 'Matcha Series',
    items: [
      { id: '1', name: 'Matcha Latte', price: 15 },
      { id: '2', name: 'Matcha Strawberry Latte', price: 18 },
      { id: '3', name: 'Matcha Tonic', price: 16 },
      { id: '4', name: 'Hojicha Latte', price: 14 },
    ],
  },
  {
    name: 'Non-Coffee',
    items: [
      { id: '1', name: 'Chocolate Milk', price: 12 },
      { id: '2', name: 'Avocado Milk', price: 15 },
      { id: '3', name: 'Babycino', price: 10 },
    ],
  },
  {
    name: 'Homebrew Kombucha',
    items: [
      { id: '1', name: 'Nutmeg', price: 15 },
      { id: '2', name: 'Osmanthus', price: 15 },
      { id: '3', name: 'Apple Cinnamon', price: 15 },
      { id: '4', name: 'Lemon Ginger', price: 15 },
    ],
  },
  {
    name: 'Soda Series',
    items: [
      { id: '1', name: 'Passion Fruit Soda', price: 12 },
      { id: '2', name: 'Soursop Soda', price: 12 },
      { id: '3', name: 'Fizzy Lime w Sourplum', price: 12 },
    ],
  },
  {
    name: 'Tea',
    items: [
      { id: '1', name: 'Earl Grey', price: 10 },
      { id: '2', name: 'English Rose', price: 10 },
      { id: '3', name: 'Chamomile', price: 10 },
    ],
  },
  {
    name: 'Seasonal Filter Coffee',
    items: [
      { id: '1', name: 'RM25+ by V60', price: 25, note: "Ask what's brewing today" },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: '1', name: 'Panna Cotta', price: '16/17', note: 'strawberry jam / espresso / matcha' },
      { id: '2', name: 'Oolong Peach Cake', price: 17 },
      { id: '3', name: 'Burnt Cheese Cake', price: 17 },
      { id: '4', name: 'Brûlée Cloud', price: 19 },
      { id: '5', name: 'Strawberry Tiramisu', price: 20 },
      { id: '6', name: 'Tiramisu', price: 20, note: 'non-alcohol' },
    ],
  },
  {
    name: 'Pastries',
    items: [
      { id: '1', name: 'Classic Croissant', price: 7 },
      { id: '2', name: 'Pain Au Chocolate Croissant', price: 9 },
      { id: '3', name: 'Chicken Loaf Croissant', price: 12 },
    ],
  },
  {
    name: 'Fruit Juice',
    items: [
      { id: '1', name: 'Apple / Orange / Lemonade', price: 15 },
    ],
  },
  {
    name: 'Add-ons',
    items: [
      { id: '1', name: 'Ice', price: 1 },
      { id: '2', name: 'Oat Milk', price: 3 },
      { id: '3', name: 'Espresso', price: 3 },
    ],
  },
];
