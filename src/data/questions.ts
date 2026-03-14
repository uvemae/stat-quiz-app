import { Question } from '../types/quiz.types';

export const questions: Question[] = [
    {
        id: 1,
        question: "Mis on Eesti pealinn?",
        options: ["Tartu", "Tallinn", "Narva", "Reval", "Helsinki"],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "Mitu linna on Eestis?",
        options: ["47", "15", "78"],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "Millal taastas Eesti iseseisvuse?",
        options: ["24. veebruar 1918", "20. august 1991", "2. veebruar 1920"],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Mis on Eesti rahvaarv 2025. aastal?",
        options: ["2,5 miljonit", "3,1 miljonit", "1,37 miljonit"],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "Millal loodi Statistikaamet?",
        options: ["2000", "1921", "1991"],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "Mitu valda on Eestis?",
        options: ["52", "79", "63"],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "Mis on Eesti pindala?",
        options: ["55 227 km²", "45 335 km²", "65 227 km²"],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "Millal toimus viimane rahvaloendus Eestis?",
        options: ["2019", "2023", "2021"],
        correctAnswer: 2
    },
    {
        id: 9,
        question: "Mitu meresaart on Eestis (umbes)?",
        options: ["Üle 2300", "Umbes 500", "Alla 100"],
        correctAnswer: 0
    },
    {
        id: 10,
        question: "Eesti väikseim vald rahvaarvu järgi?",
        options: ["Hiiumaa vald", "Ruhnu vald", "Muhu vald"],
        correctAnswer: 1
    }
];