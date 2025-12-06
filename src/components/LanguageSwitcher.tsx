import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; flag: string; label: string }[] = [
        { code: 'tr', flag: '🇹🇷', label: 'Türkçe' },
        { code: 'en', flag: '🇬🇧', label: 'English' },
        { code: 'ar', flag: '🇸🇦', label: 'العربية' },
        { code: 'es', flag: '🇪🇸', label: 'Español' },
    ];

    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div
            ref={dropdownRef}
            className="absolute top-[calc(1.5rem+env(safe-area-inset-top))] right-6 z-50"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-slate-200 hover:bg-white transition-all active:scale-95"
            >
                <span className="text-2xl">{currentLang.flag}</span>
                <span className="font-medium text-slate-700 hidden sm:block">{currentLang.label}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsOpen(false);
                            }}
                            className={`
                                w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                                ${language === lang.code ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50 text-slate-700'}
                            `}
                        >
                            <span className="text-2xl">{lang.flag}</span>
                            <span className="font-medium">{lang.label}</span>
                            {language === lang.code && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
