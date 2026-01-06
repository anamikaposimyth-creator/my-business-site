// Data Definitions
const DATA = {
    services: [
        {
            id: 'digital-transformation',
            title: 'Enterprise Digital Transformation',
            icon: '⚡',
            targetAudience: 'Mid-to-large enterprises on legacy infrastructure',
            fullContent: 'We architect end-to-end digital evolution. Our approach is about rebuilding the technical marrow to support rapid scaling.',
            howItWorks: ['Technical Audit', 'Architecture Design', 'Phased Migration', 'Optimization'],
            outcomes: ['Lower CAPEX', 'CI/CD Standards', 'Unified Data Lake']
        },
        {
            id: 'ai-automation',
            title: 'Adaptive AI & LLM Automation',
            icon: '🤖',
            targetAudience: 'High-growth technology firms and service providers',
            fullContent: 'Generic AI tools don\'t solve specific bottlenecks. We build custom LLM implementations and RPA.',
            howItWorks: ['Workflow Mapping', 'Custom Training', 'Secure Integration', 'Human-in-the-loop'],
            outcomes: ['3x Throughput', 'Real-time Insights', 'Proprietary AI Assets']
        },
        {
            id: 'cybersecurity',
            title: 'Zero-Trust Security & Compliance',
            icon: '🛡️',
            targetAudience: 'Regulated industries (Fintech, Healthtech)',
            fullContent: 'Security is a prerequisite for market trust. We implement ZTNA and automated compliance mapping.',
            howItWorks: ['Surface Assessment', 'Perimeter Hardening', 'Compliance Automation', 'Managed SOC'],
            outcomes: ['Zero Incidents', '100% Audit Success', 'Immutable Trails']
        }
    ],
    blogs: [
        {
            id: 'smart-automation',
            title: 'How Modern Businesses Scale Faster with Smart Automation',
            excerpt: 'Learn how automation helps growing businesses reduce costs and improve accuracy.',
            date: 'Jan 15, 2024',
            author: 'Marcus Thorne',
            category: 'Business Automation',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
            content: `<h3>CRM Automation: Reclaiming the Sales Cycle</h3><p>Manual data entry is the silent killer of productivity. By automating CRM workflows, businesses ensure leads are never dropped.</p><h3>The Power of Marketing Automation</h3><p>Automation allows personalized content at scale based on user behavior.</p>`
        },
        {
            id: 'high-performance-web',
            title: 'Why a High-Performance Website Is Critical for Business Growth',
            excerpt: 'A fast, well-structured website directly impacts conversions and user trust.',
            date: 'Jan 22, 2024',
            author: 'Sarah Chen',
            category: 'Web Strategy',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            content: `<h3>Lead Generation at the Speed of Light</h3><p>High-performance sites load instantly, keeping potential leads engaged and reducing bounce rates.</p><h3>Conversion Optimization Through UI/UX</h3><p>A well-structured technical foundation guides users toward a call to action.</p>`
        },
        {
            id: 'cloud-cost-performance',
            title: 'Optimizing Cloud Infrastructure for Cost and Performance',
            excerpt: 'Practical strategies to reduce expenses while maintaining reliability.',
            date: 'Feb 02, 2024',
            author: 'Sarah Chen',
            category: 'Engineering',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
            content: `<h3>AWS Cost Optimization</h3><p>Leveraging reserved instances and automated scheduling can slash your AWS bill.</p><h3>Intelligent Resource Scaling</h3><p>Autoscaling allow your infrastructure to breathe with your traffic.</p>`
        },
        {
            id: 'security-first-saas',
            title: 'Security-First Approach for SaaS and Enterprise Platforms',
            excerpt: 'Implementing security best practices without slowing down development.',
            date: 'Feb 10, 2024',
            author: 'David Kim',
            category: 'Security',
            readTime: '9 min read',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
            content: `<h3>Compliance Readiness as a Sales Tool</h3><p>Being SOC2 compliant is a competitive advantage. Enterprise clients demand rigorous standards.</p><h3>Secure Architecture Planning</h3><p>Identifying vulnerabilities early in the design phase ensures security is baked in.</p>`
        }
    ],
    faqs: [
        { q: 'How do you handle project pricing?', a: 'Value-based fixed-fee models for defined transformations.', cat: 'Pricing' },
        { q: 'Is my data used for AI training?', a: 'No. We utilize private, air-gapped instances.', cat: 'Security' }
    ],
    team: [
        { name: 'Sarah Chen', role: 'CTO', expertise: 'Distributed Systems', bio: '15+ years at Silicon Valley giants.', img: 'https://i.pravatar.cc/400?u=sarah' },
        { name: 'Marcus Thorne', role: 'Product Strategy', expertise: 'SaaS Growth', bio: 'Bridges technical capability and business value.', img: 'https://i.pravatar.cc/400?u=marcus' }
    ]
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    injectNavFooter();
    initScrollReveal();
    handleNavigationHighlight();
    
    // Page specific initializers
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
        initNavBehavior();
    }
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
                            <p class="text-gray-500 text-sm">Engineering the future of enterprise intelligence.</p>
                        </div>
                        <div><h4 class="font-semibold mb-6">Services</h4><ul class="space-y-4 text-sm text-gray-500"><li><a href="services.html">Cloud Infra</a></li><li><a href="services.html">AI Automation</a></li></ul></div>
                        <div><h4 class="font-semibold mb-6">Company</h4><ul class="space-y-4 text-sm text-gray-500"><li><a href="team.html">Team</a></li><li><a href="blog.html">Blog</a></li></ul></div>
                        <div><h4 class="font-semibold mb-6">Join Us</h4><p class="text-xs text-gray-400">© 2024 Lumina Dynamics Inc.</p></div>
                    </div>
                </div>
            </footer>`;
    }
}

function initNavBehavior() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('glass', 'py-3', 'shadow-sm', 'border-b', 'border-gray-100');
            navbar.classList.remove('bg-transparent', 'py-5');
        } else {
            navbar.classList.remove('glass', 'py-3', 'shadow-sm', 'border-b', 'border-gray-100');
            navbar.classList.add('bg-transparent', 'py-5');
        }
    });

    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

function handleNavigationHighlight() {
    const links = document.querySelectorAll('.nav-link');
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        if (link.getAttribute('href') === currentFile) {
            link.classList.add('text-blue-600');
            link.classList.remove('text-gray-600');
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
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function renderServices() {
    const container = document.getElementById('services-container');
    container.innerHTML = DATA.services.map((s, i) => `
        <div class="reveal flex flex-col lg:flex-row gap-20 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}">
            <div class="lg:w-1/2">
                <div class="inline-block p-4 bg-blue-50 rounded-2xl text-4xl mb-8">${s.icon}</div>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">${s.title}</h2>
                <p class="text-lg text-gray-600 mb-12">${s.fullContent}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 class="font-bold mb-4">Methodology</h4>
                        <ul class="space-y-2 text-sm text-gray-500">${s.howItWorks.map(h => `<li>• ${h}</li>`).join('')}</ul>
                    </div>
                    <div class="bg-blue-600 p-8 rounded-3xl text-white">
                        <h4 class="font-bold mb-4">Outcomes</h4>
                        <ul class="space-y-2 text-sm text-blue-50">${s.outcomes.map(o => `<li>✓ ${o}</li>`).join('')}</ul>
                    </div>
                </div>
                <a href="contact.html" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold">Inquire</a>
            </div>
            <div class="lg:w-1/2 w-full"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" class="rounded-[4rem] shadow-2xl"></div>
        </div>
    `).join('');
    initScrollReveal();
}

function renderBlogListing() {
    const container = document.getElementById('blog-listing');
    container.innerHTML = DATA.blogs.map(post => `
        <div class="reveal flex flex-col group h-full">
            <a href="blog-detail.html?id=${post.id}" class="block overflow-hidden rounded-[2.5rem] shadow-sm mb-8">
                <img src="${post.image}" alt="${post.title}" class="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700">
            </a>
            <div class="flex-1">
                <div class="flex items-center space-x-3 mb-4 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    <span>${post.category}</span><span class="text-gray-300">•</span><span>${post.date}</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors"><a href="blog-detail.html?id=${post.id}">${post.title}</a></h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-8">${post.excerpt}</p>
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

    if (!post) {
        container.innerHTML = `<div class="text-center py-20"><h2 class="text-4xl font-bold">Post not found.</h2><a href="blog.html" class="text-blue-600 underline">Back to listing</a></div>`;
        return;
    }

    container.innerHTML = `
        <div class="reveal">
            <a href="blog.html" class="inline-flex items-center text-blue-600 font-bold text-sm mb-12">← Back to Insights</a>
            <div class="mb-12">
                <span class="px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-full mb-6 inline-block">${post.category}</span>
                <h1 class="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">${post.title}</h1>
                <div class="flex items-center space-x-4">
                    <img src="https://i.pravatar.cc/100?u=${post.author}" class="w-12 h-12 rounded-full">
                    <div><div class="font-bold">${post.author}</div><div class="text-xs text-gray-500">${post.date} • ${post.readTime}</div></div>
                </div>
            </div>
            <img src="${post.image}" class="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl mb-16">
            <div class="prose max-w-none text-gray-700">${post.content}</div>
        </div>`;
    initScrollReveal();
}

