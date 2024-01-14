// utilities
import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Question from "./Question.jsx";

// data
import { questionsData } from "../data.js";

{/* 
to do:
- on submit we gotta compare our states:
answers (chosen answers) with questions (if the chosen answers are correct)
- correct answers gotta be highlighted with green (regardless of if previously selected)
- wrong answers gotta be highlighted with red (only if selected)
- if successful, transfer the code to the Question component
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

    function handleSubmit(event) {
        event.preventDefault()
        setQuizThrough(prevQuizThrough => !prevQuizThrough)
        console.log(quizThrough)
    }



    return (
        <form className="QuizPage__General" onSubmit={handleSubmit}>

            {
                // mapping questions objects (from the "questions" state)
                questions.map((question) => {
                    return (
                        <Question
                            question={question}
                            answers={answers}
                            handleChange={handleChange}
                            quizThrought={quizThrough}
                            key={nanoid()}
                        />
                    )
                })
            }

            <button className="QuizPage__Button">
                Check answers
            </button>

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