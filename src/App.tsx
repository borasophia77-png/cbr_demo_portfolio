import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import {
  PROFILE_DATA,
  TIMELINE_ITEMS,
  PROJECT_ITEMS,
  SKILL_CATEGORIES,
} from './data/portfolioData';
import { Language, ProjectItem } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
    showToast(language === 'ko' ? 'Switched to English' : '한국어로 전환되었습니다');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    showToast(
      language === 'ko'
        ? `${PROFILE_DATA.email} 주소가 복사되었습니다.`
        : `Copied ${PROFILE_DATA.email} to clipboard.`
    );
  };

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#151c27] flex flex-col font-sans selection:bg-[#ffdad7] selection:text-[#b61722]">
      {/* Top Header */}
      <Header
        profile={PROFILE_DATA}
        language={language}
        onLanguageToggle={toggleLanguage}
        onCopyEmail={handleCopyEmail}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Container */}
      <main className="pt-20 pb-28 max-w-md md:max-w-xl mx-auto px-4 sm:px-6 flex flex-col gap-16 flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          profile={PROFILE_DATA}
          language={language}
          onOpenResume={() => setIsResumeOpen(true)}
          onContactClick={handleContactClick}
        />

        {/* Interactive Career Timeline */}
        <TimelineSection
          items={TIMELINE_ITEMS}
          language={language}
        />

        {/* Portfolio Key Projects */}
        <ProjectsSection
          projects={PROJECT_ITEMS}
          language={language}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Skills & Tools */}
        <SkillsSection
          categories={SKILL_CATEGORIES}
          language={language}
        />

        {/* Contact Section */}
        <ContactSection
          profile={PROFILE_DATA}
          language={language}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Bottom Navigation for Mobile / Quick Scroll */}
      <BottomNav language={language} />

      {/* Footer */}
      <Footer
        profile={PROFILE_DATA}
        language={language}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Toast Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={PROFILE_DATA}
        timeline={TIMELINE_ITEMS}
        projects={PROJECT_ITEMS}
        skills={SKILL_CATEGORIES}
        language={language}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
      />
    </div>
  );
}
