import React, { useState } from 'react';
import { ProfileData, Language } from '../types';
import { Download, Mail, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  profile: ProfileData;
  language: Language;
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  language,
  onOpenResume,
  onContactClick,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="intro"
      className="flex flex-col items-center text-center gap-6 pt-6 pb-2"
    >
      {/* Avatar Container */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ffdad7] flex items-center justify-center p-1 shadow-md ring-4 ring-white relative group">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#d3daea] flex items-center justify-center">
          {!imgError ? (
            <img
              src={profile.heroAvatar}
              alt={profile.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="text-2xl font-bold text-[#b61722]">
              {language === 'ko' ? profile.nameKo : profile.name}
            </span>
          )}
        </div>
      </div>

      {/* Name and Subtitle */}
      <div className="flex flex-col gap-2 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#151c27] tracking-tight">
          {language === 'ko' ? profile.nameKo : profile.name}
        </h1>
        <p className="text-[#b61722] font-semibold text-sm sm:text-base leading-snug px-2">
          {language === 'ko' ? profile.titleKo : profile.title}
        </p>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {profile.hashtags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#e2e8f8] text-[#5b403e] rounded-full text-xs font-mono font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quote Banner with Red Accent Bar */}
      <div className="w-full max-w-md p-5 bg-white border border-[#e4beba]/60 rounded-xl shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b61722]"></div>
        <p className="text-base sm:text-lg text-[#151c27] italic font-medium leading-relaxed pl-1">
          {language === 'ko' ? profile.quoteKo : profile.quote}
        </p>
      </div>

      {/* Action CTA Buttons */}
      <div className="flex gap-4 w-full max-w-md">
        <button
          onClick={onOpenResume}
          className="flex-1 py-3 px-4 border border-[#8f6f6d]/30 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-slate-50 transition-colors shadow-xs active:scale-98"
        >
          <Download className="w-4 h-4 text-[#5b403e]" />
          <span className="text-xs font-bold text-[#151c27] tracking-wider">
            {language === 'ko' ? '이력서 PDF' : 'RESUME PDF'}
          </span>
        </button>

        <button
          onClick={onContactClick}
          className="flex-1 py-3 px-4 bg-[#2a313d] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#151c27] transition-all shadow-xs active:scale-98"
        >
          <Mail className="w-4 h-4 text-rose-300" />
          <span className="text-xs font-bold tracking-wider">
            {language === 'ko' ? '문의하기' : 'CONTACT'}
          </span>
        </button>
      </div>
    </section>
  );
};
