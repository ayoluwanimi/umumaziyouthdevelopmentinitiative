import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface HeroImage {
  id: string;
  url: string;
  alt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
}

export interface JourneyItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface Payment {
  id: string;
  txRef: string;
  amount: number;
  currency: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  project: string;
  status: string;
  date: string;
}

export interface SiteSettings {
  logo: string;
  favicon: string;
  siteName: string;
  tagline: string;
  flutterwavePublicKey: string;
  heroImages: HeroImage[];
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  missionStatement: string;
  missionImage: string;
  journeyTitle: string;
  journeyDescription: string;
  journeyItems: JourneyItem[];
  teamMembers: TeamMember[];
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  payments: Payment[];
}

const defaultSettings: SiteSettings = {
  logo: '',
  favicon: '',
  siteName: 'UMYIDI',
  tagline: 'Umumazi Youth Development Initiative',
  flutterwavePublicKey: 'FLWPUBK_TEST-XXXXXXXXXXXXX-X',
  heroImages: [
    { id: '1', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920', alt: 'Youth empowerment' },
    { id: '2', url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920', alt: 'Community development' },
    { id: '3', url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920', alt: 'Education support' },
    { id: '4', url: 'https://images.unsplash.com/photo-1529390079861-591f85588268?w=1920', alt: 'Skills training' },
  ],
  heroTitle: 'Building a Better Future for Our Youth',
  heroSubtitle: 'Empowering Youth, Transforming Communities',
  heroDescription: 'Umumazi Youth Development Initiative is committed to empowering young people through education, skill development, and community engagement programs.',
  missionStatement: 'Our mission is to empower youth through education, skill development, and community engagement, enabling them to become responsible, productive, and engaged members of society. We believe in the potential of every young person to create positive change in their community and beyond. Through our comprehensive programs, we provide opportunities for growth, learning, and leadership development.',
  missionImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800',
  journeyTitle: 'Our Journey Thus Far',
  journeyDescription: 'From humble beginnings to impacting thousands of lives, here is our story of growth and transformation.',
  journeyItems: [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
      title: 'Founded in 2018',
      description: 'Started with a vision to empower youth in Umumazi community with just 5 dedicated volunteers.',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600',
      title: '5000+ Youth Reached',
      description: 'Through our programs, we have directly impacted over 5,000 young people in multiple communities.',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600',
      title: 'Expanding Impact',
      description: 'Now operating in 20+ communities with 100+ active volunteers and multiple ongoing projects.',
    },
  ],
  teamMembers: [
    { id: '1', name: 'Executive Director', role: 'Leadership', department: 'Executive', image: '', bio: 'Leading UMYIDI with vision and dedication.' },
    { id: '2', name: 'Program Coordinator', role: 'Programs', department: 'Programs', image: '', bio: 'Coordinating all community programs.' },
    { id: '3', name: 'Community Liaison', role: 'Outreach', department: 'Community', image: '', bio: 'Building community relationships.' },
    { id: '4', name: 'Finance Officer', role: 'Finance', department: 'Administration', image: '', bio: 'Managing organizational finances.' },
  ],
  contactEmail: 'info@umyidi.org',
  contactPhone: '+234 XXX XXX XXXX',
  contactAddress: 'Umumazi Community, Nigeria',
  facebookUrl: '#',
  twitterUrl: '#',
  instagramUrl: '#',
  linkedinUrl: '#',
  payments: [],
};

interface SiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  addPayment: (payment: Payment) => void;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('umyidi_settings');
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('umyidi_admin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('umyidi_settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addPayment = (payment: Payment) => {
    setSettings(prev => ({
      ...prev,
      payments: [payment, ...prev.payments],
    }));
  };

  const login = (password: string) => {
    // Simple password check - in production, use proper authentication
    if (password === 'umyidi2024') {
      setIsAdmin(true);
      sessionStorage.setItem('umyidi_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('umyidi_admin');
  };

  return (
    <SiteContext.Provider value={{ settings, updateSettings, addPayment, isAdmin, login, logout }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteContext must be used within a SiteProvider');
  }
  return context;
}
