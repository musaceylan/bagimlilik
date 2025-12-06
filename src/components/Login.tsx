import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Hoş Geldiniz</h1>
                    <p className="text-slate-600">Bağımlılık Risk Anketi'ne başlamak için lütfen aşağıdaki butona tıklayın.</p>
                </div>

                <button
                    onClick={() => navigate('/survey')}
                    className="w-full btn-primary text-lg py-4"
                >
                    Ankete Başla
                </button>

                <p className="mt-6 text-xs text-center text-slate-400">
                    Bu anket tamamen anonimdir. Kişisel verileriniz kaydedilmez.
                </p>
            </motion.div>
        </div>
    );
};
