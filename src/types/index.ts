// Coffee Product Types
export interface CoffeeProduct {
  id: string;
  slug: string;
  name: string;
  description: string;
  origin: string;
  roastType: 'Light' | 'Medium' | 'Dark';
  notes: string[];
  pricing: {
    size250g: number; // RM price
    size500g: number; // RM price
  };
  image: string;
  imageAlt: string;
}

// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  price: number | string;
  note?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

// Location Types
export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: BusinessHours;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapUrl?: string;
}

// Business Hours Types
export interface BusinessHours {
  monday: TimeRange | null;
  tuesday: TimeRange | null;
  wednesday: TimeRange | null;
  thursday: TimeRange | null;
  friday: TimeRange | null;
  saturday: TimeRange | null;
  sunday: TimeRange | null;
}

export interface TimeRange {
  open: string; // Format: "HH:mm" (24-hour)
  close: string; // Format: "HH:mm" (24-hour)
}

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
}

// Cart Types (for future shopping cart functionality)
export interface CartItem {
  product: CoffeeProduct;
  size: '250g' | '500g';
  quantity: number;
}

// Footer Links Types
export interface FooterLinkGroup {
  title: string;
  links: { href: string; label: string }[];
}
