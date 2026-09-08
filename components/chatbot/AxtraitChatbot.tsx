"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send } from "lucide-react";

/* ── Types ──────────────────────────────────────────────────── */
interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
}

/* ── Quick-action chips ─────────────────────────────────────── */
const quickActions = [
  { label: "🌐 Web / SaaS Development", value: "I'm interested in Web / SaaS Development" },
  { label: "⚡ AI & Workflow Automation", value: "I'd like to explore AI & Workflow Automation" },
  { label: "📈 B2B Lead Generation", value: "Tell me about B2B Lead Generation" },
  { label: "💬 Book a Direct Strategy Call", value: "I'd like to book a direct strategy call" },
];

/* ── Smart bot reply map ────────────────────────────────────── */
function getBotReply(userMsg: string, questionCount: number): string {
  const lower = userMsg.toLowerCase();

  // Lead capture trigger after 2+ exchanges
  if (questionCount >= 2) {
    if (lower.includes("web") || lower.includes("saas")) {
      return "Great — we've shipped 40+ production Next.js & SaaS platforms. Our engineering team can scope your project in 48 hours. Would you like us to reach out? Drop your email or WhatsApp number below and we'll get back within the hour.";
    }
    if (lower.includes("ai") || lower.includes("automation") || lower.includes("workflow")) {
      return "We've deployed AI agents and automation pipelines for 30+ B2B scaleups with measurable ROI. I can connect you with our Head of AI for a personalized assessment. Just share your email or WhatsApp number and we'll set it up.";
    }
    if (lower.includes("lead") || lower.includes("generation") || lower.includes("b2b")) {
      return "Our lead-gen funnels have generated 150K+ qualified leads for B2B clients. Want our growth strategist to audit your current pipeline? Share your email or WhatsApp below and we'll schedule a free strategy session.";
    }
    if (lower.includes("call") || lower.includes("strategy") || lower.includes("book")) {
      return "Perfect — let's get you booked. Drop your email or WhatsApp number and a brief note about your project, and our team will confirm a slot within 24 hours.";
    }

    // Generic lead capture after enough questions
    return "I'd love to connect you with the right specialist on our team. Would you like our engineering team to review this? Drop your email or WhatsApp number below and we'll follow up within the hour.";
  }

  // First-pass smart replies
  if (lower.includes("web") || lower.includes("saas") || lower.includes("website") || lower.includes("app")) {
    return "Excellent choice. We specialize in production-grade Next.js applications, multi-tenant SaaS platforms, and high-performance web apps. Our stack includes Next.js 15, React Server Components, Tailwind, and serverless edge infrastructure. What kind of project are you envisioning?";
  }
  if (lower.includes("ai") || lower.includes("automation") || lower.includes("workflow") || lower.includes("bot")) {
    return "AI & Automation is our fastest-growing vertical. We build custom AI agents, RAG pipelines with Claude/GPT, intelligent workflow automation, and conversational bots that integrate with your existing CRM and tools. What process are you looking to automate?";
  }
  if (lower.includes("lead") || lower.includes("generation") || lower.includes("b2b") || lower.includes("growth")) {
    return "Our B2B Lead Generation engine combines intent-based outbound, paid media funnels, and CRM-integrated nurture sequences. We've helped clients achieve 3-5x pipeline growth. What's your current acquisition channel?";
  }
  if (lower.includes("call") || lower.includes("strategy") || lower.includes("book") || lower.includes("meeting")) {
    return "Absolutely — our strategy calls are complimentary and typically last 30 minutes. We'll discuss your goals, current tech stack, and map out a high-level roadmap. What's the best email or phone number to reach you?";
  }
  if (lower.includes("pricing") || lower.includes("cost") || lower.includes("budget") || lower.includes("price")) {
    return "Our project engagements typically start at $5K for MVPs and scale based on complexity. We offer fixed-price, retainer, and milestone-based models. Would you like a custom quote? Tell me a bit about your project scope.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey there! Welcome to Axtrait. I'm here to help you explore our digital solutions — from web & SaaS development to AI automation and B2B growth. What are you working on?";
  }

  return "That's a great question. At Axtrait, we combine cutting-edge engineering with strategic design to deliver digital solutions that drive real business outcomes. Could you tell me more about what you're building or looking to scale?";
}

/* ── Chatbot Context (for Navbar sync) ──────────────────────── */
import { createContext, useContext } from "react";

interface ChatbotContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const ChatbotContext = createContext<ChatbotContextType>({
  isOpen: false,
  toggle: () => {},
  open: () => {},
  close: () => {},
});

export function useChatbot() {
  return useContext(ChatbotContext);
}

/* ── Provider Wrapper ───────────────────────────────────────── */
export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ChatbotContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
      <AxtraitChatbot />
    </ChatbotContext.Provider>
  );
}

