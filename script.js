// Data Definitions
const DATA = {
    services: [
        {
            id: 'digital-transformation',
            title: 'Enterprise Digital Transformation',
            icon: '⚡',
            targetAudience: 'Mid-to-large enterprises on legacy infrastructure',
            fullContent: 'We architect end-to-end digital evolution. Our approach is about rebuilding the technical marrow to support rapid scaling and agile product delivery.',
            howItWorks: ['Technical Audit', 'Architecture Design', 'Phased Migration', 'Optimization'],
            outcomes: ['Lower CAPEX', 'CI/CD Standards', 'Unified Data Lake']
        },
        {
            id: 'ai-automation',
            title: 'Adaptive AI & LLM Automation',
            icon: '🤖',
            targetAudience: 'High-growth technology firms and service providers',
            fullContent: 'Generic AI tools don\'t solve specific bottlenecks. We build custom LLM implementations and RPA that integrate with your CRM.',
            howItWorks: ['Workflow Mapping', 'Custom Training', 'Secure Integration', 'Human-in-the-loop'],
            outcomes: ['3x Throughput', 'Real-time Insights', 'Proprietary AI Assets']
        },
        {
            id: 'cybersecurity',
            title: 'Zero-Trust Security & Compliance',
            icon: '🛡️',
            targetAudience: 'Regulated industries (Fintech, Healthtech)',
            fullContent: 'Security is a prerequisite for market trust. We implement ZTNA and automated compliance mapping for SOC2.',
            howItWorks: ['Surface Assessment', 'Perimeter Hardening', 'Compliance Automation', 'Managed SOC'],
            outcomes: ['Zero Incidents', '100% Audit Success', 'Immutable Trails']
        }
    ],
    blogs: [
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
                <p>Manual data entry is the silent killer of productivity. By automating CRM workflows, businesses ensure leads are never dropped and data remains pristine.</p>
                <h3>Customer Onboarding Workflows</h3>
                <p>First impressions are everything. Automated onboarding workflows ensure that every new client receives a consistent, high-touch experience from day one.</p>
                <h3>The Power of Marketing Automation</h3>
                <p>Effective marketing requires precision. Automation tools allow businesses to deliver personalized content at scale based on real user behavior.</p>
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
                <p>Your website is your digital storefront. In 2024, a delay of even a few hundred milliseconds can lead to a significant drop in revenue and brand credibility.</p>
                <h3>Lead Generation at the Speed of Light</h3>
                <p>Performance isn't just about speed; it's about the friction-less path to conversion. High-performance sites load instantly, keeping potential leads engaged.</p>
                <h3>Building Instant Brand Credibility</h3>
                <p>Users associate site performance with company competence. A polished, fast-loading interface signals professional reliability to every visitor.</p>
                <h3>Conversion Optimization Through UI/UX</h3>
                <p>A well-structured technical foundation allows for complex interactions and smooth transitions that guide users toward a clear call to action.</p>
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
                <p>Cloud waste is a multi-billion-dollar problem. Many enterprises over-provision resources, but modern engineering allows for lean costs and extreme reliability.</p>
                <h3>AWS Cost Optimization Strategies</h3>
                <p>Leveraging reserved instances, spot instances for non-critical workloads, and automated scheduling can slash your monthly AWS bill significantly.</p>
                <h3>Intelligent Resource Scaling</h3>
                <p>Static server allocation is a relic of the past. Horizontal pod autoscaling allows your infrastructure to breathe with your traffic, saving costs.</p>
                <h3>Proactive Infrastructure Monitoring</h3>
                <p>Comprehensive observability through tools like Prometheus provides the granular data needed to identify performance bottlenecks and cost leaks.</p>
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
                <p>In the age of high-profile breaches, security cannot be a final step. It must be baked into the very first line of code in every enterprise platform.</p>
                <h3>Compliance Readiness as a Sales Tool</h3>
                <p>Being SOC2 or GDPR compliant isn't just about safety—it's a competitive advantage. Enterprise clients demand rigorous security standards during procurement.</p>
                <h3>Robust Data Protection Protocols</h3>
                <p>Encryption at rest and in transit is the bare minimum. We implement zero-knowledge architectures to ensure that sensitive data remains private.</p>
                <h3>Secure Architecture Planning</h3>
                <p>By implementing a security-first culture, engineering teams identify vulnerabilities early in the design phase, avoiding costly fixes later.</p>
            `
        }
    ],
    faqs: [
        { q: 'How do you handle project pricing?', a: 'We typically operate on a value-based fixed-fee model for defined transformations, ensuring predictable budgeting.', cat: 'Pricing' },
        { q: 'Can you work with our internal engineering team?', a: 'Absolutely. We often act as a force-multiplier, handling the complex heavy lifting while training your staff.', cat: 'Technical' },
        { q: 'Is my data used to train your AI models?', a: 'No. We utilize private, air-gapped instances where your proprietary information never leaves your secure environment.', cat: 'Security' },
        { q: 'What is the typical ROI timeline?', a: 'Most clients see operational efficiency gains within 90 days. Cloud cost savings often break even against CAPEX within 12 months.', cat: 'General' }
    ],
    team: [
        { name: 'Sarah Chen', role: 'Chief Technology Officer', expertise: 'Distributed Systems', bio: '15+ years at Silicon Valley giants. Specializes in cloud-native ecosystems.', img: 'https://i.pravatar.cc/400?u=sarah' },
        { name: 'Marcus Thorne', role: 'Head of Product Strategy', expertise: 'SaaS Growth', bio: 'Bridges the gap between technical capability and business value for global clients.', img: 'https://i.pravatar.cc/400?u=marcus' },
        { name: 'Elena Rodriguez', role: 'Principal AI Engineer', expertise: 'NLP & Ethics', bio: 'PhD from MIT. Oversees AI accuracy and privacy in regulated sectors.', img: 'https://i.pravatar.cc/400?u=elena' },
        { name: 'David Kim', role: 'VP of Global Delivery', expertise: 'Compliance', bio: 'Has managed over 100+ large-scale digital transformations for Fortune 500s.', img: 'https://i.pravatar.cc/400?u=david' }
    ]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    injectNavFooter();
    initScrollReveal();
    handleNavigationHighlight();
    
    // Page specific initializers
    const path = window.location.pathname;
    if (document.getElementById('services-container')) renderServices();
    if (document.getElementById('blog-listing')) renderBlogListing();
    if (document.getElementById('blog-content')) renderBlogDetail();
    if (document.getElementById('faq-listing')) renderFAQs();
    if (document.getElementById('team-container')) renderTeam();
    if (document.getElementById('contact-form')) initContactForm();
});

// --- Components ---
function injectNavFooter() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navPlaceholder) {
        navPlaceholder.innerHTML = document.querySelector('nav').outerHTML;
    }
    initNavBehavior();

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div class="col-span-1">
                            <a href="index.html" class="flex items-center space-x-2 mb-6">
                                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
                                <span class="text-xl font-bold tracking-tight text-gray-900">Lumina</span>
                            </a>
                            <p class="text-gray-500 text-sm">Engineering the future of enterprise intelligence. We help global organizations navigate the digital frontier.</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-6">Services</h4>
                            <ul class="space-y-4 text-sm text-gray-500">
                                <li><a href="services.html" class="hover:text-blue-600">Cloud Infrastructure</a></li>
                                <li><a href="services.html" class="hover:text-blue-600">AI Automation</a></li>
                                <li><a href="services.html" class="hover:text-blue-600">Cybersecurity</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-6">Company</h4>
                            <ul class="space-y-4 text-sm text-gray-500">
                                <li><a href="team.html" class="hover:text-blue-600">Team</a></li>
                                <li><a href="blog.html" class="hover:text-blue-600">Blog</a></li>
                                <li><a href="contact.html" class="hover:text-blue-600">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-6">Stay Connected</h4>
                            <p class="text-xs text-gray-400 mb-4">© 2024 Lumina Dynamics Inc.</p>
                            <div class="flex space-x-4">
                                <span class="w-5 h-5 bg-gray-200 rounded"></span>
                                <span class="w-5 h-5 bg-gray-200 rounded"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>`;
    }
}

