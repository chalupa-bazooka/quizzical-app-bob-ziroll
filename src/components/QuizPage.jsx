// utilities
import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Question from "./Question.jsx";

// data
import { questionsData } from "../data.js";

{/* 
to do:
- add Clear button to remove all clicks when quizThrough is false (remove all selections);
- Clear button should only be visible when quizThrough is false;
- make buttons reclickable when quizThrough is false: you should be able to select & deselect them;
- make both IntroScreen & QuizPage component active simultaneously (perhaps you'll have to put QuizPage into IntroScreen for that)
- if not all questions are answered, notify the user that they must answer all questions before checking answers
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



    function handleSubmit(event) {
        event.preventDefault()
        setQuizThrough(prevQuizThrough => !prevQuizThrough)
    }

    return (
        <form className="QuizPage__General" onSubmit={!quizThrough ? handleSubmit : restart}>

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

            <div>
                <button className="QuizPage__Button">
                    {
                        !quizThrough ? "Check answers" : "Restart"
                    }
                </button>
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