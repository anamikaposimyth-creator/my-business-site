
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent: string;
  benefits: string[];
  problemsSolved: string[];
  targetAudience: string;
  howItWorks: string[];
  outcomes: string[];
}

export interface UseCase {
  id: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  background: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  image: string;
  linkedin: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content: string;
  image: string;
  readTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'General' | 'Technical' | 'Security' | 'Pricing';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
}