function initNavBehavior() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('glass', 'py-3', 'shadow-sm', 'border-b', 'border-gray-100');
            navbar.classList.remove('py-5');
        } else {
            navbar.classList.remove('glass', 'py-3', 'shadow-sm', 'border-b', 'border-gray-100');
            navbar.classList.add('py-5');
        }
    });

    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.onclick = () => menu.classList.toggle('hidden');
    }
}

function handleNavigationHighlight() {
    const links = document.querySelectorAll('.nav-link');
    const path = window.location.pathname;
    const currentFile = path.split('/').pop() || 'index.html';
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentFile) {
            link.classList.add('text-blue-600');
            link.classList.remove('text-gray-600');
        } else {
            link.classList.remove('text-blue-600');
            link.classList.add('text-gray-600');
        }
    });
}

// --- Features ---
function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;
    
    container.innerHTML = DATA.services.map((s, i) => `
        <div class="reveal flex flex-col lg:flex-row gap-20 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
            <div class="lg:w-1/2">
                <div class="inline-block p-4 bg-blue-50 rounded-2xl text-4xl mb-8 shadow-sm">${s.icon}</div>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">${s.title}</h2>
                <p class="text-lg text-gray-600 mb-12 leading-relaxed">${s.fullContent}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 class="font-bold text-gray-900 mb-4">Core Methodology</h4>
                        <ul class="space-y-3 text-sm text-gray-500">
                            ${s.howItWorks.map(h => `<li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>${h}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-50">
                        <h4 class="font-bold mb-4">Business Outcomes</h4>
                        <ul class="space-y-3 text-sm text-blue-50">
                            ${s.outcomes.map(o => `<li class="flex items-center"><span class="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>${o}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <a href="contact.html" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">Request Technical Review</a>
            </div>
            <div class="lg:w-1/2 w-full">
                <div class="aspect-[4/5] bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    `).join('');
    initScrollReveal();
}

function renderBlogListing() {
    const container = document.getElementById('blog-listing');
    if (!container) return;
    
    container.innerHTML = DATA.blogs.map(post => `
        <div class="reveal flex flex-col group h-full">
            <a href="blog-detail.html?id=${post.id}" class="block overflow-hidden rounded-[2.5rem] shadow-sm mb-8 bg-gray-100">
                <img src="${post.image}" alt="${post.title}" class="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000">
            </a>
            <div class="flex-1 px-2">
                <div class="flex items-center space-x-3 mb-4">
                    <span class="text-blue-600 font-black text-[10px] uppercase tracking-widest">${post.category}</span>
                    <span class="text-gray-300">•</span>
                    <span class="text-gray-500 text-[10px] font-bold">${post.date}</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                    <a href="blog-detail.html?id=${post.id}">${post.title}</a>
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3">${post.excerpt}</p>
                <div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span class="text-xs font-bold text-gray-700">${post.author}</span>
                    <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest">${post.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
    initScrollReveal();
}

function renderBlogDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const post = DATA.blogs.find(p => p.id === id);
    const container = document.getElementById('blog-content');
    if (!container) return;

    if (!post) {
        container.innerHTML = `<div class="text-center py-20"><h2 class="text-4xl font-bold mb-4">Post not found.</h2><a href="blog.html" class="text-blue-600 font-bold underline">Back to Insights</a></div>`;
        return;
    }

    container.innerHTML = `
        <div class="reveal">
            <a href="blog.html" class="inline-flex items-center text-blue-600 font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                Back to Insights
            </a>
            <div class="mb-12">
                <span class="px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">${post.category}</span>
                <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">${post.title}</h1>
                <div class="flex items-center space-x-4">
                    <img src="https://i.pravatar.cc/100?u=${post.author}" class="w-12 h-12 rounded-full border-2 border-white shadow-sm">
                    <div>
                        <div class="font-bold text-gray-900">${post.author}</div>
                        <div class="text-xs text-gray-500 font-medium">${post.date} • ${post.readTime}</div>
                    </div>
                </div>
            </div>
            <div class="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 bg-gray-100">
                <img src="${post.image}" class="w-full h-full object-cover">
            </div>
            <div class="prose max-w-none text-gray-700 text-lg leading-relaxed font-light mb-20">
                ${post.content}
            </div>
            <div class="bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                <h3 class="text-3xl font-bold mb-6">Ready to scale your business?</h3>
                <p class="text-gray-400 mb-10 max-w-2xl mx-auto">Our engineering team can help you implement these exact strategies.</p>
                <a href="contact.html" class="inline-block bg-white text-gray-900 px-10 py-4 rounded-full font-black hover:bg-blue-50 transition-all">Start Technical Consultation</a>
            </div>
        </div>`;
    initScrollReveal();
}

function renderFAQs() {
    const container = document.getElementById('faq-listing');
    if (!container) return;
    
    container.innerHTML = DATA.faqs.map((f, i) => `
        <div class="reveal bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button class="faq-btn w-full text-left p-10 flex justify-between items-center group">
                <div>
                    <span class="text-[10px] font-black text-blue-600 uppercase tracking-widest">${f.cat}</span>
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">${f.q}</h3>
                </div>
                <div class="faq-icon w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out bg-gray-50/30">
                <div class="p-10 pt-0 text-lg text-gray-600 leading-relaxed border-t border-gray-50">${f.a}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = answer.classList.contains('active-faq');
            
            // Close all others
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active-faq', 'max-h-[500px]', 'opacity-100');
                a.classList.add('max-h-0', 'opacity-0');
            });
            document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');
            
            if (!isOpen) {
                answer.classList.add('active-faq', 'max-h-[500px]', 'opacity-100');
                answer.classList.remove('max-h-0', 'opacity-0');
                icon.style.transform = 'rotate(180deg)';
                icon.classList.add('bg-blue-600', 'text-white');
            } else {
                icon.classList.remove('bg-blue-600', 'text-white');
            }
        });
    });
    initScrollReveal();
}

function renderTeam() {
    const container = document.getElementById('team-container');
    if (!container) return;
    
    container.innerHTML = DATA.team.map(m => `
        <div class="reveal flex flex-col md:flex-row gap-10 items-start p-10 bg-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all duration-500">
            <div class="w-full md:w-48 h-48 rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg">
                <img src="${m.img}" alt="${m.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-grow">
                <h3 class="text-2xl font-bold text-gray-900 mb-1">${m.name}</h3>
                <p class="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">${m.role}</p>
                <p class="text-gray-500 mb-6 leading-relaxed">${m.bio}</p>
                <span class="px-3 py-1 bg-gray-100 text-gray-400 rounded-lg text-[10px] font-black uppercase tracking-widest">${m.expertise}</span>
            </div>
        </div>
    `).join('');
    initScrollReveal();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (!form || !success) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
    });
}
