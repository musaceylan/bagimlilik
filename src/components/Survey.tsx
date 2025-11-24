import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import type { UserRole } from '../types';

export const Survey: React.FC = () => {
    const [step, setStep] = useState<'role' | 'questions' | 'finished'>('role');
    const [, setRole] = useState<UserRole | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    const handleRoleSelect = (selectedRole: UserRole) => {
        setRole(selectedRole);
        setStep('questions');
    };

    const handleAnswer = (value: number) => {
        setAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: value }));

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => setCurrentQuestionIndex(prev => prev + 1), 300);
        } else {
            setStep('finished');
        }
    };

    const calculateScore = () => {
        return Object.values(answers).reduce((a, b) => a + b, 0);
    };

    if (step === 'role') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Anketi kimin adına dolduruyorsunuz?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { id: 'self', label: 'Kendim', icon: '👤' },
                            { id: 'relative', label: 'Yakınıyım', icon: '👥' },
                            { id: 'health_professional', label: 'Sağlık Personeli', icon: '👨‍⚕️' },
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
        const score = calculateScore();
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">✓</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Anket Tamamlandı</h2>
                    <p className="text-slate-600 mb-6">Katılımınız için teşekkür ederiz.</p>
                    <div className="bg-slate-100 rounded-lg p-4 mb-6">
                        <p className="text-sm text-slate-500 mb-1">Toplam Risk Puanı</p>
                        <p className="text-3xl font-bold text-primary">{score}</p>
                    </div>
                    <p className="text-sm text-slate-500">
                        Not: Bu sonuçlar tıbbi teşhis niteliği taşımaz. Lütfen profesyonel destek alınız.
                    </p>
                </motion.div>
            </div>
        );
    }

    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-2xl mb-8">
                <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>Soru {currentQuestionIndex + 1} / {questions.length}</span>
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
                        {question.text}
                    </h3>

                    <div className="space-y-3">
                        {question.type === 'yes_no' ? (
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleAnswer(5)} // Yes = High Risk? Or depends? Assuming Yes = Risk based on context
                                    className="p-4 border-2 border-slate-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all font-medium text-lg"
                                >
                                    Evet
                                </button>
                                <button
                                    onClick={() => handleAnswer(1)} // No = Low Risk
                                    className="p-4 border-2 border-slate-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all font-medium text-lg"
                                >
                                    Hayır
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex justify-between text-sm text-slate-500 px-2">
                                    <span>Hiç Katılmıyorum (1)</span>
                                    <span>Tamamen Katılıyorum (5)</span>
                                </div>
                                <div className="flex justify-between gap-2">
                                    {[1, 2, 3, 4, 5].map((val) => (
                                        <button
                                            key={val}
                                            onClick={() => handleAnswer(val)}
                                            className="w-full aspect-square flex items-center justify-center border-2 border-slate-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all font-bold text-lg"
                                        >
                                            {val}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
