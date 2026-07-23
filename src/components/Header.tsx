import React, { useState } from 'react';
import { ProfileData, Language } from '../types';
import { Copy, Check, FileText, Globe } from 'lucide-react';

interface HeaderProps {
  profile: ProfileData;
  language: Language;
  onLanguageToggle: () => void;
  onCopyEmail: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  language,
  onLanguageToggle,
  onCopyEmail,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopy = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e4beba]/40 shadow-xs transition-colors duration-200">
      <div className="flex justify-between items-center px-4 py-3 w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#ffdad7] shadow-xs flex-shrink-0 bg-slate-100">
            {!imgError ? (
              <img
                src={profile.headerAvatar}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#b61722] text-white flex items-center justify-center font-bold text-sm">
                CB
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#151c27] leading-tight">
              {language === 'ko' ? profile.nameKo : profile.name}
            </span>
            <span className="text-[11px] font-bold text-[#b61722] tracking-widest uppercase">
              R&D STRATEGIST
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold"
            title="Toggle Language (한/영)"
          >
            <Globe className="w-3.5 h-3.5 text-[#b61722]" />
            <span>{language === 'ko' ? 'EN' : '한'}</span>
          </button>

          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>RESUME</span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#b61722] text-white rounded-lg text-xs font-bold tracking-wider hover:bg-[#da3437] transition-all active:scale-95 shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
