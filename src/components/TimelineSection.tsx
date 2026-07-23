import React, { useState } from 'react';
import { TimelineItem, Language } from '../types';
import { Briefcase, ChevronRight, Sparkles } from 'lucide-react';

interface TimelineSectionProps {
  items: TimelineItem[];
  language: Language;
  onSelectCompany?: (companyId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  items,
  language,
  onSelectCompany,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('jo-kwang');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    if (onSelectCompany) {
      onSelectCompany(id);
    }
  };

  return (
    <section id="experience" className="flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#b61722] tracking-widest uppercase mb-1">
            RESUME
          </span>
          <h2 className="text-2xl font-bold text-[#151c27]">
            {language === 'ko' ? '경력 타임라인' : 'Interactive Timeline'}
          </h2>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative flex flex-col gap-8 pl-6 border-l-2 border-[#dce2f3]">
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-4 border-[#f9f9ff] transition-all duration-300 ${
                  isFirst
                    ? 'bg-[#b61722] shadow-xs scale-110'
                    : 'bg-[#dce2f3] group-hover:bg-[#b61722]/70'
                }`}
              />

              <div
                onClick={() => toggleExpand(item.id)}
                className={`cursor-pointer rounded-xl p-3 -m-3 transition-all ${
                  isExpanded ? 'bg-white shadow-xs border border-slate-100' : 'hover:bg-white/60'
                }`}
              >
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-medium ${
                        isFirst ? 'text-[#b61722] font-semibold' : 'text-[#404758]'
                      }`}
                    >
                      {item.period}
                    </span>
                    {item.metrics && (
                      <span className="text-[10px] bg-rose-50 text-[#b61722] px-2 py-0.5 rounded-full font-bold">
                        {item.metrics[0].label}: {item.metrics[0].value}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold ${
                      isFirst ? 'text-[#151c27]' : 'text-[#2a313d]'
                    }`}
                  >
                    {language === 'ko' ? item.companyKo : item.company}
                  </h3>

                  <p className="text-xs font-mono text-[#404758]">
                    {language === 'ko' ? item.roleKo : item.role}
                  </p>

                  {/* Bullet points */}
                  <ul className="text-sm text-[#5b403e] list-disc list-inside space-y-1 mt-2 leading-relaxed">
                    {(language === 'ko' ? item.descriptionKo : item.description).map(
                      (desc, descIdx) => (
                        <li key={descIdx} className="text-[#151c27]">
                          {desc}
                        </li>
                      )
                    )}
                  </ul>

                  {/* Expanded Skills Badges */}
                  {item.skillsUsed && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-slate-100">
                      {item.skillsUsed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-slate-100 text-[#404758] rounded text-[11px] font-mono"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
