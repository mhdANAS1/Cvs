import React, { useState } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');

  const services: Service[] = [
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      description: "نقوم بتطوير مواقع إلكترونية حديثة ومتجاوبة تلبي احتياجات عملك",
      icon: "🌐",
      features: ["تصميم متجاوب", "تحسين محركات البحث", "واجهة مستخدم سهلة", "أمان عالي"]
    },
    {
      id: 2,
      title: "تطوير تطبيقات الموبايل",
      description: "تطبيقات أندرويد و iOS عالية الجودة مع تجربة مستخدم ممتازة",
      icon: "📱",
      features: ["أندرويد و iOS", "تصميم عصري", "أداء عالي", "دعم فني"]
    },
    {
      id: 3,
      title: "لوحات تحكم الأعمال",
      description: "أنظمة إدارة مخصصة لتحسين عمليات عملك وزيادة الإنتاجية",
      icon: "📊",
      features: ["إدارة البيانات", "تقارير مفصلة", "واجهة سهلة", "تكامل مع الأنظمة"]
    },
    {
      id: 4,
      title: "تطبيقات التواصل الاجتماعي",
      description: "تطبيقات تواصل اجتماعي مبتكرة مع ميزات متقدمة",
      icon: "💬",
      features: ["رسائل فورية", "مشاركة الوسائط", "إشعارات ذكية", "خصوصية عالية"]
    },
    {
      id: 5,
      title: "حلول برمجية للأعمال",
      description: "أنظمة ERP و CRM مخصصة لتحسين إدارة عملك",
      icon: "🏢",
      features: ["إدارة الموارد", "إدارة العملاء", "تحليل البيانات", "تقارير شاملة"]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "متجر إلكتروني متكامل",
      description: "منصة تسوق إلكتروني مع نظام دفع وإدارة مخزون",
      image: "🛒",
      category: "website",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "تطبيق توصيل الطعام",
      description: "تطبيق موبايل لتوصيل الطعام مع نظام تتبع GPS",
      image: "🍕",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps", "Push Notifications"]
    },
    {
      id: 3,
      title: "نظام إدارة المستشفى",
      description: "لوحة تحكم شاملة لإدارة المرضى والمواعيد",
      image: "🏥",
      category: "dashboard",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"]
    },
    {
      id: 4,
      title: "منصة تعليمية",
      description: "موقع تعليمي تفاعلي مع نظام إدارة الدورات",
      image: "📚",
      category: "website",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Video Streaming"]
    },
    {
      id: 5,
      title: "تطبيق اجتماعي",
      description: "منصة تواصل اجتماعي مع ميزات مشاركة الصور والفيديو",
      image: "📸",
      category: "social",
      technologies: ["Flutter", "Firebase", "Cloud Storage", "Real-time Chat"]
    },
    {
      id: 6,
      title: "نظام إدارة المخزون",
      description: "حل برمجي متكامل لإدارة المخزون والمبيعات",
      image: "📦",
      category: "business",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const renderHomePage = () => (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>تكنو بلس</h1>
          <h2>شركة تطوير البرمجيات الحديثة</h2>
          <p>نحول أفكارك إلى حلول رقمية مبتكرة تلبي احتياجات عملك</p>
          <div className="hero-buttons">
            <button onClick={() => setCurrentPage('services')} className="primary-btn">
              خدماتنا
            </button>
            <button onClick={() => setCurrentPage('contact')} className="secondary-btn">
              تواصل معنا
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>لماذا تختار تكنو بلس؟</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>تطوير سريع</h3>
            <p>نقدم حلول سريعة وفعالة تلبي احتياجاتك</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>تصميم مبتكر</h3>
            <p>تصاميم عصرية ومبتكرة تجذب انتباه عملائك</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>أمان عالي</h3>
            <p>حماية شاملة لبياناتك وتطبيقاتك</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>متجاوب بالكامل</h3>
            <p>يعمل على جميع الأجهزة والشاشات</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50+</h3>
            <p>مشروع مكتمل</p>
          </div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>عميل راضي</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>سنوات خبرة</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>دعم فني</p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServicesPage = () => (
    <div className="services-page">
      <section className="page-header">
        <h1>خدماتنا</h1>
        <p>نقدم مجموعة شاملة من خدمات تطوير البرمجيات</p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => setCurrentPage('contact')} className="service-btn">
              اطلب عرض سعر
            </button>
          </div>
        ))}
      </section>
    </div>
  );

  const renderPortfolioPage = () => (
    <div className="portfolio-page">
      <section className="page-header">
        <h1>معرض أعمالنا</h1>
        <p>نفخر بعرض مجموعة من مشاريعنا المنجزة</p>
      </section>

      <section className="portfolio-filters">
        <button 
          className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('all')}
        >
          جميع المشاريع
        </button>
        <button 
          className={activeFilter === 'website' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('website')}
        >
          المواقع الإلكترونية
        </button>
        <button 
          className={activeFilter === 'mobile' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('mobile')}
        >
          تطبيقات الموبايل
        </button>
        <button 
          className={activeFilter === 'dashboard' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('dashboard')}
        >
          لوحات التحكم
        </button>
        <button 
          className={activeFilter === 'social' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('social')}
        >
          التطبيقات الاجتماعية
        </button>
        <button 
          className={activeFilter === 'business' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('business')}
        >
          حلول الأعمال
        </button>
      </section>

      <section className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );

  const renderAboutPage = () => (
    <div className="about-page">
      <section className="page-header">
        <h1>من نحن</h1>
        <p>تعرف على شركة تكنو بلس ورؤيتنا للمستقبل</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>قصتنا</h2>
          <p>
            تكنو بلس هي شركة تطوير برمجيات حديثة تأسست بهدف تقديم حلول رقمية مبتكرة 
            تلبي احتياجات الشركات والأفراد. نحن نؤمن بقوة التكنولوجيا في تحويل 
            الأفكار إلى واقع ملموس.
          </p>
          
          <h2>رؤيتنا</h2>
          <p>
            نسعى لأن نكون الشريك الموثوق في رحلة التحول الرقمي، ونقدم حلول تقنية 
            عالية الجودة تساعد عملاءنا على النمو والتطور في العصر الرقمي.
          </p>

          <h2>مهمتنا</h2>
          <p>
            تقديم خدمات تطوير برمجيات متميزة مع التركيز على الجودة والابتكار 
            والرضا الكامل للعملاء، مع ضمان التسليم في الوقت المحدد.
          </p>
        </div>

        <div className="team-section">
          <h2>فريق العمل</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>أحمد محمد</h3>
              <p>مدير التطوير</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>سارة أحمد</h3>
              <p>مصممة واجهات المستخدم</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>محمد علي</h3>
              <p>مطور تطبيقات الموبايل</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>فاطمة حسن</h3>
              <p>مديرة المشاريع</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Contact Form Data:', formData);
      alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
    };

    const handleChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
      <div className="contact-page">
        <section className="page-header">
          <h1>تواصل معنا</h1>
          <p>نحن هنا لمساعدتك في تحقيق مشروعك</p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>معلومات التواصل</h2>
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>البريد الإلكتروني</h3>
                <p>info@technoplus.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h3>واتساب</h3>
                <p>+966 50 123 4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>العنوان</h3>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>ساعات العمل</h3>
                <p>الأحد - الخميس: 9:00 ص - 6:00 م</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>الاسم الكامل *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>البريد الإلكتروني *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>الخدمة المطلوبة</label>
                <select
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                >
                  <option value="">اختر الخدمة</option>
                  <option value="website">تطوير المواقع</option>
                  <option value="mobile">تطبيقات الموبايل</option>
                  <option value="dashboard">لوحات التحكم</option>
                  <option value="social">التطبيقات الاجتماعية</option>
                  <option value="business">حلول الأعمال</option>
                </select>
              </div>
              <div className="form-group">
                <label>الرسالة *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => setCurrentPage('home')}>
            <span className="logo-icon">🚀</span>
            <span className="logo-text">تكنو بلس</span>
          </div>
          <div className="nav-menu">
            <button 
              className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('home')}
            >
              الرئيسية
            </button>
            <button 
              className={currentPage === 'services' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('services')}
            >
              خدماتنا
            </button>
            <button 
              className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('portfolio')}
            >
              أعمالنا
            </button>
            <button 
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('about')}
            >
              من نحن
            </button>
            <button 
              className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('contact')}
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'services' && renderServicesPage()}
        {currentPage === 'portfolio' && renderPortfolioPage()}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'contact' && renderContactPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>تكنو بلس</h3>
            <p>شركة تطوير البرمجيات الحديثة</p>
            <p>نحول أفكارك إلى حلول رقمية مبتكرة</p>
          </div>
          <div className="footer-section">
            <h3>خدماتنا</h3>
            <ul>
              <li>تطوير المواقع</li>
              <li>تطبيقات الموبايل</li>
              <li>لوحات التحكم</li>
              <li>حلول الأعمال</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>تواصل معنا</h3>
            <p>📧 info@technoplus.com</p>
            <p>📱 +966 50 123 4567</p>
            <p>📍 الرياض، السعودية</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 تكنو بلس. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
