import type { Location } from '@/types';

export const locations: Location[] = [
  {
    id: 'melaka',
    name: 'Melaka Outlet',
    address: 'No. 8, Jalan Kota Laksamana 3/7, Taman Kota Laksamana, 75200 Melaka, Malaysia',
    phone: '+60186625200',
    email: 'hello@doubledosecoffee.com',
    coordinates: {
      lat: 2.20846,
      lng: 102.2430154,
    },
    hours: {
      monday: { open: '07:00', close: '19:00' },
      tuesday: { open: '07:00', close: '19:00' },
      wednesday: { open: '07:00', close: '19:00' },
      thursday: { open: '07:00', close: '19:00' },
      friday: { open: '08:00', close: '21:00' },
      saturday: { open: '08:00', close: '21:00' },
      sunday: { open: '08:00', close: '18:00' },
    },
    mapUrl: 'https://maps.app.goo.gl/Y7R4qjzV2i6ZorQD9',
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id);
}
