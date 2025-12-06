export type UserRole = 'self' | 'relative' | 'health_professional';

export type QuestionType = 'yes_no' | 'scale';

export type Language = 'tr' | 'en' | 'ar' | 'es';

export interface Question {
    id: number;
    text: Record<Language, string>;
    type: QuestionType;
}

export interface SurveyResponse {
    questionId: number;
    answer: number; // 0/1 for Yes/No (normalized), 1-5 for Scale
}
