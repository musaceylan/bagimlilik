import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import type { UserRole } from '../types';
import { Results } from './Results';
import { useLanguage } from '../context/LanguageContext';

export const Survey: React.FC = () => {
    const { t, language } = useLanguage();
    const [step, setStep] = useState<'role' | 'questions' | 'finished'>('role');
    const [role, setRole] = useState<UserRole | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const [isNavigating, setIsNavigating] = useState(false);

    const handleRoleSelect = (selectedRole: UserRole) => {
        setRole(selectedRole);
        setStep('questions');
    };

    const currentQuestions = (role && questions[role]) ? questions[role] : [];

    const handleAnswer = (value: number) => {
        if (!role || isNavigating) return;

        setIsNavigating(true);
        setAnswers(prev => ({ ...prev, [currentQuestions[currentQuestionIndex].id]: value }));

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
                setIsNavigating(false);
            }, 300);
        } else {
            setStep('finished');
            setIsNavigating(false);
        }
    };

    if (step === 'role') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">{t.role_selection}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { id: 'self', label: t.roles.self, icon: '👤' },
                            { id: 'relative', label: t.roles.relative, icon: '👥' },
                            { id: 'health_professional', label: t.roles.health_professional, icon: '👨‍⚕️' },
                        ].map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleRoleSelect(option.id as UserRole)}
                                className="flex flex-col items-center justify-center p-6 border-2 border-slate-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all duration-200"
                            >
                                <span className="text-4xl mb-3">{option.icon}</span>
                                <span className="font-medium text-slate-700">{option.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        );
    }

    if (step === 'finished') {
        const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

        return (
            <Results
                score={totalScore}
                totalQuestions={currentQuestions.length}
                onRestart={() => {
                    setStep('role');
                    setRole(null);
                    setAnswers({});
                    setCurrentQuestionIndex(0);
                    setIsNavigating(false);
                }}
            />
        );
    }

    const question = currentQuestions[currentQuestionIndex];

    if (!question) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-2xl mb-8">
                <div className="flex items-center mb-4 h-8">
                    {currentQuestionIndex > 0 && (
                        <button
                            onClick={() => !isNavigating && setCurrentQuestionIndex(prev => prev - 1)}
                            disabled={isNavigating}
                            className={`flex items-center text-slate-600 hover:text-primary transition-colors font-medium text-lg ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <span className="text-2xl mr-1 pb-1">←</span> {t.survey.back}
                        </button>
                    )}
                </div>

                <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>{t.survey.question} {currentQuestionIndex + 1} / {currentQuestions.length}</span>
                    <span>%{Math.round(progress)}</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={question.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8"
                >
                    <h3 className="text-xl font-medium text-slate-800 mb-8 leading-relaxed">
                        {question.text[language]}
                    </h3>

                    <div className="space-y-3">
                        <div className="space-y-6">
                            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                                <p className="text-sm text-slate-600 text-center font-medium">
                                    {t.survey.scale_info}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="grid grid-cols-5 gap-3 px-1">
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-left col-span-2">{t.survey.agree_low}</span>
                                    <span className="col-span-1"></span>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-right col-span-2">{t.survey.agree_high}</span>
                                </div>

                                <div className="grid grid-cols-5 gap-3">
                                    {[1, 2, 3, 4, 5].map((val) => (
                                        <button
                                            key={val}
                                            onClick={() => handleAnswer(val)}
                                            disabled={isNavigating}
                                            className={`
                                                aspect-square flex flex-col items-center justify-center rounded-2xl transition-all duration-200 border-2
                                                ${isNavigating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
                                                ${val === 1 ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' : ''}
                                                ${val === 2 ? 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100' : ''}
                                                ${val === 3 ? 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100' : ''}
                                                ${val === 4 ? 'bg-lime-50 text-lime-700 border-lime-200 hover:bg-lime-100' : ''}
                                                ${val === 5 ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : ''}
                                            `}
                                        >
                                            <span className="text-2xl font-bold mb-1">{val}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
