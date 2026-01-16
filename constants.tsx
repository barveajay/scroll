
import { Project, Service, Testimonial } from './types';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Videography & Photography',
    description: 'High-end commercials, music videos, and product shoots that tell a story.',
    icon: 'Video'
  },
  {
    id: 2,
    title: 'Branding & Design',
    description: 'Bespoke logos, packaging, and brand identities that resonate with your audience.',
    icon: 'Palette'
  },
  {
    id: 3,
    title: 'Social Media Strategy',
    description: 'Content creation and organic growth strategies to dominate social platforms.',
    icon: 'Instagram'
  },
  {
    id: 4,
    title: 'Web Development',
    description: 'Custom, high-performance websites focused on conversion and UI/UX.',
    icon: 'Code'
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Data-driven SEO, PPC, and influencer campaigns for maximum ROI.',
    icon: 'TrendingUp'
  },
  {
    id: 6,
    title: 'Content Strategy',
    description: 'Comprehensive planning to ensure your brand voice is consistent and powerful.',
    icon: 'FileText'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Neon Pulse Campaign',
    category: 'Video',
    client: 'Starlight Energy',
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-6170c3295db1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'EcoSphere Identity',
    category: 'Branding',
    client: 'Green Horizon',
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Luxe Real Estate Portal',
    category: 'Web Design',
    client: 'Summit Group',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Urban Sound Doc',
    category: 'Video',
    client: 'Underground Records',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Verve Cosmetics',
    category: 'Branding',
    client: 'Verve Global',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'Growth Accelerator',
    category: 'Marketing',
    client: 'TechFlow',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, Starlight Energy',
    quote: 'ScrollFuel transformed our digital presence. Their video production quality is unmatched in the industry.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Founder, EcoSphere',
    quote: 'From branding to final deployment, the team displayed a level of creativity that genuinely surprised us.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Marketing Director, Verve',
    quote: 'The results speak for themselves. Our engagement rates tripled within three months of their campaign launch.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Cinematic Branding',
    excerpt: 'How visual storytelling is changing the way consumers interact with high-end brands.',
    date: 'Oct 24, 2024',
    category: 'Creative',
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-6170c3295db1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Mastering Social Media Algorithms',
    excerpt: 'A deep dive into the strategies that drive organic growth in 2024 and beyond.',
    date: 'Oct 15, 2024',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'UI/UX Trends to Watch',
    excerpt: 'Why minimalist design with high-impact micro-interactions is the new gold standard.',
    date: 'Sep 28, 2024',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
  }
];
