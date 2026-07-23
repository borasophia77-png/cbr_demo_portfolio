import React, { useState } from 'react';
import { ProfileData, Language } from '../types';
import { Mail, Phone, Copy, Lock, Check, Send } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileData;
  language: Language;
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  language,
  onCopyEmail,
}) => {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !senderEmail) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setShowForm(false);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-6 p-6 sm:p-8 bg-[#2a313d] rounded-2xl text-white shadow-lg relative overflow-hidden"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {language === 'ko' ? "Let's build the future together" : "Let's build the future together"}
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          {language === 'ko'
            ? '기술적 가치를 비즈니스 성과로 전환하는 여정에 함께하겠습니다.'
            : 'Bridging chemical technology expertise with strategic business success.'}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {/* Email Box */}
        <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#ffb3ad]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                EMAIL
              </span>
              <span className="text-sm sm:text-base font-mono font-medium">
                {profile.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors cursor-pointer"
            title="Copy Email"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Phone Box */}
        <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/10">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#ffb3ad]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">
                PHONE
              </span>
              <span className="text-sm sm:text-base font-mono font-medium">
                {profile.phone}
              </span>
            </div>
          </div>
          <Lock className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      <p className="text-xs text-slate-400 text-center">
        {language === 'ko'
          ? '실제 연락처는 이메일 요청 시 확인 가능합니다.'
          : 'Detailed phone contact available upon email request.'}
      </p>

      {/* Direct Quick Inquiry */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-3 bg-[#b61722] hover:bg-[#da3437] text-white rounded-xl text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>
            {language === 'ko' ? '빠른 메시지 보내기' : 'Send Direct Inquiry'}
          </span>
        </button>
      ) : (
        <form onSubmit={handleSendForm} className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-[#ffb3ad]">
              {language === 'ko' ? '메시지 전송' : 'Send Message'}
            </span>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {sentSuccess ? (
            <div className="py-4 text-center text-emerald-300 font-bold text-sm flex items-center justify-center gap-2">
              <Check className="w-5 h-5" />
              <span>
                {language === 'ko' ? '메시지가 성공적으로 전달되었습니다!' : 'Message sent successfully!'}
              </span>
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder={language === 'ko' ? '이름 / 회사명' : 'Name / Company'}
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3 py-2 bg-black/20 text-white rounded-lg text-xs placeholder-slate-400 border border-white/10 focus:outline-none focus:border-[#ffb3ad]"
                required
              />
              <input
                type="email"
                placeholder={language === 'ko' ? '회신받을 이메일 주소' : 'Your Email'}
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-3 py-2 bg-black/20 text-white rounded-lg text-xs placeholder-slate-400 border border-white/10 focus:outline-none focus:border-[#ffb3ad]"
                required
              />
              <textarea
                placeholder={language === 'ko' ? '문의 사항을 입력해 주세요.' : 'Type your message...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-black/20 text-white rounded-lg text-xs placeholder-slate-400 border border-white/10 focus:outline-none focus:border-[#ffb3ad]"
                required
              />
              <button
                type="submit"
                className="py-2.5 bg-[#b61722] hover:bg-[#da3437] text-white rounded-lg text-xs font-bold transition-colors"
              >
                {language === 'ko' ? '보내기' : 'Submit'}
              </button>
            </>
          )}
        </form>
      )}
    </section>
  );
};
