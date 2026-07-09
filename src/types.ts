export type ServiceType = 'bridal' | 'party' | 'concept' | 'academy' | 'other';

export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  serviceType: ServiceType;
  message?: string;
  status: 'new' | 'contacted' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Booking {
  id: string;
  fullName: string;
  phone: string;
  serviceType: ServiceType;
  bookingDate: string;
  bookingTime: string;
  locationType: 'home' | 'studio';
  address?: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
