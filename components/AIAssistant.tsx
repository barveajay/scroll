
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, MessageCircle, Loader2, Sparkles, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const WHATSAPP_NUMBER = "7822830497";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: "System initialized. I am the ScrollFuel Brand Strategist. How can we fuel your brand's digital architecture in Nagpur or globally today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => m.content), userMessage].join('\n'),
        config: {
          systemInstruction: `You are the ScrollFuel AI Assistant, a technical brand architect and digital marketing expert. 
          Website: scrollfuel.in
          Email: scrollfuel@gmail.com
          Location: Nagpur HQ, Wardha Rd, Nagpur, Maharashtra, India.
          
          We specialize in: 
          1. Videography & Cinematic Productions (Ads, Music Videos, Documentaries)
          2. Technical Brand Architecture & Design (Logos, Visual Identity)
          3. Social Media Strategy & Growth
          4. Performance Marketing & Digital Ads
          5. Web Architecture (High-conversion UIs)

          When users ask for our location: We are based in Nagpur at Bidoba Sahkari Sanstha, plot no 133, Wardha Rd.
          When asked for direct contact: Redirect them to our WhatsApp at ${WHATSAPP_NUMBER} or email scrollfuel@gmail.com.
          Keep responses sophisticated, visionary, and technical. Use professional terminology.`,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Connection timing out. Please re-initiate sync.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("AI Sync Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Protocol error. Please sync directly via WhatsApp or email scrollfuel@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* WhatsApp Quick Access */}
      <button 
        onClick={openWhatsApp}
        className="absolute bottom-20 right-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={20} fill="currentColor" />
      </button>

      {/* Main AI FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden ${
          isOpen ? 'bg-indigo-600 rotate-90' : 'bg-white text-black hover:bg-indigo-600 hover:text-white'
        } shadow-[0_0_30px_rgba(99,102,241,0.3)]`}
      >
        {isOpen ? <X size={24} /> : <Zap size={24} className="animate-pulse" />}
        {!isOpen && (
          <div className="absolute inset-0 bg-grid opacity-10" />
        )}
      </button>

      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-10rem)] glass-card rounded-[2rem] flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-white">Nagpur Hub Strategist</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[8px] text-gray-500 font-bold tracking-widest uppercase">System Online</span>
              </div>
            </div>
          </div>
          <button onClick={openWhatsApp} className="text-green-500 hover:text-green-400 transition-colors">
             <MessageCircle size={18} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
          <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                <Loader2 size={16} className="animate-spin text-indigo-500" />
              </div>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          <button 
            onClick={() => setInput("Where is your Nagpur studio?")}
            className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-indigo-500 transition-all"
          >
            Location
          </button>
          <button 
            onClick={() => setInput("How to start a project?")}
            className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-indigo-500 transition-all"
          >
            Workflow
          </button>
        </div>

        {/* Footer Input */}
        <div className="p-6 pt-2">
          <div className="relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Query brand logic..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs focus:outline-none focus:border-indigo-500 pr-12 transition-all"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-indigo-500 hover:text-white transition-colors disabled:opacity-30"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="mt-3 text-[8px] text-center text-gray-600 uppercase font-black tracking-[0.2em]">
            scrollfuel.in | nagpur, mh
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
