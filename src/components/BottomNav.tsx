import React, { useEffect, useState } from 'react';
import { User, Clock, Layers, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface BottomNavProps {
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<string>('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'experience', 'projects', 'skills'];
      const scrollPos = window.scrollY + 150;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'intro', labelKo: '소개', labelEn: 'Intro', icon: User },
    { id: 'experience', labelKo: '경력', labelEn: 'History', icon: Clock },
    { id: 'projects', labelKo: '프로젝트', labelEn: 'Projects', icon: Layers },
    { id: 'skills', labelKo: '스킬', labelEn: 'Skills', icon: Sparkles },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-slate-100">
      <div className="flex justify-around items-center h-16 max-w-[1280px] mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full relative transition-colors cursor-pointer ${
                isActive ? 'text-[#b61722] font-bold' : 'text-[#404758] hover:text-[#151c27]'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              <span className="text-[10px]">
                {language === 'ko' ? item.labelKo : item.labelEn}
              </span>

              {/* Active Dot */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#b61722]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
