import React, {useState} from 'react';
import cl from "../styles/QuizContainer.module.css";

const QuizContainer = ({questions, answers}) => {

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [wasLastQuestion, setWasLastQuestion] = useState(false);
    const [score, setScore] = useState(0)
    const onAnswerSubmit = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        if (currentQuestionNumber + 1 <= answers.length) {
            setCurrentQuestionNumber(currentQuestionNumber + 1)
        }
        else {
            setWasLastQuestion(true)
        }
    }

    return (
        <div className={cl.quizContainer}>
            {wasLastQuestion ? (
                <div className={cl.scoreSection}>
                    You scored {score}/{questions.length} points!
                </div>
            ) : (
                <>
                    <div className={cl.questionSection}>
                        <div style={{ fontSize: '1.7em', marginBottom: '38px', marginTop: 16 }}>
                            Question {currentQuestionNumber}/{questions.length}
                        </div>
                        <span>{questions[currentQuestionNumber - 1]}</span>
                    </div>
                    <div className={cl.answersSection}>
                        {answers[currentQuestionNumber - 1].map((answerObj, index) => (
                            <button
                                key={index}
                                className={cl.answerButton}
                                onClick={() => onAnswerSubmit(answerObj.isCorrect)}
                            >
                                {answerObj.answer}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizContainer;