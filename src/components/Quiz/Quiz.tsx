import React, { useState } from 'react';
import { questions } from '../../data/questions';
import { QuizResult } from '../../types/quiz.types';
import Question from './Question';
import ScoreMessage from './ScoreMessage';

const Quiz: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [results, setResults] = useState<QuizResult[]>([]);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswer = (answerIndex: number) => {
        const currentQ = questions[currentIndex];
        const isRight = answerIndex === currentQ.correctAnswer;

        const result: QuizResult = {
            questionId: currentQ.id,
            question: currentQ.question,
            userAnswer: answerIndex,
            correctAnswer: currentQ.correctAnswer,
            isCorrect: isRight
        };

        setResults([...results, result]);

        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const score = results.filter(r => r.isCorrect).length;

    if (quizFinished) {
        return (
            <div>
                <ScoreMessage score={score} total={questions.length} />
            </div>
        );
    }

    return (
        <Question
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
            currentQuestionNumber={currentIndex + 1}
            totalQuestions={questions.length}
        />
    );
};

export default Quiz;