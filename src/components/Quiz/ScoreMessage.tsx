import React from 'react';

interface ScoreMessageProps {
    score: number;
    total: number;
}

const ScoreMessage: React.FC<ScoreMessageProps> = ({ score, total }) => {
    const percentage = Math.round((score / total) * 100);

    let grade = '';
    let message = '';

    if (percentage >= 90) {
        message = 'Suurepärane tulemus!';
    } else if (percentage >= 80) {
        message = 'Väga hea tulemus!';
    } else if (percentage >= 70) {
        message = 'Hea tulemus!';
    } else if (percentage >= 60) {
        message = 'Rahuldav tulemus.';
    } else if (percentage >= 50) {
        message = 'Kasin tulemus.';
    } else {
        message = 'Nõrk tulemus. Tutvu statistikaga.';
    }

    return (
        <div className="score-message">
            <h2>Viktoriin lõpetatud!</h2>
            <p className="score">Tulemus: {score}/{total} ({percentage}%)</p>
            <p className="message">{message}</p>
        </div>
    );
};

export default ScoreMessage;