// utilities
import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Question from "./Question.jsx";

// data
import { questionsData } from "../data.js";

{/* 
to do:
- make both IntroScreen & QuizPage component active simultaneously (perhaps you'll have to put QuizPage into IntroScreen for that)
*/}

export default function QuizPage() {
    // questions
    const [questions, setQuestions] = useState(questionsData)

    // answers-related logic
    // const [answers, setAnswers] = useState(() => {
    //     return questions.map((question) => {
    //         return answers[question.relatedAnswersProperty] = ""
    //     })
    // })

    function populateAnswers() {
        const answersObjectInitial = {}
        questions.map((question) => {
            return answersObjectInitial[question.relatedAnswersProperty] = "";
        })
        return answersObjectInitial
    }

    const [answers, setAnswers] = useState(populateAnswers())

    function checkIfAllAnswered() {
        let selectedAnswers = 0
        questions.map((question) => {
            if (answers[question.relatedAnswersProperty] !== "") {
                selectedAnswers++; // with each clicked answer, it grows by one
            }
        })
        return selectedAnswers === questions.length // returns true if they are equal
    }

    function handleChange(event) {
        setAnswers((prevAnswers) => {
            if (prevAnswers[event.target.name] !== event.target.value) {
                return { ...prevAnswers, [event.target.name]: event.target.value }
            } else {
                return { ...prevAnswers, [event.target.name]: "" }
            }
        })
    }

    // quizThrough logic
    const [quizThrough, setQuizThrough] = useState(false)

    function restart(event) {
        event.preventDefault()
        setQuizThrough(prevQuizThrough => !prevQuizThrough)
        setAnswers(populateAnswers())
    }

    function clear(event) {
        event.preventDefault()
        setAnswers(populateAnswers())
    }

    const [submitAttemptWrong, setSubmitAttemptWrong] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        if (checkIfAllAnswered()) {
            setQuizThrough(prevQuizThrough => !prevQuizThrough)
            setSubmitAttemptWrong(false)
        } else {
            setSubmitAttemptWrong(true)
        }
    }

    return (
        <form className="QuizPage__General">

            {
                // mapping questions objects (from the "questions" state)
                questions.map((question) => {
                    return (
                        <Question
                            question={question}
                            answers={answers}
                            handleChange={handleChange}
                            quizThrough={quizThrough}
                            key={nanoid()}
                        />
                    )
                })
            }

            {
                submitAttemptWrong &&
                <div className="QuizPage__Notification">
                    <p>Answer all the questions first!</p>
                    <button
                    onClick={() => setSubmitAttemptWrong(false)}
                    >
                        ✕</button>
                </div>
            }

            {/* buttons at the bottom */}
            <div className="QuizPage__ButtonBox">
                {/* this button checks answers or restarts the quiz */}
                <button className="QuizPage__Button" onClick={!quizThrough ? handleSubmit : restart}>
                    {
                        !quizThrough ? "Check answers" : "Restart"
                    }
                </button>

                {/* this button clears all the selections when quiz is not through */}
                {
                    !quizThrough &&
                    <button className="QuizPage__Button" onClick={clear}>
                        Clear selections
                    </button>
                }
            </div>

            <img
                src="src/images/quizpage-blob-blue.png"
                alt="blob blue quiz page"
                className="QuizPage__Image--BlobBlue"
            />
            <img
                src="src/images/quizpage-blob-orange.png"
                alt="blog orange quiz page"
                className="QuizPage__Image--BlobOrange"
            />
        </form>
    )
}