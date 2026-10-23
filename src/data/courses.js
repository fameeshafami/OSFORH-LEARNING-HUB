import { asset } from '../lib/asset.js'
// Course + project data (converted from courses.html)
// `visual` holds a small decorative inline SVG (trusted, static markup).

const rawCourses = [
  {
    id: 'Digital Marketing',
    slug: 'digital-marketing',
    cardImage: 'img/cards/digital-marketing',
    desc: 'SEO, social media, content, paid ads, analytics and AI-assisted marketing.',
    heroSubtitle: 'Digital Marketing',
    heroTitle: 'Best Digital Marketing Institute in Tirur',
    heroBg: 'img/hero-digital-marketing.webp',
    heroImage: 'img/istockphoto-1346594335-612x612.webp',
    tags: ['SEO', 'Social Media', 'Content', 'Paid Ads'],
    features: [
      { icon: '👥', label: 'Experienced Trainers' },
      { icon: '🔄', label: 'Updated Learning plan' },
      { icon: '⏱️', label: 'Flexible Learning' },
      { icon: '💻', label: 'Practical Training' },
    ],
    whyChoose: {
      title: 'Why Choose US',
      quote:
        'At Osforh Learning Hub, we bridge the gap between learning and real-world application. Our courses are designed to equip you with in-demand digital skills through an updated syllabus, expert-led sessions, and practical projects. With flexible online learning, personalized guidance, and career-focused certification, we ensure you gain the confidence and expertise to grow in today’s competitive digital world.',
      points: [
        'Industry-Relevant Curriculum',
        'Expert Trainers with Real-World Skills',
        'Practical Projects & Tools',
        'Certification & Career Support',
      ],
    },
    instituteStory: {
      title: 'Best Digital Marketing Institute In Tirur',
      image: 'img/premium_photo-1684225764999-3597a8da10ab.avif',
      paragraphs: [
        'Having strong digital skills is essential in today’s world, where digital platforms drive business growth and career opportunities. Osforh Learning Hub, the best digital marketing institute in Tirur, empowers entrepreneurs, job seekers, and students to build future-ready careers.',
        'At Osforh, learning is practical, engaging, and real-world focused. Every concept is taught step-by-step to build confidence and clarity. What makes us stand out is our hands-on training approach—students work on real projects, use industry tools, and face real business challenges to gain practical experience.',
        'Our experienced trainers share valuable industry insights, ensuring every lesson is relevant and up to date. The flexible curriculum suits everyone—students, professionals, and business owners alike.',
        'If you’re looking for the best digital marketing institute in Tirur, Osforh Learning Hub is where your digital journey begins. With expert guidance and practical learning, turn your passion into a successful career.',
      ],
    },
    whoCanJoin: {
      title: 'Who Can JOIN',
      description:
        'Our programs are designed for anyone eager to grow in the digital era — whether you’re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
      profiles: [
        { role: 'College Students', desc: 'Build your career foundation with in-demand practical digital skills' },
        { role: 'Job Seekers', desc: 'Boost your employability and stand out with hands-on campaign portfolio' },
        { role: 'Entrepreneurs & Business Owners', desc: 'Scale brand visibility and generate leads on search and social media' },
        { role: 'Marketing Professionals', desc: 'Upgrade with latest AI tools, performance marketing, and analytics' },
      ],
    },
    tracksHeading: 'Are you interested to join?',
    tracks: [
      {
        id: 'diploma-dm',
        title: 'DIPLOMA IN DIGITAL MARKETING',
        badge: 'Comprehensive Career Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/e2e4919f-8fc3-475f-b429-9a838871212d.jpg',
        topics: [
          'Digital Marketing Fundamentals',
          'Search Engine Optimisation (SEO)',
          'Social Media Marketing (SMM)',
          'Search Engine Marketing (SEM)',
          'Email Marketing',
          'Affiliated Marketing',
          'YouTube Marketing',
          'Content Marketing',
          'E-commerce',
        ],
        duration: '3 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'dm-graphic-design',
        title: 'DIGITAL MARKETING AND GRAPHIC DESIGNING',
        badge: 'Dual Skill Specialization',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/AI-powered-predictive-maintenance-could-save%E2%80%A6.jpg',
        topics: [
          'Adobe Illustrator',
          'Adobe Photoshop',
          'Adobe InDesign',
          'Adobe After Effects',
          'Adobe Premiere Pro',
          'Promoting products, services, or brands using digital channels',
          'Target audiences through online platforms like Google, Facebook, Instagram, YouTube, and more',
        ],
        duration: '7 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'smm-specialist',
        title: 'Social Media Marketing',
        badge: 'Fast-Track Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/Lets-fix-that-Ill-optimize-your-site-for-SEO%E2%80%A6.jpg',
        topics: ['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'Pinterest', 'Snapchat', 'YouTube'],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'seo-specialist',
        title: 'SEO (Search engine Optimisation)',
        badge: 'High Impact Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/SEO.jpg',
        topics: ['On page Seo', 'Off page Seo', 'Technical Seo', 'SEO Analytics & Tools', 'Content Seo', 'Goals of seo'],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
    ],
    learn: [
      'Plan and run real high-converting campaigns',
      'Read analytics to improve ROI and engagement',
      'Use modern AI tools in marketing workflows',
      'Master search engine rankings and social media algorithms',
    ],
    visual: "<svg viewBox=\"0 0 100 100\"><rect class=\"gr\" x=\"12\" y=\"50\" width=\"16\" height=\"40\" rx=\"4\" fill=\"#215714\"/><rect class=\"gr\" style=\"animation-delay:-.6s\" x=\"36\" y=\"30\" width=\"16\" height=\"60\" rx=\"4\" fill=\"#215714\"/><rect class=\"gr\" style=\"animation-delay:-1.2s\" x=\"60\" y=\"42\" width=\"16\" height=\"48\" rx=\"4\" fill=\"#215714\"/><circle class=\"bf\" cx=\"84\" cy=\"16\" r=\"9\" fill=\"#215714\"/></svg>",
    modules: [
      {
        title: 'Social Media Marketing',
        icon: '📱',
        color: '#215714',
        topics: ['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'Pinterest', 'Snapchat', 'YouTube'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'SEO (Search engine Optimisation)',
        icon: '🔍',
        color: '#215714',
        topics: ['On page Seo', 'Off page Seo', 'Technical Seo', 'SEO Analytics & Tools', 'Content Seo', 'Goals of seo'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Performance & Paid Ads',
        icon: '🎯',
        color: '#215714',
        topics: ['Meta Ads Manager', 'Google Ads & PPC', 'Audience Targeting', 'Budget Optimization', 'Lead Generation & Funnels'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
    ],
    tagline: 'Grow Your Skills, Shape Your Future',
    cta: 'Take your career to the next level with the best digital marketing course in Tirur. Our practical, hands-on training helps you master SEO, social media, content marketing, and more, so you’re ready to step confidently into the professional world.',
    careers: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'Performance Marketer', 'Content Strategist', 'Freelance Consultant'],
    showContactForm: true,
    mapEmbedUrl: 'https://maps.google.com/maps?q=WW9F%2BH9%20Tirur%2C%20Kerala&t=m&z=10&output=embed&iwloc=near',
    duration: '1 to 7 Months Options',
    internship: '1 Month Guaranteed Internship',
  },
  {
    id: 'Graphic Designing',
    slug: 'graphic-designing',
    cardImage: 'img/cards/graphic-designing',
    desc: 'Visual communication, branding, typography, digital design and portfolio development.',
    heroSubtitle: 'Graphic Designing',
    heroTitle: 'Best Graphic Designing course in Tirur',
    heroBg: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['Branding', 'Typography', 'Photoshop', 'Canva', 'Illustrator', 'InDesign'],
    features: [
      { icon: '👥', label: 'Experienced Trainers' },
      { icon: '🔄', label: 'Updated Learning plan' },
      { icon: '⏱️', label: 'Flexible Learning' },
      { icon: '💻', label: 'Practical Training' },
    ],
    whyChoose: {
      title: 'Why Choose US',
      quote:
        'At Osforh Learning Hub, we bridge the gap between learning and real-world application. Our courses are designed to equip you with in-demand digital skills through an updated syllabus, expert-led sessions, and practical projects. With flexible online learning, personalized guidance, and career-focused certification, we ensure you gain the confidence and expertise to grow in today’s competitive digital world.',
      points: [
        'Industry-Relevant Curriculum',
        'Expert Trainers with Real-World Skills',
        'Practical Projects & Tools',
        'Certification & Career Support',
      ],
    },
    instituteStory: {
      title: 'Best Graphic Designing Course in Tirur',
      image: 'img/story-graphic.webp',
      paragraphs: [
        'Design is everywhere — from the logos we see, the posters we admire, to the social media posts we scroll through every day. Good design isn’t just about looking attractive; it’s about sending the right message in a creative way. At Osforh Learning Hub, we help students discover this art through the best graphic designing course in Tirur.',
        'Our course is built for anyone who loves creativity. You don’t need to be an expert — whether you are a complete beginner or someone with basic skills, we’ll guide you step by step. From learning colors, shapes, and layouts to mastering tools like Photoshop, Illustrator, and InDesign, we make sure you gain both knowledge and confidence.',
        'If you’re looking for the best graphic designing course in Tirur, Osforh Learning Hub is the right place. With the right training, support, and practice, your passion for design can grow into a successful career.',
      ],
    },
    whoCanJoin: {
      title: 'Who Can JOIN',
      description:
        'Our programs are designed for anyone eager to grow in the digital era — whether you’re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
      profiles: [
        { role: 'College Students', desc: 'Build your career foundation with professional visual design and branding skills' },
        { role: 'Job Seekers', desc: 'Boost employability with an impressive portfolio of real-world client artwork' },
        { role: 'Entrepreneurs & Business Owners', desc: 'Design eye-catching brand logos, marketing creatives, and ad banners' },
        { role: 'Marketing Professionals', desc: 'Upgrade visual content creation skills with Adobe Creative Cloud & Figma' },
      ],
    },
    tracksHeading: 'Are you interested to join?',
    tracks: [
      {
        id: 'expert-led-training',
        title: 'Expert-Led Training',
        badge: 'Industry Mentorship Track',
        image: 'img/premium_photo-1700675175407-53c53101cbb8.avif',
        topics: [
          'Learn from certified graphic designers',
          'Real-world project experience',
          'Personalized mentoring & feedback',
          'Industry-oriented curriculum',
        ],
        duration: '3 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'master-graphic-tools',
        title: 'Master Graphic Tools',
        badge: 'Comprehensive Software Track',
        image: 'img/premium_photo-1720908579765-3cf1dd7999f7.avif',
        topics: [
          'Adobe Photoshop, Illustrator, InDesign',
          'CorelDRAW & Figma basics',
          'Practical, tool-based assignments',
        ],
        duration: '3 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
    ],
    showContactForm: true,
    mapEmbedUrl: 'https://maps.google.com/maps?q=WW9F%2BH9%20Tirur%2C%20Kerala&t=m&z=10&output=embed&iwloc=near',
    learn: [
      'Learn core design principles, color theory and composition',
      'Master professional tools: Adobe Photoshop, Illustrator & InDesign',
      'Create commercial social media creatives and branding posters',
      'Build a strong client-ready professional portfolio',
    ],
    visual: "<svg viewBox=\"0 0 100 100\"><circle class=\"bf\" cx=\"38\" cy=\"42\" r=\"26\" fill=\"#215714\"/><rect class=\"bf2\" x=\"40\" y=\"38\" width=\"44\" height=\"44\" rx=\"10\" fill=\"#215714\" opacity=\".9\"/><path class=\"bf\" d=\"M20 84l24-30 14 18 10-12 16 24z\" fill=\"#215714\"/></svg>",
    modules: [
      {
        title: 'Design Fundamentals & Branding',
        icon: '🎨',
        color: '#215714',
        topics: ['Color Theory & Psychology', 'Typography & Visual Hierarchy', 'Logo Design Principles', 'Brand Identity Systems', 'Layout & Grid Systems'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Creative Software Mastery',
        icon: '✨',
        color: '#215714',
        topics: ['Adobe Photoshop Essentials', 'Adobe Illustrator Vector Art', 'Canva Pro for Social Media', 'Photo Retouching & Manipulation', 'Social Media Creatives'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Print Media & Portfolio',
        icon: '💼',
        color: '#215714',
        topics: ['Brochures & Packaging Design', 'Banner & Print Formats', 'Client Project Mockups', 'Personal Portfolio Showcase', 'Freelancing Fundamentals'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
    ],
    tagline: 'Grow Your Skills, Shape Your Future',
    cta: 'Take your career to the next level with the best graphic designing course in Tirur. Our practical, hands-on training helps you master visual design, branding, creative tools, and more, so you’re ready to step confidently into the professional world.',
    careers: ['Graphic Designer', 'Brand Identity Designer', 'UI Visual Artist', 'Social Media Creative Designer', 'Packaging Artist', 'Freelance Designer'],
    duration: '3 Months + 1 Month Internship',
    internship: '1 Month Guaranteed Internship',
  },
  {
    id: 'Website Development',
    slug: 'website-development',
    cardImage: 'img/cards/website-development',
    desc: 'HTML, CSS, JavaScript, WordPress, responsive design and practical website projects.',
    heroSubtitle: 'Website Development',
    heroTitle: 'Best Website Development Course in Tirur',
    heroBg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    heroImage: 'img/premium_photo-1685086785423-435c02d5c321.avif',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Responsive Design'],
    features: [
      { icon: '👥', label: 'Experienced Trainers' },
      { icon: '🔄', label: 'Updated Learning plan' },
      { icon: '⏱️', label: 'Flexible Learning' },
      { icon: '💻', label: 'Practical Training' },
    ],
    whyChoose: {
      title: 'Why Choose US',
      quote:
        'At Osforh Learning Hub, we bridge the gap between learning and real-world application. Our courses are designed to equip you with in-demand digital skills through an updated syllabus, expert-led sessions, and practical projects. With flexible online learning, personalized guidance, and career-focused certification, we ensure you gain the confidence and expertise to grow in today’s competitive digital world.',
      points: [
        'Industry-Relevant Curriculum',
        'Expert Trainers with Real-World Skills',
        'Practical Projects & Tools',
        'Certification & Career Support',
      ],
    },
    instituteStory: {
      title: 'Best Website Development Course In Tirur',
      image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/Coding-concept-illustration-_-Free-Vector-Freepik%E2%80%A6.jpg',
      paragraphs: [
        'At Osforh Learning Hub, we believe a great website is more than code — it’s an experience that connects businesses with people. Our Website Development Course in Tirur helps students, job seekers, and entrepreneurs build strong digital skills for today’s world.',
        'You’ll learn HTML, CSS, JavaScript, and advanced topics like responsive design and CMS tools, while creating real projects that boost your confidence and portfolio.',
        'Guided by experienced trainers, you’ll gain the skills to start a career, freelance, or build websites for your own business — turning your passion for web development into a professional future.',
      ],
    },
    whoCanJoin: {
      title: 'Who Can JOIN',
      description:
        'Our programs are designed for anyone eager to grow in the digital era — whether you’re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
      profiles: [
        { role: 'College Students', desc: 'Build your career foundation with modern coding, responsive web design, and full-stack basics.' },
        { role: 'Job Seekers', desc: 'Boost your employability with a live web development portfolio and real client projects.' },
        { role: 'Entrepreneurs & Business Owners', desc: 'Build, launch, and manage your own high-converting business websites and web apps.' },
        { role: 'Marketing Professionals', desc: 'Upgrade technical web skills to customize landing pages, optimize speed, and manage CMS platforms.' },
      ],
    },
    tracksHeading: 'Are you interested to join?',
    tracksDescription:
      'Our programs are designed for anyone eager to grow in the digital era — whether you’re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
    tracks: [
      {
        id: 'responsive-design',
        title: 'RESPONSIVE DESIGN',
        badge: 'Multi-Device Architecture Track',
        image: 'img/photo-1547658719-da2b51169166.avif',
        topics: [
          'Optimized for all screen sizes',
          'Clean, readable layouts for easy navigation.',
          'Seamless experience on mobile, tablet and desk top.',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'user-friendly-navigation',
        title: 'USER FRIENDLY NAVIGATION',
        badge: 'UI/UX & Architecture Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/1383db87-1257-4606-8df7-4015a9d58160.jpg',
        topics: [
          'Clear menu structures',
          'Search functionality for better usability',
          'Quick access to key information(admissions, programs, contact)',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'branding-visual-identity',
        title: 'BRANDING AND VISUAL IDENTITY',
        badge: 'Visual Identity & Design Track',
        image: 'img/photo-1572044162444-ad60f128bdea.avif',
        topics: [
          'Professional and trustworthy look.',
          'Consistent use of logo, colors, and typography.',
          'Custom visuals that reflect your mission and values.',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'master-graphic-tools',
        title: 'Master Graphic Tools',
        badge: 'CMS & Platform Management Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/8e1668bc-236d-4dd8-ad7a-cd8e015702c9.jpg',
        topics: [
          'Easy-to-update news, events, and announcements',
          'Staff and faculty can manage content securely.',
          'Platforms like WordPress or Drupal tailored for institutions',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
    ],
    showContactForm: true,
    mapEmbedUrl: 'https://maps.google.com/maps?q=WW9F%2BH9%20Tirur%2C%20Kerala&t=m&z=10&output=embed&iwloc=near',
    learn: [
      'Understand how modern websites work and communicate',
      'Write clean, accessible, modern HTML5, CSS3 and JavaScript',
      'Design fully responsive mobile-first layouts',
      'Build, customize and launch dynamic WordPress sites and online stores',
    ],
    visual: "<svg viewBox=\"0 0 100 100\"><rect class=\"bf\" x=\"8\" y=\"18\" width=\"84\" height=\"60\" rx=\"10\" fill=\"#215714\"/><rect x=\"8\" y=\"18\" width=\"84\" height=\"14\" rx=\"7\" fill=\"#215714\"/><text class=\"bf2\" x=\"50\" y=\"64\" text-anchor=\"middle\" font-size=\"26\" font-weight=\"900\" fill=\"#fff\" font-family=\"monospace\">&lt;/&gt;</text></svg>",
    modules: [
      {
        title: 'Frontend Web Fundamentals',
        icon: '💻',
        color: '#215714',
        topics: ['Semantic HTML5 Architecture', 'Modern CSS3, Flexbox & Grid', 'Responsive Design Principles', 'Modern JavaScript (ES6+)', 'Interactive Web Elements'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'CMS & WordPress Mastery',
        icon: '🌐',
        color: '#215714',
        topics: ['WordPress Setup & Architecture', 'Theme Customization & Elementor', 'WooCommerce E-Commerce Setup', 'Plugin Integration & Security', 'Speed & Performance Optimization'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Deployment & Live Projects',
        icon: '🚀',
        color: '#215714',
        topics: ['Web Hosting & Domain Setup', 'cPanel & File Management', 'Git & GitHub Basics', 'Client Website Project', 'Live Website Launch'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
    ],
    tagline: 'Grow Your Skills, Shape Your Future',
    cta: 'Take your career to the next level with the best website development course in Tirur. Our practical, hands-on training helps you master HTML, CSS, JavaScript, responsive design, and CMS tools, so you’re ready to step confidently into the professional world.',
    careers: ['Frontend Web Developer', 'WordPress Specialist', 'Web Designer', 'CMS Developer', 'Freelance Web Consultant'],
    duration: '1 Month + 1 Month Internship',
    internship: '1 Month Guaranteed Internship',
  },
  {
    id: 'Office Administration',
    slug: 'office-administration',
    cardImage: 'img/cards/office-administration',
    desc: 'Office software, documentation, professional communication and administrative skills.',
    heroSubtitle: 'Office Administration',
    heroTitle: 'Best Office Administration Course in Tirur',
    heroBg: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    tags: ['MS Office', 'Documentation', 'Communication', 'Time Management'],
    features: [
      { icon: '👥', label: 'Experienced Trainers' },
      { icon: '🔄', label: 'Updated Learning plan' },
      { icon: '⏱️', label: 'Flexible Learning' },
      { icon: '💻', label: 'Practical Training' },
    ],
    whyChoose: {
      title: 'Why Choose US',
      quote:
        'At Osforh Learning Hub, we bridge the gap between learning and real-world application. Our courses are designed to equip you with in-demand digital skills through an updated syllabus, expert-led sessions, and practical projects. With flexible online learning, personalized guidance, and career-focused certification, we ensure you gain the confidence and expertise to grow in today\'s competitive digital world.',
      points: [
        'Industry-Relevant Curriculum',
        'Expert Trainers with Real-World Skills',
        'Practical Projects & Tools',
        'Certification & Career Support',
      ],
    },
    instituteStory: {
      title: 'Best Office Administration Institute In Tirur',
      image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/Responsabile-della-donna-del-fumetto-che%E2%80%A6.jpg',
      paragraphs: [
        'Take charge of your career with the best office administration course in Tirur at Osforh Learning Hub. This course is designed to give you all the practical skills you need to manage a modern workplace efficiently and confidently.',
        'From organizing administrative systems and managing office resources to improving communication and time management, our course covers every essential aspect of office administration. You\'ll learn how to keep operations running smoothly and support your team effectively — skills that are valuable in any organization.',
        'Whether you are just starting out or looking to enhance your skills, our career-focused program prepares you for real-world roles such as office manager, administrative assistant, or executive support. With hands-on training and practical exercises, you\'ll gain experience that helps you perform confidently from day one.',
        'Get ready to lead from the front desk. With the best office administration course in Tirur, Osforh Learning Hub will help you build a strong foundation for a successful career. Enroll today and start shaping your future!',
      ],
    },
    whoCanJoin: {
      title: 'Who Can JOIN',
      description:
        'Our programs are designed for anyone eager to grow in the digital era — whether you\'re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
      profiles: [
        { role: 'College Students', desc: 'Build your career foundation with practical office management, documentation, and communication skills.' },
        { role: 'Job Seekers', desc: 'Boost your employability with hands-on training in office tools and administrative procedures.' },
        { role: 'Entrepreneurs & Business Owners', desc: 'Learn to run efficient office operations, manage resources, and streamline business processes.' },
        { role: 'Marketing Professionals', desc: 'Upgrade organizational and communication skills to coordinate teams and manage office workflows.' },
      ],
    },
    tracksHeading: 'Are you interested to join?',
    tracksDescription:
      'Our programs are designed for anyone eager to grow in the digital era — whether you\'re a college student building your career foundation, a job seeker looking to boost employability, an entrepreneur or business owner aiming to expand online, a freelancer wanting to enhance your skills, or a marketing professional upgrading to the latest digital trends.',
    tracks: [
      {
        id: 'administrative-skills',
        title: 'Administrative Skills',
        badge: 'Core Office Management Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/Office-workplace-isometric-composition-_-Free-Vector.jpg',
        topics: [
          'Filing and record keeping',
          'Scheduling and calendar management',
          'Office procedures and protocols',
          'Document handling and correspondence',
        ],
        duration: '3 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'communication-interpersonal',
        title: 'Communication & Interpersonal Skills',
        badge: 'Professional Communication Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/06268625-9704-41ef-9e66-d67e4e0686dc.jpg',
        topics: [
          'Verbal and written communication',
          'Customer service etiquette',
          'Team collaboration',
          'Conflict resolution and active listening',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'office-technology-tools',
        title: 'Office Technology & Tools',
        badge: 'Digital Office Tools Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/5bc42701-07bb-48a0-b005-15c68c5df900.jpg',
        topics: [
          'Microsoft Office (Word, Excel, PowerPoint)',
          'Email and calendar systems (e.g., Outlook, Gmail)',
          'Digital filing systems and cloud storage',
          'Basic troubleshooting and IT coordination',
        ],
        duration: '3 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
      {
        id: 'organizational-time-management',
        title: 'Organizational & Time Management',
        badge: 'Productivity & Planning Track',
        image: 'https://osforhlearninghub.in/wp-content/uploads/2025/10/Company-business-meeting-isometric-illustration-_-Premium-Vector.jpg',
        topics: [
          'Organize workspaces and workflows',
          'Prioritize tasks and meet deadlines',
          'Manage multiple responsibilities',
          'Use planning tools and apps effectively',
        ],
        duration: '1 Month',
        internship: '1 Month Internship',
        color: '#215714',
      },
    ],
    showContactForm: true,
    mapEmbedUrl: 'https://maps.google.com/maps?q=WW9F%2BH9%20Tirur%2C%20Kerala&t=m&z=10&output=embed&iwloc=near',
    learn: [
      'Use office productivity tools step-by-step with confidence',
      'Master MS Excel formulas, data analysis, and report generation',
      'Handle corporate documents, invoices, and filing accurately',
      'Communicate clearly and professionally in business environments',
    ],
    visual: "<svg viewBox=\"0 0 100 100\"><rect class=\"bf\" x=\"22\" y=\"12\" width=\"52\" height=\"68\" rx=\"8\" fill=\"#fff\" stroke=\"#215714\" stroke-width=\"4\"/><path class=\"bf\" d=\"M34 32h28M34 46h28M34 60h18\" stroke=\"#215714\" stroke-width=\"5\" stroke-linecap=\"round\"/><circle class=\"bf2\" cx=\"76\" cy=\"76\" r=\"16\" fill=\"#215714\"/><path class=\"bf2\" d=\"M69 76l5 5 9-10\" stroke=\"#fff\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/></svg>",
    modules: [
      {
        title: 'MS Office & Computer Essentials',
        icon: '📊',
        color: '#215714',
        topics: ['MS Word Advanced Formatting', 'MS Excel Formulas & Pivot Tables', 'MS PowerPoint Presentations', 'Data Entry & Spreadsheet Management', 'Keyboard Shortcuts & Speed'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Corporate Communication & Operations',
        icon: '✉️',
        color: '#215714',
        topics: ['Professional Email Writing', 'Official Documentation & Reports', 'Filing Systems & Records Management', 'Front-Office & Reception Operations', 'Time & Task Management'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
      {
        title: 'Digital Tools & Workplace Skills',
        icon: '🗂️',
        color: '#215714',
        topics: ['Google Workspace & Cloud Storage', 'Basic Billing & Invoice Handling', 'Meeting Scheduling & Coordination', 'AI Tools for Office Productivity', 'Workplace Ethics & Etiquette'],
        info: { duration: '1 Month', internship: '1 Month Internship' },
      },
    ],
    tagline: 'Grow Your Skills, Shape Your Future',
    cta: 'Take your career to the next level with the best office administration course in Tirur. Our practical, hands-on training helps you master office tools, communication, time management, and more, so you\'re ready to step confidently into the professional world.',
    careers: ['Office Administrator', 'Executive Assistant', 'Data Entry Specialist', 'Front Office Executive', 'Operations Coordinator'],
    duration: '1 - 3 Months',
    internship: '1 Month Guaranteed Internship',
  },
]

// Resolve every bundled image path against the Vite base URL (GitHub Pages safe).
const IMG_KEYS = new Set(['cardImage', 'heroBg', 'heroImage', 'image'])
const withAssets = (v) => {
  if (Array.isArray(v)) return v.map(withAssets)
  if (v && typeof v === 'object') {
    return Object.fromEntries(
      Object.entries(v).map(([k, val]) => [k, IMG_KEYS.has(k) && typeof val === 'string' ? asset(val) : withAssets(val)])
    )
  }
  return v
}
export const courses = withAssets(rawCourses)

export const getCourseBySlug = (slugOrId) => {
  if (!slugOrId) return null
  let clean = String(slugOrId)
  try { clean = decodeURIComponent(clean) } catch { /* keep raw value */ }
  clean = clean.toLowerCase().trim()
  return (
    courses.find(
      (c) =>
        c.slug.toLowerCase() === clean ||
        c.id.toLowerCase() === clean ||
        c.id.toLowerCase().replace(/[^a-z0-9]+/g, '-') === clean
    ) || null
  )
}

// [title, category label, filter key, colour class, description]
export const projects = [
  { title: 'Local Business Campaign', cat: 'Digital marketing', filter: 'marketing', cls: 'p1', desc: 'A sample social and search campaign plan with goals, content calendar and reporting.' },
  { title: 'Portfolio Website', cat: 'Website design', filter: 'web', cls: 'p2', desc: 'A responsive personal portfolio built with HTML, CSS and JavaScript.' },
  { title: 'Brand Identity Kit', cat: 'Branding', filter: 'design', cls: 'p3', desc: 'A sample logo, colour palette and typography system.' },
  { title: 'Social Media Creatives', cat: 'Social posts', filter: 'design', cls: 'p4', desc: 'Consistent post templates built in Canva and Photoshop.' },
  { title: 'Analytics Dashboard', cat: 'Reporting', filter: 'marketing', cls: 'p5', desc: 'A demo dashboard summarising traffic and campaign results.' },
  { title: 'WordPress Business Site', cat: 'Website', filter: 'web', cls: 'p6', desc: 'A demo business website launched on WordPress.' },
]

export const projectBullets = [
  'Demonstration project',
  'Shows the kind of work students build',
  'Replace with real student work when available',
]

export const filters = [
  { key: 'all', label: 'All' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'web', label: 'Websites' },
  { key: 'design', label: 'Design' },
]
