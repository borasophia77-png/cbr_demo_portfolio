import React, { useState } from 'react';
import { SkillCategory, Language } from '../types';
import { FlaskConical, Layers, CheckCircle2, Info } from 'lucide-react';

interface SkillsSectionProps {
  categories: SkillCategory[];
  language: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories, language }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className="w-4 h-4 text-[#b61722]" />;
      case 'Layers':
      default:
        return <Layers className="w-4 h-4 text-[#b61722]" />;
    }
  };

  return (
    <section id="skills" className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col">
        <span className="text-xs font-bold text-[#b61722] tracking-widest uppercase mb-1">
          EXPERTISE
        </span>
        <h2 className="text-2xl font-bold text-[#151c27]">
          {language === 'ko' ? '보유 기술 & 도구' : 'Skills & Tools'}
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#f0f3ff] p-6 rounded-xl border border-[#dce2f3] flex flex-col gap-4 shadow-xs"
          >
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#151c27] flex items-center gap-2">
              {getIcon(cat.icon)}
              <span>{language === 'ko' ? cat.titleKo : cat.title}</span>
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const isSelected = activeSkill === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setActiveSkill(isSelected ? null : skill.name)}
                    className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? 'bg-[#b61722] text-white border-[#b61722] shadow-xs scale-105'
                        : 'bg-white text-[#151c27] border-[#e4beba]/60 hover:border-[#b61722] hover:bg-rose-50/50'
                    }`}
                  >
                    <span className="font-medium">{skill.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Skill Detail Tooltip box if activeSkill is in this category */}
            {activeSkill &&
              cat.skills.some((s) => s.name === activeSkill) && (
                <div className="mt-2 p-3 bg-white rounded-lg border border-rose-200 text-xs text-[#151c27] flex items-start gap-2 animate-in fade-in">
                  <Info className="w-4 h-4 text-[#b61722] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#b61722]">
                      {activeSkill}
                    </span>
                    : {' '}
                    {cat.skills.find((s) => s.name === activeSkill)?.description ||
                      'R&D core competency.'}
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </section>
  );
};
