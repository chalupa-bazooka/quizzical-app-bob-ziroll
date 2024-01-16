// utilities
import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Question from "./Question.jsx";

// data
import { questionsData } from "../data.js";

{/* 
to do:
- make buttons reclickable when quizThrough is false: you should be able to select & deselect them;
- make both IntroScreen & QuizPage component active simultaneously (perhaps you'll have to put QuizPage into IntroScreen for that)
- if not all questions are answered, notify the user that they must answer all questions before checking answers
- find a way to make cursor default for labels when quizThrough (with the adjacent operand, I guess (+))
- add click animation to buttons (not answer options) to make it clearer that they've been clicked
*/}

export default function QuizPage() {
    // questions
    const [questions, setQuestions] = useState(questionsData)

    // answers-related logic
    const [answers, setAnswers] = useState(() => {
        return questions.map((question) => {
            return question.relatedAnswersProperty;
        })
    })

    function handleChange(event) {
        setAnswers((prevAnswers) => {
            return { ...prevAnswers, [event.target.name]: event.target.value }
        })
    }

    // quizThrough logic
    const [quizThrough, setQuizThrough] = useState(false)

    function restart(event) {
        event.preventDefault()
        setQuizThrough(prevQuizThrough => !prevQuizThrough)
        setAnswers(() => {
            return questions.map((question) => {
                return question.relatedAnswersProperty;
            })
        })
    }

    function clear(event) {
        event.preventDefault()
        setAnswers(() => {
            return questions.map((question) => {
                return question.relatedAnswersProperty;
            })
        })
    }



    function handleSubmit(event) {
        event.preventDefault()
        setQuizThrough(prevQuizThrough => !prevQuizThrough)
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