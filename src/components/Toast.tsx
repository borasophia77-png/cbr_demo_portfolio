import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3 bg-[#151c27] text-white rounded-xl shadow-xl border border-white/10 text-sm font-medium"
        >
          {type === 'success' ? (
            <div className="p-1 rounded-full bg-[#b61722] text-white">
              <Check className="w-4 h-4" />
            </div>
          ) : (
            <div className="p-1 rounded-full bg-blue-500 text-white">
              <Info className="w-4 h-4" />
            </div>
          )}
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-xs text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
