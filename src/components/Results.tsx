import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface ResultsProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart }) => {
    const { t } = useLanguage();

    // Maximum possible score is 5 per question
    const maxScore = totalQuestions * 5;
    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;

    let riskLevel = '';
    let riskColor = '';
    let advice = '';
    let showLink = false;

    if (score <= 35) {
        riskLevel = t.results.risk_groups.no_risk;
        riskColor = 'text-green-600';
        advice = t.results.advice.no_risk;
    } else if (score <= 70) {
        riskLevel = t.results.risk_groups.low_risk;
        riskColor = 'text-lime-600';
        advice = t.results.advice.low_risk;
    } else if (score <= 105) {
        riskLevel = t.results.risk_groups.medium_risk;
        riskColor = 'text-yellow-600';
        advice = t.results.advice.medium_risk;
    } else if (score <= 140) {
        riskLevel = t.results.risk_groups.high_risk;
        riskColor = 'text-orange-600';
        advice = t.results.advice.high_risk;
        showLink = true;
    } else {
        riskLevel = t.results.risk_groups.severe_risk;
        riskColor = 'text-red-600';
        advice = t.results.advice.severe_risk;
        showLink = true;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center"
            >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">{t.results.title}</h2>

                <div className="mb-8 relative pt-4">
                    <div className="text-6xl font-bold text-slate-900 mb-2">{score}</div>
                    <div className="text-sm text-slate-500">{t.results.total_score}</div>
                </div>

                <div className={`text-3xl font-bold mb-4 ${riskColor}`}>
                    {riskLevel}
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                    {advice}
                </p>

                <div className="space-y-3">
                    {showLink && (
                        <button
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                            onClick={() => window.open('https://enabiz.gov.tr/', '_blank')}
                        >
                            <span>{t.results.professional_help}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </button>
                    )}
                    {percentage >= 60 && (
                        <button
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                            onClick={() => window.open('https://www.yesilay.org.tr/', '_blank')}
                        >
                            {t.results.expert_help}
                        </button>
                    )}

                    <button
                        onClick={onRestart}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                        {t.results.restart}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
