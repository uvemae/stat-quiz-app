import React from 'react';
import { Question as QuestionType } from '../../types/quiz.types';

interface QuestionProps {
    question: QuestionType;
    onAnswer: (answerIndex: number) => void;
    currentQuestionNumber: number;
    totalQuestions: number;
}

// Kuvab ühe küsimuse koos vastuste variantidega
const Question: React.FC<QuestionProps> = ({
                                               question,
                                               onAnswer,
                                               currentQuestionNumber,
                                               totalQuestions
                                           }) => {
    const handleClick = (index: number) => {
        onAnswer(index);
    };

    return (
        <div className="question-container">
            <h2>Küsimus {currentQuestionNumber}/{totalQuestions}</h2>
            <p className="question-text">{question.question}</p>
            <div className="options">
                {question.options.map((option, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleClick(idx)}
                        className="option-button"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;