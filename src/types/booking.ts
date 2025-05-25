export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  category: 'hood' | 'vent' | 'dryer';
}

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  available: boolean;
}

export interface BookingFormData {
  service: string;
  date: Date;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  notes: string;
}

export const services: ServiceOption[] = [
  {
    id: 'hood-cleaning',
    name: 'Commercial Hood Cleaning',
    description: 'Complete cleaning of commercial kitchen hood systems',
    duration: 180,
    price: 299,
    category: 'hood'
  },
  {
    id: 'vent-cleaning',
    name: 'Air Vent Cleaning',
    description: 'Thorough cleaning of ventilation systems',
    duration: 120,
    price: 199,
    category: 'vent'
  },
  {
    id: 'dryer-vent',
    name: 'Dryer Vent Cleaning',
    description: 'Professional cleaning of dryer vents',
    duration: 90,
    price: 149,
    category: 'dryer'
  }
]; 