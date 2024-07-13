import './styles/App.css';
import QuizContainer from "./components/QuizContainer";

function App() {

    const questions = [
        "How many countries in the world?",
        "Who was the last president of Yugoslavia?",
        "Who is the best programmer in the world?"
    ]

    const answers = [
        [
            { answer: 167, isCorrect: false },
            { answer: 327, isCorrect: true },
            { answer: 456, isCorrect: false },
            { answer: 217, isCorrect: false }
        ],

        [
            { answer: "Belush Chesucki", isCorrect: false },
            { answer: "Adriano Miloshich", isCorrect: false },
            { answer: "Karlos Gagich", isCorrect: false },
            { answer: "Slobodan Miloshevich", isCorrect: true }
        ],

        [
            { answer: "Matt", isCorrect: true },
            { answer: "Yuriy", isCorrect: false },
            { answer: "Zakhar", isCorrect: false },
            { answer: "Renat", isCorrect: false }
        ]
    ];

    return (
        <div className="App">
            <QuizContainer questions={questions} answers={answers}/>
        </div>
    );
}

export default App;
