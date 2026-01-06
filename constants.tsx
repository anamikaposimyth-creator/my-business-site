
import { Service, UseCase, TeamMember, BlogPost, FAQ, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-transformation',
    title: 'Enterprise Digital Transformation',
    icon: '⚡',
    description: 'Modernize legacy debt with cloud-native architectures and seamless data pipelines.',
    fullContent: 'We architect end-to-end digital evolution for organizations burdened by technical debt. Our approach isn\'t just about replacing software; it\'s about rebuilding the technical marrow of your company to support rapid scaling and agile product delivery.',
    targetAudience: 'Mid-to-large enterprises operating on legacy infrastructure seeking a transition to cloud-native scalability.',
    problemsSolved: [
      'Fragile monolithic architectures that block frequent releases.',
      'Data fragmentation across disconnected on-premise silos.',
      'Skyrolling maintenance costs of outdated software versions.'
    ],
    benefits: [
      '50% faster time-to-market for new features.',
      'Significant reduction in DevOps overhead through automation.',
      'Elastic infrastructure that scales with seasonal demand.'
    ],
    howItWorks: [
      'Discovery & Technical Audit: Mapping the existing stack.',
      'Target Architecture Design: Defining the microservices roadmap.',
      'Phased Migration: Transitioning workloads without downtime.',
      'Optimization: Right-sizing cloud resources for cost efficiency.'
    ],
    outcomes: [
      'Lower CAPEX, optimized OPEX.',
      'Standardized CI/CD pipelines across all teams.',
      'Unified data lake for enterprise-wide analytics.'
    ]
  },
  {
    id: 'ai-automation',
    title: 'Adaptive AI & LLM Automation',
    icon: '🤖',
    description: 'Deploy proprietary AI agents that understand your unique business logic and workflows.',
    fullContent: 'Generic AI tools don\'t solve specific business bottlenecks. We build custom Large Language Model (LLM) implementations and Robotic Process Automation (RPA) that integrate directly with your ERP, CRM, and internal databases.',
    targetAudience: 'High-growth technology firms and service providers looking to multiply team output without linear headcount growth.',
    problemsSolved: [
      'Information overload in customer support and legal review.',
      'Repetitive manual data reconciliation between systems.',
      'Inability to extract actionable insights from vast unstructured data.'
    ],
    benefits: [
      '24/7 automated tier-1 support with human-like accuracy.',
      'Predictive forecasting for supply chain and inventory.',
      'Significant reduction in administrative burnout.'
    ],
    howItWorks: [
      'Workflow Mapping: Identifying high-impact automation candidates.',
      'Custom Model Training: Fine-tuning LLMs on your proprietary data.',
      'Secure Integration: Connecting AI to your existing toolchain via API.',
      'Human-in-the-loop: Designing monitoring systems for AI reliability.'
    ],
    outcomes: [
      'Increased operational throughput by up to 3x.',
      'Enhanced decision-making based on real-time data synthesis.',
      'Proprietary AI assets that provide a competitive moat.'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Zero-Trust Security & Compliance',
    icon: '🛡️',
    description: 'Protect your perimeter and internal assets with military-grade security and automated compliance.',
    fullContent: 'Security is no longer a checkbox; it is a prerequisite for market trust. We implement Zero-Trust Network Access (ZTNA), continuous vulnerability monitoring, and automated compliance mapping for GDPR, SOC2, and HIPAA.',
    targetAudience: 'Regulated industries (Fintech, Healthtech) and SaaS companies targeting enterprise-level clients.',
    problemsSolved: [
      'Exposure to sophisticated ransomware and phishing attacks.',
      'Failing enterprise security audits that block major deals.',
      'Lack of visibility into third-party vendor risks.'
    ],
    benefits: [
      'Shortened sales cycles through pre-cleared security posture.',
      'Proactive threat hunting that stops breaches before they happen.',
      'Centralized compliance dashboard for easier reporting.'
    ],
    howItWorks: [
      'Surface Area Assessment: Penetration testing and audit.',
      'Perimeter Hardening: Implementing MFA, SSO, and encryption.',
      'Compliance Automation: Setting up evidence collection for SOC2.',
      'Ongoing Managed Defense: 24/7 SOC monitoring.'
    ],
    outcomes: [
      'Zero catastrophic data loss incidents recorded.',
      '100% success rate in regulatory compliance audits.',
      'Immutable audit trails for every internal action.'
    ]
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'fintech-scale',
    client: 'GlobalPay Solutions',
    industry: 'Financial Services',
    title: 'Modernizing Transaction Pipelines for 10M+ Daily Users',
    summary: 'Building a distributed infrastructure capable of handling high-concurrency global payments.',
    background: 'GlobalPay was a regional leader attempting to go global but faced crippling latency issues in new markets.',
    challenge: 'Their legacy monolithic database reached its physical write limit, causing 5-second delays in payment confirmations and occasional double-charging errors.',
    solution: 'We migrated their core ledger to a globally distributed CockroachDB cluster on AWS, implemented an event-driven Kafka architecture for transaction processing, and added an AI-driven fraud detection layer.',
    results: [
      'Latency dropped from 5s to under 250ms globally.',
      'System uptime increased to "Five Nines" (99.999%).',
      'Fraud detection accuracy improved by 40% using real-time ML.',
      'Infrastructure costs scaled linearly with usage, saving $2M annually.'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'healthcare-ai',
    client: 'MedStream Research',
    industry: 'BioTech',
    title: 'AI-Powered Clinical Data Synthesis',
    summary: 'Reducing drug discovery documentation time by 75% using secure, private LLMs.',
    background: 'MedStream manages thousands of clinical trial documents that require rigorous cross-referencing.',
    challenge: 'Highly skilled researchers were spending 60% of their time manually summarizing FDA reports and trial results instead of doing actual lab work.',
    solution: 'Deployment of a private, air-gapped LLM fine-tuned on medical terminology. We built a RAG (Retrieval-Augmented Generation) system that allows researchers to "chat" with their entire library of clinical studies.',
    results: [
      'Drafting of summary reports accelerated from 14 days to 4 hours.',
      'Zero privacy leaks through on-premise model hosting.',
      'Discovered 3 critical drug interaction correlations previously missed by manual review.',
      'Expanded research capacity by 2.5x without new hires.'
    ],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    expertise: ['Distributed Systems', 'Cloud Strategy', 'Engineering Leadership'],
    bio: 'Sarah leads Lumina\'s technical vision. With 15+ years at Silicon Valley giants, she specializes in transitioning enterprise monoliths into high-performance cloud ecosystems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Head of Product Strategy',
    expertise: ['UX Research', 'Market Analysis', 'SaaS Growth'],
    bio: 'Marcus bridges the gap between technical capability and business value. He ensures every line of code we write serves a measurable business outcome for our clients.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Principal AI Engineer',
    expertise: ['NLP', 'Predictive Modeling', 'Ethics in AI'],
    bio: 'Elena holds a PhD in Neural Networks from MIT. She oversees our AI implementations, focusing on accuracy, privacy, and the ethical application of LLMs in regulated sectors.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'VP of Global Delivery',
    expertise: ['Project Management', 'Compliance', 'Operations'],
    bio: 'David ensures our complex multi-month projects stay on track and within budget. He has managed over 100+ large-scale digital transformations for Fortune 500 clients.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    linkedin: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'smart-automation',
    title: 'How Modern Businesses Scale Faster with Smart Automation',
    excerpt: 'Learn how automation helps growing businesses reduce costs, improve accuracy, and scale operations without increasing team size.',
    date: 'Jan 15, 2024',
    author: 'Marcus Thorne',
    category: 'Business Automation',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>In the current economic landscape, scaling isn't just about hiring more people—it's about maximizing the efficiency of your existing team. Smart automation has moved from a "nice-to-have" to a fundamental requirement for staying competitive.</p>
      
      <h3>CRM Automation: Reclaiming the Sales Cycle</h3>
      <p>Manual data entry is the silent killer of sales productivity. By automating CRM workflows, businesses can ensure that leads are never dropped and data remains pristine. Automated follow-ups and lead scoring allow your sales team to focus on closing, not admin work.</p>
      
      <h3>Streamlining Customer Onboarding</h3>
      <p>First impressions are everything. Automated onboarding workflows ensure that every new client receives a consistent, high-touch experience from day one. By triggering welcome sequences and setup tasks automatically, you reduce time-to-value for your customers.</p>
      
      <h3>The Power of Marketing Automation</h3>
      <p>Effective marketing requires precision and timing. Automation tools allow businesses to deliver personalized content at scale based on user behavior, significantly increasing conversion rates without manual oversight of every campaign.</p>
    `
  },
  {
    id: 'high-performance-web',
    title: 'Why a High-Performance Website Is Critical for Business Growth',
    excerpt: 'A fast, well-structured website directly impacts conversions, SEO rankings, and user trust.',
    date: 'Jan 22, 2024',
    author: 'Sarah Chen',
    category: 'Web Strategy',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>Your website is your digital storefront, but in 2024, it's also your most important salesperson. A delay of even a few hundred milliseconds can lead to a significant drop in revenue.</p>
      
      <h3>Lead Generation at the Speed of Light</h3>
      <p>Performance isn't just about speed; it's about the friction-less path to conversion. High-performance sites load instantly, keeping potential leads engaged and reducing bounce rates that kill your ROI.</p>
      
      <h3>Building Instant Brand Credibility</h3>
      <p>Users associate site performance with company competence. A polished, fast-loading interface signals professional reliability, while a sluggish site can damage your brand's reputation before a user even reads your value proposition.</p>
      
      <h3>Conversion Optimization Through UI/UX</h3>
      <p>A well-structured technical foundation allows for complex interactions and smooth transitions that guide users toward a call to action. We focus on the intersection of aesthetics and engineering to maximize every visit.</p>
    `
  },
  {
    id: 'cloud-cost-performance',
    title: 'Optimizing Cloud Infrastructure for Cost and Performance',
    excerpt: 'Practical strategies businesses use to reduce cloud expenses while maintaining system reliability.',
    date: 'Feb 02, 2024',
    author: 'Sarah Chen',
    category: 'Engineering',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>Cloud waste is a billion-dollar problem. Many enterprises over-provision resources out of fear of downtime, but modern engineering allows for both lean costs and extreme reliability.</p>
      
      <h3>AWS Cost Optimization Strategies</h3>
      <p>Leveraging reserved instances, spot instances for non-critical workloads, and automated scheduling can slash your AWS bill. We implement "rightsourcing" to match your resource allocation exactly to your actual demand cycles.</p>
      
      <h3>Intelligent Resource Scaling</h3>
      <p>Static server allocation is a relic of the past. Horizontal pod autoscaling and serverless architectures allow your infrastructure to breathe with your traffic, ensuring you never pay for idle capacity while always being ready for a surge.</p>
      
      <h3>Advanced Infrastructure Monitoring</h3>
      <p>You cannot optimize what you do not measure. Comprehensive observability through tools like Prometheus and Grafana provides the granular data needed to identify performance bottlenecks and cost leaks in real-time.</p>
    `
  },
  {
    id: 'security-first-saas',
    title: 'Security-First Approach for SaaS and Enterprise Platforms',
    excerpt: 'How modern companies implement security best practices without slowing down development.',
    date: 'Feb 10, 2024',
    author: 'David Kim',
    category: 'Security',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>In the age of high-profile data breaches, security can no longer be a final step in the development process. It must be baked into the very first line of code.</p>
      
      <h3>Compliance Readiness as a Sales Tool</h3>
      <p>Being SOC2 or GDPR compliant isn't just about legal safety—it's a competitive advantage. Enterprise clients demand rigorous security standards. Having your compliance posture ready can shorten sales cycles by months.</p>
      
      <h3>Robust Data Protection Protocols</h3>
      <p>Encryption at rest and in transit is the bare minimum. We implement zero-knowledge architectures and granular access controls to ensure that even in the event of a perimeter breach, your most sensitive data remains unreadable.</p>
      
      <h3>Secure Architecture Planning</h3>
      <p>By implementing a security-first culture, engineering teams can identify vulnerabilities early in the design phase. Automated security scanning in the CI/CD pipeline ensures that no insecure code ever reaches production.</p>
    `
  }
];

export const FAQS: FAQ[] = [
  {
    category: 'General',
    question: 'How do you handle project pricing?',
    answer: 'We typically operate on a value-based fixed-fee model for defined transformations, ensuring predictable budgeting. For ongoing evolution and R&D, we offer dedicated specialist pods on a monthly retainer basis.'
  },
  {
    category: 'Technical',
    question: 'Can you work with our internal engineering team?',
    answer: 'Absolutely. We often act as a force-multiplier for internal teams, handling the complex "heavy lifting" of architecture while training your staff to maintain and evolve the new systems.'
  },
  {
    category: 'Security',
    question: 'Is my data used to train your AI models?',
    answer: 'No. We utilize private, air-gapped instances or private endpoint APIs where your data is strictly siloed. Your proprietary information never leaves your secure environment and is never used for general model training.'
  },
  {
    category: 'Pricing',
    question: 'What is the typical ROI timeline?',
    answer: 'Most clients see operational efficiency gains within the first 90 days. For large-scale cloud migrations, cost optimization usually achieves break-even against CAPEX within 12-14 months.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Lumina didn't just give us a roadmap; they built the engine. Our transaction speed is now a major selling point in our pitch deck.",
    author: "Jessica Vanes",
    position: "CEO",
    company: "GlobalPay Solutions",
    avatar: "https://i.pravatar.cc/150?u=jessica"
  },
  {
    id: 't2',
    quote: "The AI implementation Elena's team delivered reduced our documentation overhead by 70%. It literally saved our researchers from burnout.",
    author: "Dr. Aris Thorne",
    position: "Chief of Research",
    company: "MedStream",
    avatar: "https://i.pravatar.cc/150?u=aris"
  }
];
