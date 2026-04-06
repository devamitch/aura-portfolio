import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Brain } from 'lucide-react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { LiveVoice } from './LiveVoice';
import { useFirebaseProjects } from '../hooks/useFirebaseProjects';

const ai = new GoogleGenAI({ apiKey: (process as any).env.GEMINI_API_KEY });

export function Chatbot() {
  const { projects = [] } = useFirebaseProjects();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string, links?: {title: string, uri: string}[]}[]>([
    { role: 'model', text: 'Hi! I am your AI assistant. Ask me about the projects, or search the web/maps!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [deepThinking, setDeepThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Construct context from projects (RAG-lite)
      const projectContext = projects.map(p => `
        Project: ${p.title}
        Category: ${p.category}
        Location: ${p.location}
        Year: ${p.year}
        Description: ${p.description}
        Tags: ${p.tags.join(', ')}
      `).join('\n---\n');

      const systemInstruction = `
        You are a helpful assistant for Amit Chakraborty's portfolio website. 
        Amit is a Principal Architect specializing in Architectural Design & Strategy.
        
        Here is the context about Amit's projects:
        ${projectContext}
        
        Answer questions based on this context. If the user asks about something not in the context, you can use your general knowledge or the provided tools.
        Be professional, concise, and highlight Amit's expertise.
      `;

      // Determine if we need tools based on keywords (simple heuristic)
      const needsMap = userMsg.toLowerCase().includes('map') || userMsg.toLowerCase().includes('where');
      const needsSearch = userMsg.toLowerCase().includes('search') || userMsg.toLowerCase().includes('latest');

      const tools: any[] = [];
      if (needsMap) {
        tools.push({ googleMaps: {} });
      } else if (needsSearch) {
        tools.push({ googleSearch: {} });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction,
          tools: tools.length > 0 ? tools : undefined,
          thinkingConfig: deepThinking ? { thinkingLevel: ThinkingLevel.HIGH } : { thinkingLevel: ThinkingLevel.LOW }
        }
      });

      let links: { title: string, uri: string }[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.web?.uri) {
            links.push({ title: chunk.web.title || chunk.web.uri, uri: chunk.web.uri });
          }
          if (chunk.maps?.uri) {
            links.push({ title: chunk.maps.title || 'Google Maps', uri: chunk.maps.uri });
          }
        });
      }

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'No response.', links }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I encountered an error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 w-80 sm:w-96 h-[500px] bg-surface-high border border-outline-variant/30 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            <div className="p-4 bg-surface-highest border-b border-outline-variant/30 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <h3 className="font-bold text-white">Aura Assistant</h3>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setDeepThinking(!deepThinking)}
                  className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full transition-colors ${deepThinking ? 'bg-primary/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-white'}`}
                  title="Toggle Deep Thinking Mode"
                >
                  <Brain size={12} />
                  {deepThinking ? 'Deep' : 'Fast'}
                </button>
                <button onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-white">
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-on-primary rounded-tr-sm' 
                      : 'bg-surface-low text-on-surface-variant rounded-tl-sm border border-outline-variant/20'
                  }`}>
                    <div>{msg.text}</div>
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-outline-variant/20 flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">Sources:</span>
                        {msg.links.map((link, j) => (
                          <a key={j} href={link.uri} target="_blank" rel="noreferrer" className="text-primary hover:underline truncate text-xs">
                            {link.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface-low text-on-surface-variant p-3 rounded-2xl rounded-tl-sm border border-outline-variant/20 flex gap-1">
                    <span className="w-2 h-2 bg-on-surface-variant/50 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-on-surface-variant/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-on-surface-variant/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-surface-highest border-t border-outline-variant/30">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 bg-surface-low rounded-full px-4 py-2 border border-outline-variant/30 focus-within:border-primary/50 transition-colors">
                  <input 
                    type="text" 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-on-surface-variant/50"
                  />
                  <button onClick={handleSend} disabled={isLoading || !input.trim()} className="text-primary disabled:opacity-50">
                    <Send size={18} />
                  </button>
                </div>
                <LiveVoice />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