function renderFAQs() {
    const container = document.getElementById('faq-listing');
    container.innerHTML = DATA.faqs.map((f, i) => `
        <div class="reveal bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm">
            <button class="faq-btn w-full text-left p-10 flex justify-between items-center group">
                <div><span class="text-[10px] font-black text-blue-600 uppercase tracking-widest">${f.cat}</span><h3 class="text-xl font-bold text-gray-900">${f.q}</h3></div>
                <div class="faq-icon w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300">↓</div>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden opacity-0 transition-all duration-500 bg-gray-50/30">
                <div class="p-10 pt-0 text-lg text-gray-600 leading-relaxed">${f.a}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = answer.classList.contains('max-h-[500px]');
            
            // Close others
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('max-h-[500px]', 'opacity-100');
                a.classList.add('max-h-0', 'opacity-0');
            });
            
            if (!isOpen) {
                answer.classList.add('max-h-[500px]', 'opacity-100');
                answer.classList.remove('max-h-0', 'opacity-0');
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    initScrollReveal();
}

function renderTeam() {
    const container = document.getElementById('team-container');
    container.innerHTML = DATA.team.map(m => `
        <div class="reveal p-10 bg-white border border-gray-100 rounded-[3rem] hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8">
            <img src="${m.img}" class="w-48 h-48 rounded-[2rem] object-cover">
            <div>
                <h3 class="text-2xl font-bold">${m.name}</h3>
                <p class="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-4">${m.role}</p>
                <p class="text-gray-500 mb-4">${m.bio}</p>
                <span class="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-lg text-gray-400 uppercase tracking-widest">${m.expertise}</span>
            </div>
        </div>
    `).join('');
    initScrollReveal();
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
    });
}