import React from 'react';
import './styles/variables.css'
import './styles/App.css'
import Quiz from "./components/Quiz/Quiz.tsx";

function App() {
    return (
        <div className="container">
            <h1>Statistikaameti Viktoriin</h1>
            <Quiz/>
        </div>
    );
}

export default App;