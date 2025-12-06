import type { Language } from '../types';

export const translations: Record<Language, {
    welcome: string;
    start: string;
    role_selection: string;
    roles: {
        self: string;
        relative: string;
        health_professional: string;
    };
    survey: {
        back: string;
        question: string;
        scale_info: string;
        scale_low: string;
        scale_high: string;
        agree_low: string;
        agree_high: string;
    };
    results: {
        title: string;
        total_score: string;
        restart: string;
        professional_help: string;
        expert_help: string;
        risk_groups: {
            no_risk: string;
            low_risk: string;
            medium_risk: string;
            high_risk: string;
            severe_risk: string;
        };
        advice: {
            no_risk: string;
            low_risk: string;
            medium_risk: string;
            high_risk: string;
            severe_risk: string;
        };
    };
}> = {
    tr: {
        welcome: "Bağımlılık Anketi",
        start: "Başla",
        role_selection: "Anketi kimin adına dolduruyorsunuz?",
        roles: {
            self: "Kendim",
            relative: "Yakınıyım",
            health_professional: "Sağlık Personeli"
        },
        survey: {
            back: "Geri",
            question: "Soru",
            scale_info: "Her soru 1 (düşük risk) ile 5 (yüksek risk) arasında puanlanır.",
            scale_low: "Düşük Risk",
            scale_high: "Yüksek Risk",
            agree_low: "Hiç Katılmıyorum",
            agree_high: "Tamamen Katılıyorum"
        },
        results: {
            title: "Sonuçlarınız",
            total_score: "Toplam Puan",
            restart: "Anketi Tekrarla",
            professional_help: "Profesyonel Destek Al (e-Nabız)",
            expert_help: "Uzman Yardımı Al",
            risk_groups: {
                no_risk: "Risksiz Grup",
                low_risk: "Az Riskli Grup",
                medium_risk: "Orta Riskli Grup",
                high_risk: "Çok Riskli Grup",
                severe_risk: "Şiddetli Düzeyde Riskli Grup"
            },
            advice: {
                no_risk: "Bağımlılık riskiniz bulunmamaktadır. Sağlıklı yaşam alışkanlıklarınızı sürdürün.",
                low_risk: "Düşük düzeyde risk taşıyorsunuz. Dikkatli olmanızda fayda var.",
                medium_risk: "Orta düzeyde risk altındasınız. Bir uzmana danışmanız önerilir.",
                high_risk: "Yüksek risk grubundasınız. Lütfen profesyonel destek alınız.",
                severe_risk: "Acil durum! Lütfen en kısa sürede bir sağlık kuruluşuna veya Yeşilay Danışmanlık Merkezi'ne başvurunuz."
            }
        }
    },
    en: {
        welcome: "Addiction Survey",
        start: "Start",
        role_selection: "Who are you filling this survey for?",
        roles: {
            self: "Myself",
            relative: "My Relative",
            health_professional: "Health Professional"
        },
        survey: {
            back: "Back",
            question: "Question",
            scale_info: "Each question is scored between 1 (low risk) and 5 (high risk).",
            scale_low: "Low Risk",
            scale_high: "High Risk",
            agree_low: "Strongly Disagree",
            agree_high: "Strongly Agree"
        },
        results: {
            title: "Your Results",
            total_score: "Total Score",
            restart: "Restart Survey",
            professional_help: "Get Professional Support (e-Nabız)",
            expert_help: "Get Expert Help",
            risk_groups: {
                no_risk: "No Risk Group",
                low_risk: "Low Risk Group",
                medium_risk: "Medium Risk Group",
                high_risk: "High Risk Group",
                severe_risk: "Severe Risk Group"
            },
            advice: {
                no_risk: "You have no addiction risk. Maintain your healthy lifestyle habits.",
                low_risk: "You have a low level of risk. It is useful to be careful.",
                medium_risk: "You are at medium risk. Consulting a specialist is recommended.",
                high_risk: "You are in the high risk group. Please get professional support.",
                severe_risk: "Emergency! Please apply to a health institution or Green Crescent Counseling Center as soon as possible."
            }
        }
    },
    ar: {
        welcome: "استبيان الإدمان",
        start: "يبدأ",
        role_selection: "لمن تملأ هذا الاستبيان؟",
        roles: {
            self: "نفسي",
            relative: "قريبي",
            health_professional: "محترف صحي"
        },
        survey: {
            back: "رجوع",
            question: "سؤال",
            scale_info: "يتم تسجيل كل سؤال بين 1 (خطر منخفض) و 5 (خطر مرتفع).",
            scale_low: "خطر منخفض",
            scale_high: "خطر مرتفع",
            agree_low: "لا أوافق بشدة",
            agree_high: "أوافق بشدة"
        },
        results: {
            title: "نتائجك",
            total_score: "مجموع النقاط",
            restart: "إعادة الاستبيان",
            professional_help: "احصل على دعم احترافي (e-Nabız)",
            expert_help: "احصل على مساعدة الخبراء",
            risk_groups: {
                no_risk: "مجموعة بلا مخاطر",
                low_risk: "مجموعة منخفضة المخاطر",
                medium_risk: "مجموعة متوسطة المخاطر",
                high_risk: "مجموعة عالية المخاطر",
                severe_risk: "مجموعة شديدة الخطورة"
            },
            advice: {
                no_risk: "ليس لديك خطر الإدمان. حافظ على عادات نمط حياتك الصحية.",
                low_risk: "لديك مستوى منخفض من المخاطر. من المفيد أن تكون حذرا.",
                medium_risk: "أنت في خطر متوسط. يوصى باستشارة أخصائي.",
                high_risk: "أنت في مجموعة عالية المخاطر. يرجى الحصول على دعم احترافي.",
                severe_risk: "طوارئ! يرجى التقدم بطلب إلى مؤسسة صحية أو مركز استشارات الهلال الأخضر في أقرب وقت ممكن."
            }
        }
    },
    es: {
        welcome: "Encuesta de Adicción",
        start: "Comenzar",
        role_selection: "¿Para quién estás llenando esta encuesta?",
        roles: {
            self: "Yo mismo",
            relative: "Mi Pariente",
            health_professional: "Profesional de la Salud"
        },
        survey: {
            back: "Atrás",
            question: "Pregunta",
            scale_info: "Cada pregunta se puntúa entre 1 (bajo riesgo) y 5 (alto riesgo).",
            scale_low: "Bajo Riesgo",
            scale_high: "Alto Riesgo",
            agree_low: "Muy en Desacuerdo",
            agree_high: "Muy de Acuerdo"
        },
        results: {
            title: "Tus Resultados",
            total_score: "Puntuación Total",
            restart: "Reiniciar Encuesta",
            professional_help: "Obtener Apoyo Profesional (e-Nabız)",
            expert_help: "Obtener Ayuda de Expertos",
            risk_groups: {
                no_risk: "Grupo Sin Riesgo",
                low_risk: "Grupo de Bajo Riesgo",
                medium_risk: "Grupo de Riesgo Medio",
                high_risk: "Grupo de Alto Riesgo",
                severe_risk: "Grupo de Riesgo Severo"
            },
            advice: {
                no_risk: "No tienes riesgo de adicción. Mantén tus hábitos de vida saludables.",
                low_risk: "Tienes un nivel bajo de riesgo. Es útil tener cuidado.",
                medium_risk: "Estás en riesgo medio. Se recomienda consultar a un especialista.",
                high_risk: "Estás en el grupo de alto riesgo. Por favor, obtén apoyo profesional.",
                severe_risk: "¡Emergencia! Por favor, acude a una institución de salud o al Centro de Consejería de la Media Luna Verde lo antes posible."
            }
        }
    }
};
