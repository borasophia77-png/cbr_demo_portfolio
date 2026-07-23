import React from 'react';
import { ProjectItem, Language } from '../types';
import { ExternalLink, Layers, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  language: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  language,
  onSelectProject,
}) => {
  return (
    <section id="projects" className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#b61722] tracking-widest uppercase mb-1">
            PORTFOLIO
          </span>
          <h2 className="text-2xl font-bold text-[#151c27]">
            {language === 'ko' ? '주요 프로젝트' : 'Key Projects'}
          </h2>
        </div>
        <span className="text-xs font-mono text-[#5b403e]">
          {projects.length} {language === 'ko' ? '개 프로젝트' : 'Projects'}
        </span>
      </div>

      {/* Project Cards List */}
      <div className="flex flex-col gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-xl border border-[#e4beba]/60 shadow-xs p-6 flex flex-col gap-5 hover:shadow-md transition-all duration-300 relative group"
          >
            {/* Top row */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <span className="text-xl font-mono font-semibold text-[#dce2f3] group-hover:text-[#b61722] transition-colors">
                {proj.number}
              </span>
              <div className="text-right">
                <h3 className="text-xl font-bold text-[#151c27]">
                  {language === 'ko' ? proj.titleKo : proj.title}
                </h3>
                <p className="text-xs font-mono text-[#b61722] font-medium mt-0.5">
                  {(language === 'ko' ? proj.companyKo : proj.company)} | {proj.year}
                </p>
              </div>
            </div>

            {/* Problem / Research / Action / Result Flow */}
            <div className="space-y-3.5 text-sm">
              {/* Problem */}
              {proj.problem && (
                <div className="flex gap-3 items-start">
                  <div className="flex-none pt-0.5">
                    <span className="px-2 py-0.5 bg-[#ffdad6] text-[#93000a] text-[10px] font-bold rounded tracking-wide">
                      PROBLEM
                    </span>
                  </div>
                  <p className="text-[#151c27] leading-relaxed">
                    {language === 'ko' ? proj.problemKo : proj.problem}
                  </p>
                </div>
              )}

              {/* Research */}
              {proj.research && (
                <div className="flex gap-3 items-start">
                  <div className="flex-none pt-0.5">
                    <span className="px-2 py-0.5 bg-[#d9dff5] text-[#5c6274] text-[10px] font-bold rounded tracking-wide">
                      RESEARCH
                    </span>
                  </div>
                  <p className="text-[#151c27] leading-relaxed">
                    {language === 'ko' ? proj.researchKo : proj.research}
                  </p>
                </div>
              )}

              {/* Action */}
              {proj.action && (
                <div className="flex gap-3 items-start">
                  <div className="flex-none pt-0.5">
                    <span className="px-2 py-0.5 bg-[#00855b] text-[#f5fff6] text-[10px] font-bold rounded tracking-wide">
                      ACTION
                    </span>
                  </div>
                  <p className="text-[#151c27] leading-relaxed">
                    {language === 'ko' ? proj.actionKo : proj.action}
                  </p>
                </div>
              )}

              {/* Result */}
              {proj.result && (
                <div className="flex gap-3 items-start">
                  <div className="flex-none pt-0.5">
                    <span className="px-2 py-0.5 bg-[#da3437] text-white text-[10px] font-bold rounded tracking-wide">
                      RESULT
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#b61722] leading-relaxed">
                      {language === 'ko' ? proj.resultKo : proj.result}
                    </p>

                    {/* Highlight metrics boxes */}
                    {proj.metrics && proj.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {proj.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-[#e7eefe] p-3 rounded-lg flex flex-col justify-center"
                          >
                            <p className="text-[11px] text-[#5b403e] font-medium">
                              {language === 'ko' ? m.labelKo : m.label}
                            </p>
                            <p className="text-xl font-bold text-[#b61722]">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Case Study Detail Trigger */}
            <button
              onClick={() => onSelectProject(proj)}
              className="mt-2 w-full py-2.5 px-4 bg-[#f0f3ff] hover:bg-[#e2e8f8] text-[#151c27] rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#b61722]" />
              <span>{language === 'ko' ? '상세 케이스 스터디 보기' : 'View Full Case Study'}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
