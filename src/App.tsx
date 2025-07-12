import React, { useState, useEffect } from 'react';
import './App.css';

interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
  technologies: string[];
}

interface Service {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  features: string[];
  featuresEn: string[];
}

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  date: string;
  read: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [darkMode, setDarkMode] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  // Admin data state
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Apply dark mode and RTL to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [darkMode, language]);

  // Load data from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setContactMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  const handleContactChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: ContactMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      read: false
    };
    setContactMessages(prev => [newMessage, ...prev]);
    console.log('Contact Form Data:', formData);
    alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.' : 'Message sent successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '', service: '' });
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setIsAdmin(true);
      setShowLogin(false);
      setAdminPassword('');
    } else {
      alert(language === 'ar' ? 'كلمة المرور غير صحيحة' : 'Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentPage('home');
  };

  const deleteMessage = (id: number) => {
    setContactMessages(prev => prev.filter(msg => msg.id !== id));
  };

  const markAsRead = (id: number) => {
    setContactMessages(prev => 
      prev.map(msg => msg.id === id ? { ...msg, read: true } : msg)
    );
  };

  const services: Service[] = [
    {
      id: 1,
      title: "تطوير المواقع الإلكترونية",
      titleEn: "Website Development",
      description: "نقوم بتطوير مواقع إلكترونية حديثة ومتجاوبة تلبي احتياجات عملك",
      descriptionEn: "We develop modern and responsive websites that meet your business needs",
      icon: "🌐",
      features: ["تصميم متجاوب", "تحسين محركات البحث", "واجهة مستخدم سهلة", "أمان عالي"],
      featuresEn: ["Responsive Design", "SEO Optimization", "User-Friendly Interface", "High Security"]
    },
    {
      id: 2,
      title: "تطوير تطبيقات الموبايل",
      titleEn: "Mobile App Development",
      description: "تطبيقات أندرويد و iOS عالية الجودة مع تجربة مستخدم ممتازة",
      descriptionEn: "High-quality Android and iOS apps with excellent user experience",
      icon: "📱",
      features: ["أندرويد و iOS", "تصميم عصري", "أداء عالي", "دعم فني"],
      featuresEn: ["Android & iOS", "Modern Design", "High Performance", "Technical Support"]
    },
    {
      id: 3,
      title: "لوحات تحكم الأعمال",
      titleEn: "Business Dashboards",
      description: "أنظمة إدارة مخصصة لتحسين عمليات عملك وزيادة الإنتاجية",
      descriptionEn: "Custom management systems to improve your business operations and increase productivity",
      icon: "📊",
      features: ["إدارة البيانات", "تقارير مفصلة", "واجهة سهلة", "تكامل مع الأنظمة"],
      featuresEn: ["Data Management", "Detailed Reports", "Easy Interface", "System Integration"]
    },
    {
      id: 4,
      title: "تطبيقات التواصل الاجتماعي",
      titleEn: "Social Media Apps",
      description: "تطبيقات تواصل اجتماعي مبتكرة مع ميزات متقدمة",
      descriptionEn: "Innovative social media apps with advanced features",
      icon: "💬",
      features: ["رسائل فورية", "مشاركة الوسائط", "إشعارات ذكية", "خصوصية عالية"],
      featuresEn: ["Instant Messaging", "Media Sharing", "Smart Notifications", "High Privacy"]
    },
    {
      id: 5,
      title: "حلول برمجية للأعمال",
      titleEn: "Business Software Solutions",
      description: "أنظمة ERP و CRM مخصصة لتحسين إدارة عملك",
      descriptionEn: "Custom ERP and CRM systems to improve your business management",
      icon: "🏢",
      features: ["إدارة الموارد", "إدارة العملاء", "تحليل البيانات", "تقارير شاملة"],
      featuresEn: ["Resource Management", "Customer Management", "Data Analytics", "Comprehensive Reports"]
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "متجر إلكتروني متكامل",
      titleEn: "Complete E-commerce Store",
      description: "منصة تسوق إلكتروني مع نظام دفع وإدارة مخزون",
      descriptionEn: "E-commerce platform with payment system and inventory management",
      image: "🛒",
      category: "website",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "تطبيق توصيل الطعام",
      titleEn: "Food Delivery App",
      description: "تطبيق موبايل لتوصيل الطعام مع نظام تتبع GPS",
      descriptionEn: "Mobile app for food delivery with GPS tracking system",
      image: "🍕",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Google Maps", "Push Notifications"]
    },
    {
      id: 3,
      title: "نظام إدارة المستشفى",
      titleEn: "Hospital Management System",
      description: "لوحة تحكم شاملة لإدارة المرضى والمواعيد",
      descriptionEn: "Comprehensive dashboard for patient and appointment management",
      image: "🏥",
      category: "dashboard",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"]
    },
    {
      id: 4,
      title: "منصة تعليمية",
      titleEn: "Educational Platform",
      description: "موقع تعليمي تفاعلي مع نظام إدارة الدورات",
      descriptionEn: "Interactive educational website with course management system",
      image: "📚",
      category: "website",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Video Streaming"]
    },
    {
      id: 5,
      title: "تطبيق اجتماعي",
      titleEn: "Social App",
      description: "منصة تواصل اجتماعي مع ميزات مشاركة الصور والفيديو",
      descriptionEn: "Social networking platform with photo and video sharing features",
      image: "📸",
      category: "social",
      technologies: ["Flutter", "Firebase", "Cloud Storage", "Real-time Chat"]
    },
    {
      id: 6,
      title: "نظام إدارة المخزون",
      titleEn: "Inventory Management System",
      description: "حل برمجي متكامل لإدارة المخزون والمبيعات",
      descriptionEn: "Integrated software solution for inventory and sales management",
      image: "📦",
      category: "business",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Translations
  const t = {
    ar: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      about: 'من نحن',
      contact: 'تواصل معنا',
      dashboard: 'لوحة التحكم',
      logout: 'تسجيل خروج',
      darkMode: 'الوضع المظلم',
      lightMode: 'الوضع الفاتح',
      language: 'اللغة',
      companyName: 'تكنو بلس',
      companyDesc: 'شركة تطوير البرمجيات الحديثة',
      heroTitle: 'نحول أفكارك إلى حلول رقمية مبتكرة',
      whyChooseUs: 'لماذا تختار تكنو بلس؟',
      fastDevelopment: 'تطوير سريع',
      innovativeDesign: 'تصميم مبتكر',
      highSecurity: 'أمان عالي',
      fullyResponsive: 'متجاوب بالكامل',
      completedProjects: 'مشروع مكتمل',
      satisfiedClients: 'عميل راضي',
      yearsExperience: 'سنوات خبرة',
      support247: 'دعم فني',
      ourServices: 'خدماتنا',
      servicesDesc: 'نقدم مجموعة شاملة من خدمات تطوير البرمجيات',
      requestQuote: 'اطلب عرض سعر',
      ourWork: 'معرض أعمالنا',
      portfolioDesc: 'نفخر بعرض مجموعة من مشاريعنا المنجزة',
      allProjects: 'جميع المشاريع',
      websites: 'المواقع الإلكترونية',
      mobileApps: 'تطبيقات الموبايل',
      dashboards: 'لوحات التحكم',
      socialApps: 'التطبيقات الاجتماعية',
      businessSolutions: 'حلول الأعمال',
      aboutUs: 'من نحن',
      aboutDesc: 'تعرف على شركة تكنو بلس ورؤيتنا للمستقبل',
      ourStory: 'قصتنا',
      ourVision: 'رؤيتنا',
      ourMission: 'مهمتنا',
      ourTeam: 'فريق العمل',
      contactUs: 'تواصل معنا',
      contactDesc: 'نحن هنا لمساعدتك في تحقيق مشروعك',
      contactInfo: 'معلومات التواصل',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      address: 'العنوان',
      workingHours: 'ساعات العمل',
      sendMessage: 'أرسل لنا رسالة',
      fullName: 'الاسم الكامل',
      phoneNumber: 'رقم الهاتف',
      requiredService: 'الخدمة المطلوبة',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      messageSent: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      adminLogin: 'تسجيل دخول المدير',
      password: 'كلمة المرور',
      login: 'تسجيل دخول',
      incorrectPassword: 'كلمة المرور غير صحيحة',
      messages: 'الرسائل',
      markAsRead: 'تحديد كمقروءة',
      delete: 'حذف',
      edit: 'تعديل',
      save: 'حفظ',
      cancel: 'إلغاء',
      allRightsReserved: 'جميع الحقوق محفوظة'
    },
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      dashboard: 'Dashboard',
      logout: 'Logout',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      language: 'Language',
      companyName: 'Techno Plus',
      companyDesc: 'Modern Software Development Company',
      heroTitle: 'We transform your ideas into innovative digital solutions',
      whyChooseUs: 'Why Choose Techno Plus?',
      fastDevelopment: 'Fast Development',
      innovativeDesign: 'Innovative Design',
      highSecurity: 'High Security',
      fullyResponsive: 'Fully Responsive',
      completedProjects: 'Completed Projects',
      satisfiedClients: 'Satisfied Clients',
      yearsExperience: 'Years Experience',
      support247: 'Technical Support',
      ourServices: 'Our Services',
      servicesDesc: 'We provide a comprehensive range of software development services',
      requestQuote: 'Request Quote',
      ourWork: 'Our Portfolio',
      portfolioDesc: 'We are proud to showcase a collection of our completed projects',
      allProjects: 'All Projects',
      websites: 'Websites',
      mobileApps: 'Mobile Apps',
      dashboards: 'Dashboards',
      socialApps: 'Social Apps',
      businessSolutions: 'Business Solutions',
      aboutUs: 'About Us',
      aboutDesc: 'Learn about Techno Plus and our vision for the future',
      ourStory: 'Our Story',
      ourVision: 'Our Vision',
      ourMission: 'Our Mission',
      ourTeam: 'Our Team',
      contactUs: 'Contact Us',
      contactDesc: 'We are here to help you achieve your project',
      contactInfo: 'Contact Information',
      email: 'Email',
      whatsapp: 'WhatsApp',
      address: 'Address',
      workingHours: 'Working Hours',
      sendMessage: 'Send us a message',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      requiredService: 'Required Service',
      message: 'Message',
      send: 'Send Message',
      messageSent: 'Message sent successfully! We will contact you soon.',
      adminLogin: 'Admin Login',
      password: 'Password',
      login: 'Login',
      incorrectPassword: 'Incorrect password',
      messages: 'Messages',
      markAsRead: 'Mark as Read',
      delete: 'Delete',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      allRightsReserved: 'All Rights Reserved'
    }
  };

  const currentT = t[language];

  // Render functions remain the same but use currentT for translations
  const renderHomePage = () => (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{currentT.companyName}</h1>
          <h2>{currentT.companyDesc}</h2>
          <p>{currentT.heroTitle}</p>
          <div className="hero-buttons">
            <button onClick={() => setCurrentPage('services')} className="primary-btn">
              {currentT.services}
            </button>
            <button onClick={() => setCurrentPage('contact')} className="secondary-btn">
              {currentT.contact}
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>{currentT.whyChooseUs}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>{currentT.fastDevelopment}</h3>
            <p>{language === 'ar' ? 'نقدم حلول سريعة وفعالة تلبي احتياجاتك' : 'We provide fast and effective solutions that meet your needs'}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>{currentT.innovativeDesign}</h3>
            <p>{language === 'ar' ? 'تصاميم عصرية ومبتكرة تجذب انتباه عملائك' : 'Modern and innovative designs that attract your customers\' attention'}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>{currentT.highSecurity}</h3>
            <p>{language === 'ar' ? 'حماية شاملة لبياناتك وتطبيقاتك' : 'Comprehensive protection for your data and applications'}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>{currentT.fullyResponsive}</h3>
            <p>{language === 'ar' ? 'يعمل على جميع الأجهزة والشاشات' : 'Works on all devices and screens'}</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>50+</h3>
            <p>{currentT.completedProjects}</p>
          </div>
          <div className="stat-item">
            <h3>30+</h3>
            <p>{currentT.satisfiedClients}</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>{currentT.yearsExperience}</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>{currentT.support247}</p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServicesPage = () => (
    <div className="services-page">
      <section className="page-header">
        <h1>{currentT.ourServices}</h1>
        <p>{currentT.servicesDesc}</p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{language === 'ar' ? service.title : service.titleEn}</h3>
            <p>{language === 'ar' ? service.description : service.descriptionEn}</p>
            <ul className="service-features">
              {(language === 'ar' ? service.features : service.featuresEn).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => setCurrentPage('contact')} className="service-btn">
              {currentT.requestQuote}
            </button>
          </div>
        ))}
      </section>
    </div>
  );

  const renderPortfolioPage = () => (
    <div className="portfolio-page">
      <section className="page-header">
        <h1>{currentT.ourWork}</h1>
        <p>{currentT.portfolioDesc}</p>
      </section>

      <section className="portfolio-filters">
        <button 
          className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('all')}
        >
          {currentT.allProjects}
        </button>
        <button 
          className={activeFilter === 'website' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('website')}
        >
          {currentT.websites}
        </button>
        <button 
          className={activeFilter === 'mobile' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('mobile')}
        >
          {currentT.mobileApps}
        </button>
        <button 
          className={activeFilter === 'dashboard' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('dashboard')}
        >
          {currentT.dashboards}
        </button>
        <button 
          className={activeFilter === 'social' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('social')}
        >
          {currentT.socialApps}
        </button>
        <button 
          className={activeFilter === 'business' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('business')}
        >
          {currentT.businessSolutions}
        </button>
      </section>

      <section className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{language === 'ar' ? project.title : project.titleEn}</h3>
              <p>{language === 'ar' ? project.description : project.descriptionEn}</p>
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
        <h1>{currentT.aboutUs}</h1>
        <p>{currentT.aboutDesc}</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>{currentT.ourStory}</h2>
          <p>
            {language === 'ar' 
              ? 'تكنو بلس هي شركة تطوير برمجيات حديثة تأسست بهدف تقديم حلول رقمية مبتكرة تلبي احتياجات الشركات والأفراد. نحن نؤمن بقوة التكنولوجيا في تحويل الأفكار إلى واقع ملموس.'
              : 'Techno Plus is a modern software development company founded to provide innovative digital solutions that meet the needs of companies and individuals. We believe in the power of technology to transform ideas into tangible reality.'
            }
          </p>
          
          <h2>{currentT.ourVision}</h2>
          <p>
            {language === 'ar'
              ? 'نسعى لأن نكون الشريك الموثوق في رحلة التحول الرقمي، ونقدم حلول تقنية عالية الجودة تساعد عملاءنا على النمو والتطور في العصر الرقمي.'
              : 'We strive to be the trusted partner in the digital transformation journey, providing high-quality technical solutions that help our clients grow and develop in the digital age.'
            }
          </p>

          <h2>{currentT.ourMission}</h2>
          <p>
            {language === 'ar'
              ? 'تقديم خدمات تطوير برمجيات متميزة مع التركيز على الجودة والابتكار والرضا الكامل للعملاء، مع ضمان التسليم في الوقت المحدد.'
              : 'Providing distinguished software development services with a focus on quality, innovation, and complete customer satisfaction, while ensuring delivery on time.'
            }
          </p>
        </div>

        <div className="team-section">
          <h2>{currentT.ourTeam}</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>أحمد محمد</h3>
              <p>{language === 'ar' ? 'مدير التطوير' : 'Development Manager'}</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍🎨</div>
              <h3>سارة أحمد</h3>
              <p>{language === 'ar' ? 'مصممة واجهات المستخدم' : 'UI/UX Designer'}</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🔧</div>
              <h3>محمد علي</h3>
              <p>{language === 'ar' ? 'مطور تطبيقات الموبايل' : 'Mobile App Developer'}</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>فاطمة حسن</h3>
              <p>{language === 'ar' ? 'مديرة المشاريع' : 'Project Manager'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContactPage = (
    formData: FormDataType,
    handleChange: (field: string, value: string) => void,
    handleSubmit: (e: React.FormEvent) => void
  ) => (
    <div className="contact-page">
      <section className="page-header">
        <h1>{currentT.contactUs}</h1>
        <p>{currentT.contactDesc}</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>{currentT.contactInfo}</h2>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>{currentT.email}</h3>
              <p>info@technoplus.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <h3>{currentT.whatsapp}</h3>
              <p>+966 50 123 4567</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>{currentT.address}</h3>
              <p>{language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">⏰</div>
            <div>
              <h3>{currentT.workingHours}</h3>
              <p>{language === 'ar' ? 'الأحد - الخميس: 9:00 ص - 6:00 م' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>{currentT.sendMessage}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{currentT.fullName} *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>{currentT.email} *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>{currentT.phoneNumber}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>{currentT.requiredService}</label>
              <select
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
              >
                <option value="">{language === 'ar' ? 'اختر الخدمة' : 'Select Service'}</option>
                <option value="website">{language === 'ar' ? 'تطوير المواقع' : 'Website Development'}</option>
                <option value="mobile">{language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps'}</option>
                <option value="dashboard">{language === 'ar' ? 'لوحات التحكم' : 'Dashboards'}</option>
                <option value="social">{language === 'ar' ? 'التطبيقات الاجتماعية' : 'Social Apps'}</option>
                <option value="business">{language === 'ar' ? 'حلول الأعمال' : 'Business Solutions'}</option>
              </select>
            </div>
            <div className="form-group">
              <label>{currentT.message} *</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              {currentT.send}
            </button>
          </form>
        </div>
      </section>
    </div>
  );

  const renderDashboard = () => (
    <div className="dashboard-page">
      <section className="page-header">
        <h1>{currentT.dashboard}</h1>
        <p>{language === 'ar' ? 'إدارة محتوى الموقع والرسائل' : 'Manage website content and messages'}</p>
      </section>

      <section className="dashboard-content">
        <div className="dashboard-section">
          <h2>{currentT.messages} ({contactMessages.length})</h2>
          <div className="messages-list">
            {contactMessages.map(message => (
              <div key={message.id} className={`message-card ${!message.read ? 'unread' : ''}`}>
                <div className="message-header">
                  <h3>{message.name}</h3>
                  <span className="message-date">
                    {new Date(message.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                  </span>
                </div>
                <p><strong>{currentT.email}:</strong> {message.email}</p>
                {message.phone && <p><strong>{currentT.phoneNumber}:</strong> {message.phone}</p>}
                {message.service && <p><strong>{currentT.requiredService}:</strong> {message.service}</p>}
                <p><strong>{currentT.message}:</strong> {message.message}</p>
                <div className="message-actions">
                  {!message.read && (
                    <button onClick={() => markAsRead(message.id)} className="action-btn read-btn">
                      {currentT.markAsRead}
                    </button>
                  )}
                  <button onClick={() => deleteMessage(message.id)} className="action-btn delete-btn">
                    {currentT.delete}
                  </button>
                </div>
              </div>
            ))}
            {contactMessages.length === 0 && (
              <p className="no-messages">
                {language === 'ar' ? 'لا توجد رسائل جديدة' : 'No new messages'}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );

  const renderAdminLogin = () => (
    <div className="admin-login">
      <div className="login-card">
        <h2>{currentT.adminLogin}</h2>
        <div className="form-group">
          <label>{currentT.password}</label>
          <input
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder={language === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}
          />
        </div>
        <button onClick={handleAdminLogin} className="login-btn">
          {currentT.login}
        </button>
        <button onClick={() => setShowLogin(false)} className="cancel-btn">
          {currentT.cancel}
        </button>
      </div>
    </div>
  );

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => setCurrentPage('home')}>
            <img src="/2025-07-12_04.01.51-removebg-preview.png" alt="Techno Plus Logo" className="logo-img" style={{height: '40px', marginRight: language === 'ar' ? 0 : '0.5rem', marginLeft: language === 'ar' ? '0.5rem' : 0}} />
            <span className="logo-text">{currentT.companyName}</span>
          </div>
          <div className="nav-menu">
            <button 
              className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('home')}
            >
              {currentT.home}
            </button>
            <button 
              className={currentPage === 'services' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('services')}
            >
              {currentT.services}
            </button>
            <button 
              className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('portfolio')}
            >
              {currentT.portfolio}
            </button>
            <button 
              className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('about')}
            >
              {currentT.about}
            </button>
            <button 
              className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => setCurrentPage('contact')}
            >
              {currentT.contact}
            </button>
            {isAdmin && (
              <button 
                className={currentPage === 'dashboard' ? 'nav-link active' : 'nav-link'}
                onClick={() => setCurrentPage('dashboard')}
              >
                {currentT.dashboard}
              </button>
            )}
          </div>
          <div className="nav-controls">
            <button 
              className="control-btn"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? currentT.lightMode : currentT.darkMode}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              className="control-btn"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              title={currentT.language}
            >
              {language === 'ar' ? '🇺🇸' : '🇸🇦'}
            </button>
            {!isAdmin && (
              <button 
                className="control-btn admin-btn"
                onClick={() => setShowLogin(true)}
                title="Admin"
              >
                🔐
              </button>
            )}
            {isAdmin && (
              <button 
                className="control-btn logout-btn"
                onClick={handleLogout}
                title={currentT.logout}
              >
                🚪
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'services' && renderServicesPage()}
        {currentPage === 'portfolio' && renderPortfolioPage()}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'contact' && renderContactPage(formData, handleContactChange, handleContactSubmit)}
        {currentPage === 'dashboard' && isAdmin && renderDashboard()}
      </main>

      {showLogin && renderAdminLogin()}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{currentT.companyName}</h3>
            <p>{currentT.companyDesc}</p>
            <p>{currentT.heroTitle}</p>
          </div>
          <div className="footer-section">
            <h3>{currentT.services}</h3>
            <ul>
              <li>{language === 'ar' ? 'تطوير المواقع' : 'Website Development'}</li>
              <li>{language === 'ar' ? 'تطبيقات الموبايل' : 'Mobile Apps'}</li>
              <li>{language === 'ar' ? 'لوحات التحكم' : 'Dashboards'}</li>
              <li>{language === 'ar' ? 'حلول الأعمال' : 'Business Solutions'}</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>{currentT.contact}</h3>
            <p>📧 info@technoplus.com</p>
            <p>📱 +966 50 123 4567</p>
            <p>📍 {language === 'ar' ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {currentT.companyName}. {currentT.allRightsReserved}.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
