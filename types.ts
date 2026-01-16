
export type Category = 'All' | 'Branding' | 'Video' | 'Web Design' | 'Marketing';

export interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  client: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
