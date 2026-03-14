import React, { useState } from 'react';
import { questions } from '../../data/questions';
import { QuizResult } from '../../types/quiz.types';
import Question from './Question';
import ScoreMessage from './ScoreMessage';
import ResultsTable from './ResultsTable';

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

    const handleRestart = () => {
        setCurrentIndex(0);
        setResults([]);
        setQuizFinished(false);
    };

    const score = results.filter(r => r.isCorrect).length;

    if (quizFinished) {
        return (
            <div className="results-container">
                <ScoreMessage score={score} total={questions.length} />
                <ResultsTable results={results} questions={questions} />
                <div className="restart-button-container">
                    <a onClick={handleRestart} className="option-button" style={{cursor: 'pointer'}}>
                        Alusta uuesti
                    </a>
                    <a href="https://stat.ee/et" target="_blank" rel="noopener noreferrer" className="stat-button">
                        Tutvu statistikaga
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <Question
                question={questions[currentIndex]}
                onAnswer={handleAnswer}
                currentQuestionNumber={currentIndex + 1}
                totalQuestions={questions.length}
            />
        </div>
    );
};

export default Quiz;