
import React from 'react';
import { QuizResult, Question } from '../../types/quiz.types';

interface ResultsTableProps {
    results: QuizResult[];
    questions: Question[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results, questions }) => {
    return (
        <table className="results-table">
            <thead>
            <tr>
                <th>Küsimus</th>
                <th>Sinu vastus</th>
                <th>Tulemus</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result, idx) => {
                const q = questions.find(q => q.id === result.questionId);
                return (
                    <tr key={idx}>
                        <td>{result.question}</td>
                        <td>{q?.options[result.userAnswer]}</td>
                        <td>{result.isCorrect ? '✓' : '✗'}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default ResultsTable;

