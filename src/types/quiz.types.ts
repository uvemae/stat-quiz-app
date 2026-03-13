export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
}

export interface QuizResult {
    questionId: number;
    question: string;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
}