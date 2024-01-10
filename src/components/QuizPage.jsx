import Question from "./Question.jsx"

export default function QuizPage () {
    return (
        <div className="QuizPage__General">
            <Question/>
            <button className="IntroScreen__Button">
                Check answers
            </button>
        </div>
    )
}