import { sub } from "date-fns";
import { title } from "process";

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      products: 'Products',
      portfolio: 'Portfolio',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      quote: 'Request a Quote',
    },
    // Hero Section
    hero: {
      badge: 'Software, Cloud & Marketing Solutions',
      title: {
        line1: 'Accelerate your digital',
        line2: 'transformation with expertise',
      },
      description: 'From custom software development to cloud infrastructure and marketing strategy — we support your business at every stage of its digital growth.',
      cta1: 'Start a project',
      cta2: 'Explore solutions',
      stat1: {
        value: '10x',
        label: 'Faster delivery',
      },
      stat2: {
        value: '99.9%',
        label: 'Uptime',
      },
      stat3: {
        value: '500+',
        label: 'Projects delivered',
      },
      card1: 'Custom Development',
      card2: 'Cloud & Infrastructure',
      card3: 'Growth Marketing',
    },
    // Services Pillars
    services: {
      eyebrow: 'What we do best',
      title: 'Our Core Services',
      subtitle: 'Three Pillars of Digital Transformation',
      pillar1: {
        title: 'Software Development',
        description: 'Custom applications, APIs, and full-stack solutions tailored to your business needs.',
      },
      pillar2: {
        title: 'Cloud & Infrastructure',
        description: 'Scalable cloud solutions, DevOps, and enterprise infrastructure management.',
      },
      pillar3: {
        title: 'Business & Marketing',
        description: 'SEO, digital marketing strategies, and growth optimization.',
      },
    },
    // Why Choose Us
    whyChoose: {
      eyebrow: 'Why choose us',
      title: 'What sets us apart',
      subtitle: 'We combine technical expertise, agility and close collaboration to turn your ideas into high-performing solutions.',
      banner: {
        eyebrow: 'Ready to take the next step?',
        title: 'Let\'s talk about your next project',
        cta: 'Start a conversation',
      },
      benefits: [
        {
          title: 'Expert Team',
          description: 'Industry veterans with 10+ years of experience',
        },
        {
          title: 'Proven Results',
          description: '50+ successful projects delivered',
        },
        {
          title: 'Full Stack Solutions',
          description: 'From concept to deployment and beyond',
        },
        {
          title: '24/7 Support',
          description: 'Dedicated support for all clients',
        },
      ],

    },
    // Portfolio
    portfolio: {
      title: 'Featured Projects',
      viewCase: 'View Case Study',
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
    },
    // CTA Banner
    ctaBanner: {
      title: 'Ready to Transform Your Business?',
      description: 'Let\'s discuss how we can help you achieve your digital goals.',
      cta: 'Get Started Today',
    },
    // About Page
    about: {
      title: 'About CLYSYS CODEX',
      story: {
        heading: 'Our Story',
        content: 'Founded in 2018, CLYSYS CODEX was born from a vision to bridge the gap between business needs and technology solutions. We started as a small team of developers and have grown into a multidisciplinary agency serving clients across Europe.',
      },
      mission: {
        heading: 'Our Mission',
        content: 'To empower businesses of all sizes through innovative technology solutions, strategic guidance, and dedicated partnership.',
      },
      vision: {
        heading: 'Our Vision',
        content: 'To be the trusted partner for digital transformation, delivering excellence in software development, cloud infrastructure, and digital marketing.',
      },
      values: {
        heading: 'Core Values',
        items: [
          { title: 'Innovation', description: 'Constantly pushing boundaries' },
          { title: 'Integrity', description: 'Honest and transparent partnerships' },
          { title: 'Excellence', description: 'Quality in everything we do' },
          { title: 'Collaboration', description: 'Working together for success' },
        ],
      },
    },
    // Solutions Page
    solutions: {
      title: 'Our Solutions',
      subtitle: 'Comprehensive Services Tailored to Your Needs',
      development: {
        heading: 'Software Development',
        intro: 'From concept to deployment, we build robust and scalable applications.',
        services: [
          'Full-Stack Web Applications',
          'Mobile Applications (iOS & Android)',
          'Business Logic Systems',
          'API & Backend Development',
          'Requirements Analysis & UML Modeling',
          'System Architecture & Design',
        ],
      },
      cloud: {
        heading: 'Cloud & Infrastructure',
        intro: 'Modern cloud solutions for scalability and reliability.',
        services: [
          'Cloud Migration & Deployment',
          'Server Management & Administration',
          'CI/CD Pipeline Implementation',
          'Docker & Kubernetes Orchestration',
          'Monitoring & Performance Optimization',
          'Security & Compliance',
        ],
      },
      marketing: {
        heading: 'Business & Digital Marketing',
        intro: 'Strategic marketing solutions to grow your business.',
        services: [
          'Search Engine Optimization (SEO)',
          'Google Ads Campaigns',
          'Google My Business Optimization',
          'Analytics & Insights',
          'Digital Strategy Planning',
          'Marketing Automation',
        ],
      },
    },
    // Products Page
    products: {
      title: 'SaaS Products',
      subtitle: 'Ready-to-Use Solutions for Modern Businesses',
    },
    // Contact Page
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear from you. Send us a message!',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.',
      },
      info: {
        email: 'contact@clysyscodeX.com',
        phone: '+33 (0) 1 23 45 67 89',
        address: 'Paris, France',
      },
    },
    // Footer
    footer: {
      about: 'CLYSYS CODEX - Digital Excellence Through Innovation',
      quickLinks: 'Quick Links',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      copyright: '© 2024 CLYSYS CODEX. All rights reserved.',
    },
  },
  fr: {
    // Navigation
    nav: {
      home: 'Accueil',
      solutions: 'Solutions',
      products: 'Produits',
      portfolio: 'Portfolio',
      about: 'À Propos',
      blog: 'Blog',
      contact: 'Contact',
      quote: 'Demander un Devis',
    },
    // Hero Section
    hero: {
      badge: 'Solutions Digitales & Cloud',
      title: {
        line1: 'Accélérez votre transformation',
        line2: 'digitale avec expertise',
      },
      description: 'De la conception logicielle au déploiement cloud, en passant par la stratégie marketing — nous accompagnons votre entreprise à chaque étape de sa croissance digitale.',
      cta1: 'Démarrer un projet',
      cta2: 'Voir nos solutions',
      stat1: {
        value: '10x',
        label: 'Plus rapide',
      },
      stat2: {
        value: '99.9%',
        label: 'Disponibilité',
      },
      stat3: {
        value: '500+',
        label: 'Projets livrés',
      },
      card1: 'Développement sur mesure',
      card2: 'Cloud & Infrastructure',
      card3: 'Growth Marketing',
    },
    // Services Pillars
    services: {
      eyebrow: 'Ce que nous faisons de mieux',
      title: 'Nos Services Principaux',
      subtitle: 'Trois Piliers de la Transformation Digitale',
      pillar1: {
        title: 'Développement Logiciel',
        description: 'Applications personnalisées, APIs et solutions full-stack adaptées à vos besoins.',
      },
      pillar2: {
        title: 'Cloud & Infrastructure',
        description: 'Solutions cloud évolutives, DevOps et gestion d\'infrastructure entreprise.',
      },
      pillar3: {
        title: 'Business & Marketing',
        description: 'SEO, stratégies de marketing digital et optimisation de croissance.',
      },
    },
    // Why Choose Us
    whyChoose: {
      eyebrow: 'Pourquoi nous choisir',
      title: 'Ce qui nous distingue vraiment',
      subtitle: 'Nous combinons expertise technique, agilité et proximité pour transformer vos idées en solutions qui performent.',
      banner: {
        eyebrow: 'Prêt à passer à l\'étape suivante ?',
        title: 'Parlons de votre prochain projet',
        cta: 'Démarrer une conversation',
      },
      benefits: [
        {
          title: 'Équipe Experte',
          description: 'Vétérans de l\'industrie avec 10+ ans d\'expérience',
        },
        {
          title: 'Résultats Prouvés',
          description: '50+ projets réussis livrés',
        },
        {
          title: 'Solutions Complètes',
          description: 'Du concept au déploiement et au-delà',
        },
        {
          title: 'Support 24/7',
          description: 'Support dédié pour tous les clients',
        },
      ],

    },
    // Portfolio
    portfolio: {
      title: 'Projets Sélectionnés',
      viewCase: 'Voir l\'Étude de Cas',
    },
    // Testimonials
    testimonials: {
      title: 'Ce Que Disent Nos Clients',
    },
    // CTA Banner
    ctaBanner: {
      title: 'Prêt à Transformer Votre Entreprise?',
      description: 'Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs digitaux.',
      cta: 'Commencer Maintenant',
    },
    // About Page
    about: {
      title: 'À Propos de CLYSYS CODEX',
      story: {
        heading: 'Notre Histoire',
        content: 'Fondée en 2018, CLYSYS CODEX est née d\'une vision de combler l\'écart entre les besoins commerciaux et les solutions technologiques. Nous avons commencé comme une petite équipe de développeurs et nous avons grandi pour devenir une agence multidisciplinaire servant des clients à travers l\'Europe.',
      },
      mission: {
        heading: 'Notre Mission',
        content: 'Autonomiser les entreprises de toutes tailles grâce à des solutions technologiques innovantes, des conseils stratégiques et un partenariat dédié.',
      },
      vision: {
        heading: 'Notre Vision',
        content: 'Être le partenaire de confiance pour la transformation digitale, en livrant l\'excellence dans le développement logiciel, l\'infrastructure cloud et le marketing digital.',
      },
      values: {
        heading: 'Valeurs Fondamentales',
        items: [
          { title: 'Innovation', description: 'Repousser constamment les limites' },
          { title: 'Intégrité', description: 'Partenariats honnêtes et transparents' },
          { title: 'Excellence', description: 'Qualité dans tout ce que nous faisons' },
          { title: 'Collaboration', description: 'Travailler ensemble pour le succès' },
        ],
      },
    },
    // Solutions Page
    solutions: {
      title: 'Nos Solutions',
      subtitle: 'Services Complets Adaptés à Vos Besoins',
      development: {
        heading: 'Développement Logiciel',
        intro: 'Du concept au déploiement, nous construisons des applications robustes et évolutives.',
        services: [
          'Applications Web Full-Stack',
          'Applications Mobiles (iOS & Android)',
          'Systèmes Métier',
          'Développement API & Backend',
          'Analyse des Besoins & Modélisation UML',
          'Architecture & Design Système',
        ],
      },
      cloud: {
        heading: 'Cloud & Infrastructure',
        intro: 'Solutions cloud modernes pour l\'évolutivité et la fiabilité.',
        services: [
          'Migration & Déploiement Cloud',
          'Gestion de Serveurs & Administration',
          'Implémentation de Pipelines CI/CD',
          'Orchestration Docker & Kubernetes',
          'Monitoring & Optimisation de Performance',
          'Sécurité & Conformité',
        ],
      },
      marketing: {
        heading: 'Business & Marketing Digital',
        intro: 'Solutions marketing stratégiques pour croître votre entreprise.',
        services: [
          'Optimisation pour les Moteurs de Recherche (SEO)',
          'Campagnes Google Ads',
          'Optimisation Google My Business',
          'Analyse & Insights',
          'Planification de Stratégie Digital',
          'Marketing Automation',
        ],
      },
    },
    // Products Page
    products: {
      title: 'Produits SaaS',
      subtitle: 'Solutions Prêtes à l\'Emploi pour les Entreprises Modernes',
    },
    // Contact Page
    contact: {
      title: 'Nous Contacter',
      subtitle: 'Nous aimerions vous entendre. Envoyez-nous un message!',
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        subject: 'Sujet',
        message: 'Message',
        submit: 'Envoyer le Message',
        success: 'Message envoyé avec succès!',
        error: 'Échec de l\'envoi du message. Veuillez réessayer.',
      },
      info: {
        email: 'contact@clysyscodeX.com',
        phone: '+261 (0) 38 06 900 32',
        address: 'Antananarivo, Madagascar',
      },
    },
    // Footer
    footer: {
      about: 'CLYSYS CODEX - Excellence Digital par l\'Innovation',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      company: 'Entreprise',
      legal: 'Légal',
      copyright: '© 2024 CLYSYS CODEX. Tous droits réservés.',
    },
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
