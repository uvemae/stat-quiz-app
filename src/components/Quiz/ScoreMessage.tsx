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
        grade = '5';
        message = 'Suurepärane!';
    } else if (percentage >= 80) {
        grade = '4';
        message = 'Väga hea!';
    } else if (percentage >= 70) {
        grade = '3';
        message = 'Hea!';
    } else if (percentage >= 60) {
        grade = '2';
        message = 'Rahuldav.';
    } else if (percentage >= 50) {
        grade = '1';
        message = 'Kasin.';
    } else {
        grade = '0';
        message = 'Nõrk.';
    }

    return (
        <div className="score-message">
            <h2>Viktoriin lõpetatud!</h2>
            <p className="score">Tulemus: {score}/{total} ({percentage}%)</p>
            <p className="grade">Hinne: {grade}</p>
            <p className="message">{message}</p>
        </div>
    );
};

export default ScoreMessage;