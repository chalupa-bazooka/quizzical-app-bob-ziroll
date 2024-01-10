import Question from "./Question.jsx";
import { questionsData } from "../data.js";
import { nanoid } from "nanoid";

export default function QuizPage() {
    return (
        <div className="QuizPage__General">
            {questionsData.map((question) => {
                return <Question questionData={question} key={nanoid()} />
            })}
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
        </div>
    )
}