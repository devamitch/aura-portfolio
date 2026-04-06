import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle } from 'lucide-react';

interface AiDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AiDisclaimerModal({ isOpen, onClose }: AiDisclaimerModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-surface-high border border-white/10 p-8 rounded-3xl max-w-md w-full relative shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-on-surface-variant hover:text-white transition-colors">
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-primary" size={24} />
              <h3 className="text-xl font-bold text-white">About AI Summaries</h3>
            </div>
            <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
              <p>
                The summaries provided in this section are automatically generated using Google's Gemini AI model.
              </p>
              <p>
                They are designed to give you a quick overview of the project's core value proposition and technical achievements based on the provided descriptions.
              </p>
              <p>
                <strong className="text-white">Limitations:</strong> AI-generated content may occasionally miss nuances or oversimplify complex architectural decisions. Always refer to the full project overview and feature list for the most accurate and comprehensive information.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="mt-8 w-full py-3 bg-primary text-black font-bold rounded-full hover:scale-[1.02] transition-transform"
            >
              Understood
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