/* ── Main Chatbot Component ─────────────────────────────────── */
function AxtraitChatbot() {
  const { isOpen, toggle, close } = useChatbot();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [questionCount, setQuestionCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const greeting: ChatMessage = {
    id: "greeting",
    role: "bot",
    text: "Welcome to Axtrait. I'm your digital architecture assistant. What are you looking to build or scale today?",
    timestamp: new Date(),
  };

  // Auto-dismiss tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setTooltipVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const addBotReply = useCallback(
    (userText: string, currentCount: number) => {
      setIsTyping(true);
      const delay = 600 + Math.random() * 800;
      setTimeout(() => {
        const reply = getBotReply(userText, currentCount);
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            role: "bot",
            text: reply,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, delay);
    },
    []
  );

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newCount = questionCount + 1;
    setQuestionCount(newCount);
    setShowChips(false);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    addBotReply(trimmed, newCount);
  }, [input, questionCount, addBotReply]);

  const handleChipClick = useCallback(
    (value: string) => {
      const newCount = questionCount + 1;
      setQuestionCount(newCount);
      setShowChips(false);

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        text: value,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);

      addBotReply(value, newCount);
    },
    [questionCount, addBotReply]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <>
      {/* ── Bottom-Left Floating Trigger ──────────────────────── */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
        {/* Teaser Tooltip */}
        <AnimatePresence>
          {tooltipVisible && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-black/90 backdrop-blur border border-[#0acd00]/30 text-white text-xs px-3 py-1.5 rounded-full hidden sm:block font-['Montserrat'] whitespace-nowrap order-2"
            >
              Talk to Axtrait AI ✦
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bot Avatar Button */}
        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close Axtrait AI Assistant" : "Open Axtrait AI Assistant"}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0a0a0c] via-[#051a09] to-[#02280d] border border-[#0acd00]/40 shadow-[0_0_25px_rgba(10,205,0,0.3)] hover:scale-105 transition-all flex items-center justify-center relative cursor-pointer order-1"
        >
          <Image
            src="/images/Chatbot-Icon.png"
            alt="Axtrait AI"
            width={40}
            height={40}
            className="w-10 h-10 object-contain rounded-full"
          />
          {/* Online Status Pulse */}
          <span className="w-3 h-3 bg-[#0acd00] rounded-full border-2 border-black absolute top-0.5 right-0.5 animate-pulse" />
        </button>
      </div>

      {/* ── Chat Window ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbot-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[82vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-[#0acd00]/40 backdrop-blur-xl bg-[#070709]/95"
          >
            {/* ── Header ─────────────────────────────────────────── */}
            <div className="bg-gradient-to-r from-[#0a0a0c] via-[#051a09] to-[#02280d] border-b border-[#0acd00]/20 p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#0acd00]/30 shrink-0">
                  <Image
                    src="/images/Chatbot-Icon.png"
                    alt="Axtrait AI"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-bold font-['Syne'] leading-tight">
                    Axtrait Intelligence
                  </p>
                  <p className="text-zinc-400 text-[11px] font-['Montserrat'] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#0acd00] rounded-full inline-block" />
                    Live Assistant • Online
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="w-8 h-8 rounded-full bg-zinc-800/60 hover:bg-zinc-700/80 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Message Scroll Area ────────────────────────────── */}
            <div
              ref={scrollRef}
              className="bg-[#070709] p-4 flex-1 overflow-y-auto space-y-3.5 chatbot-scroll"
            >
              {/* Greeting */}
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-[#0acd00]/20 shrink-0 mt-0.5">
                  <Image
                    src="/images/Chatbot-Icon.png"
                    alt="Bot"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-zinc-900/90 border border-[#0acd00]/20 text-zinc-100 text-sm p-3.5 rounded-2xl rounded-tl-sm leading-relaxed max-w-[85%] font-['Montserrat']">
                  {greeting.text}
                </div>
              </div>

              {/* Quick-Action Chips */}
              {showChips && messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pl-9">
                  {quickActions.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => handleChipClick(chip.value)}
                      className="text-xs font-semibold px-3.5 py-2 rounded-full bg-zinc-800/80 border border-[#0acd00]/25 text-zinc-200 hover:bg-[#0acd00]/15 hover:border-[#0acd00]/50 hover:text-white transition-all cursor-pointer font-['Montserrat']"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((msg) =>
                msg.role === "bot" ? (
                  <div key={msg.id} className="flex gap-2.5 items-start">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-[#0acd00]/20 shrink-0 mt-0.5">
                      <Image
                        src="/images/Chatbot-Icon.png"
                        alt="Bot"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-zinc-900/90 border border-[#0acd00]/20 text-zinc-100 text-sm p-3.5 rounded-2xl rounded-tl-sm leading-relaxed max-w-[85%] font-['Montserrat']">
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-gradient-to-r from-[#051a09] to-[#02280d] border border-[#0acd00]/40 text-white text-sm p-3.5 rounded-2xl rounded-tr-sm max-w-[82%] font-['Montserrat'] leading-relaxed">
                      {msg.text}
                    </div>
                  </div>
                )
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-[#0acd00]/20 shrink-0 mt-0.5">
                    <Image
                      src="/images/Chatbot-Icon.png"
                      alt="Bot"
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-zinc-900/90 border border-[#0acd00]/20 text-zinc-400 text-sm p-3.5 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#0acd00] rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-[#0acd00] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-[#0acd00] rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* ── Sticky Input Footer ────────────────────────────── */}
            <div className="p-3.5 bg-[#0a0a0c] border-t border-[#0acd00]/20 flex items-center gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message…"
                className="bg-zinc-900/80 border border-zinc-800 focus:border-[#0acd00]/60 text-white placeholder-zinc-500 text-sm rounded-xl px-4 py-2.5 flex-1 outline-none transition-colors font-['Montserrat']"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim()}
                aria-label="Send message"
                className="bg-[#0acd00] hover:bg-[#08a800] text-black font-bold p-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AxtraitChatbot;
