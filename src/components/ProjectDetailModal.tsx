import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Lightbulb, AlertTriangle, Cpu, TrendingUp } from 'lucide-react';
import { ProjectItem, Language } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  language: Language;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  language,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Number & Company Header */}
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-rose-100 text-[#b61722] font-mono text-xs font-bold rounded">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {(language === 'ko' ? project.companyKo : project.company)} • {project.year}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-[#151c27] mb-4">
            {language === 'ko' ? project.titleKo : project.title}
          </h2>

          {/* Overview text */}
          {project.fullDetails && (
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
              {language === 'ko' ? project.fullDetails.overviewKo : project.fullDetails.overview}
            </p>
          )}

          {/* Key Metrics row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#e7eefe] p-4 rounded-xl border border-[#dce2f3] flex flex-col">
                  <span className="text-xs text-[#5b403e] font-medium">
                    {language === 'ko' ? m.labelKo : m.label}
                  </span>
                  <span className="text-2xl font-bold text-[#b61722] mt-1">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Flow */}
          <div className="space-y-4 mb-6">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-100 text-xs flex gap-3">
              <AlertTriangle className="w-5 h-5 text-[#b61722] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#93000a] block mb-0.5">CHALLENGE & PROBLEM</span>
                <p className="text-slate-800">
                  {language === 'ko' ? project.problemKo : project.problem}
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs flex gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-800 block mb-0.5">TECHNICAL OUTCOME</span>
                <p className="text-slate-800">
                  {language === 'ko' ? project.resultKo : project.result}
                </p>
              </div>
            </div>
          </div>

          {/* Achievements list */}
          {project.fullDetails?.keyAchievements && (
            <div className="mb-6">
              <h3 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-2 font-mono">
                {language === 'ko' ? '주요 세부 성과' : 'KEY ACHIEVEMENTS'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {(language === 'ko'
                  ? project.fullDetails.keyAchievementsKo
                  : project.fullDetails.keyAchievements
                ).map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#b61722] flex-shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies used */}
          {project.fullDetails?.technologies && (
            <div>
              <h3 className="text-xs font-bold text-[#b61722] uppercase tracking-wider mb-2 font-mono">
                {language === 'ko' ? '핵심 적용 기술' : 'CORE TECHNOLOGIES'}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.fullDetails.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded text-xs font-mono border border-slate-200"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
