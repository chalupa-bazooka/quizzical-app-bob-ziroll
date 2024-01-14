// utilities
import { useState } from "react";
import { nanoid } from "nanoid";

// components
import Question from "./Question.jsx";

// data
import { questionsData } from "../data.js";

{/* 
to do:
- change the button with the state (it must turn intro Restart when quizThrough is true);
- the restart function should make everything as it was before the quiz started;
- make buttons unclickable when quizThrough is true;
- add Clear button to remove all clicks when quizThrough is false (remove all selections);
- Clear button should only be visible when quizThrough is false;
- make buttons reclickable when quizThrough is false: you should be able to select & deselect them;
- make both IntroScreen & QuizPage component active simultaneously (perhaps you'll have to put QuizPage into IntroScreen for that)
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
                            quizThrough={quizThrough}
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