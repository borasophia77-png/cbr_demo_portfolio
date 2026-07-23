import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, Building, GraduationCap } from 'lucide-react';
import { ProfileData, TimelineItem, ProjectItem, SkillCategory, Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  timeline: TimelineItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  language: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  timeline,
  projects,
  skills,
  language,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        >
          {/* Header toolbar */}
          <div className="sticky top-0 z-20 bg-slate-900 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-[#b61722] text-white px-2 py-0.5 rounded font-bold">
                RESUME
              </span>
              <h3 className="text-sm font-bold">
                {language === 'ko' ? '최보라 - 경력기술서' : 'Choi Bo-ra - Full Resume'}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PRINT / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-8 space-y-8 text-[#151c27]" id="printable-resume">
            {/* Top Identity */}
            <div className="border-b border-slate-200 pb-6 flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-[#151c27]">
                  {language === 'ko' ? profile.nameKo : profile.name}
                </h1>
                <p className="text-[#b61722] font-semibold text-sm mt-1">
                  {language === 'ko' ? profile.titleKo : profile.title}
                </p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-slate-600 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#b61722]" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#b61722]" /> Pusan / Seoul, S.Korea
                  </span>
                </div>
              </div>

              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffdad7] flex-shrink-0 hidden sm:block">
                <img src={profile.headerAvatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-2 font-mono">
                {language === 'ko' ? '핵심 역량 요약' : 'PROFESSIONAL SUMMARY'}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                {language === 'ko'
                  ? '이차전지 음극 바인더, 46시리즈 원통형 셀 엔지니어링, 유기 절연막 감광 소재 개발 등 총 8년 4개월간의 습식 화학 및 소재 R&D 전략 경험을 보유하고 있습니다. 기술적 메커니즘 분석과 비즈니스 성과 창출을 연결하는 연구 전략가입니다.'
                  : 'R&D Strategist with 8+ years of expertise in secondary battery anode binders, 4680 cylindrical cell manufacturing engineering, and semiconductor wet chemical materials. Proven track record in bridging deep technical research with commercial success.'}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-4 font-mono flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                {language === 'ko' ? '주요 경력 사항' : 'WORK EXPERIENCE'}
              </h2>
              <div className="space-y-5">
                {timeline.map((item) => (
                  <div key={item.id} className="border-l-2 border-[#b61722] pl-4 space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-bold text-[#151c27]">
                        {language === 'ko' ? item.companyKo : item.company}
                      </h3>
                      <span className="text-xs font-mono text-[#b61722] font-semibold">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-mono font-medium text-slate-600">
                      {language === 'ko' ? item.roleKo : item.role}
                    </p>
                    <ul className="text-xs text-slate-700 list-disc list-inside space-y-1 mt-1">
                      {(language === 'ko' ? item.descriptionKo : item.description).map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h2 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-4 font-mono">
                {language === 'ko' ? '주요 프로젝트 성과' : 'KEY PROJECT HIGHLIGHTS'}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {projects.map((p) => (
                  <div key={p.id} className="p-3 bg-[#f0f3ff] rounded-lg border border-slate-200 text-xs">
                    <div className="flex justify-between items-center font-bold mb-1 text-[#151c27]">
                      <span>{language === 'ko' ? p.titleKo : p.title}</span>
                      <span className="text-[#b61722] font-mono">{p.year}</span>
                    </div>
                    <p className="text-slate-600 leading-snug">
                      {language === 'ko' ? p.resultKo : p.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-3 font-mono">
                {language === 'ko' ? '기술 및 도구' : 'CORE SKILLS & INSTRUMENTS'}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.flatMap((c) => c.skills).map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded font-mono text-xs border border-slate-200"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
