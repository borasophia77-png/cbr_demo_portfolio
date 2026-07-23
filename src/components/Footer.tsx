import React from 'react';
import { ProfileData, Language } from '../types';

interface FooterProps {
  profile: ProfileData;
  language: Language;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, language, onOpenResume }) => {
  return (
    <footer className="w-full bg-[#2a313d] py-12 px-6 flex flex-col items-center text-center gap-6 mt-12 text-white">
      <div className="text-xl font-bold text-[#ffdad7] tracking-tight">
        {language === 'ko' ? profile.nameKo : profile.name}
      </div>

      <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
        © 2024 Choi Bo-ra. All rights reserved. Designed for R&D Strategy & Technology Planning.
      </p>

      <div className="flex gap-6">
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-slate-300 hover:text-[#ffdad7] transition-colors"
        >
          LinkedIn
        </a>
        <button
          onClick={onOpenResume}
          className="text-xs font-mono text-slate-300 hover:text-[#ffdad7] transition-colors cursor-pointer"
        >
          Resume PDF
        </button>
      </div>
    </footer>
  );
};
