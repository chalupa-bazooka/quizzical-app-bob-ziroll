import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function Question({ question, answers, handleChange, quizThrough }) {

    function evaluateAnswer(answerOption) {
        if (!quizThrough) {
            if (answers[question.relatedAnswersProperty] === answerOption.answer) {
                return "Question__SingleAnswerChecked"
            } else {
                return "Question__SingleAnswer"
            }
        } else {
            if (answerOption.correct) {
                return "Question__SingleAnswerCorrect"
            } else if (answers[question.relatedAnswersProperty] === answerOption.answer && !answerOption.correct) {
                return "Question__SingleAnswerWrong"
            } else {
                return "Question__SingleAnswerTranluscent"
            }

        }
    }

    return (
        <div className="Question__General">
            <p className="Question__Title">{question.title}</p>

            {/* row of answers */}
            <fieldset className="Question__AnswersRow">
                {
                    // mapping answer options (objects inside answerOptions array from the "questions" state)
                    question.answerOptions.map((answerOption) => {
                        return (
                            <label
                                className={evaluateAnswer(answerOption)}
                                key={nanoid()}
                            >
                                <input
                                    className="Question__SingleAnswerInput"
                                    type="radio"
                                    name={question.relatedAnswersProperty}
                                    value={answerOption.answer}
                                    checked={answers[question.relatedAnswersProperty] === answerOption.answer}
                                    onChange={handleChange}
                                    onClick={answers[question.relatedAnswersProperty] === answerOption.answer ? handleChange : undefined}
                                    // This onClick is a weird thing but let me explain.
                                    // I wanted the answers to be double-clickable:
                                    // one click to select and the other to diselect.
                                    // But onChange doesn't work like that, it doesn't register
                                    // the second click as a change and does nothing.
                                    // onClick, on the other hand, doesn't care.
                                    // React, however, demands onChange to be present on checkable inputs.
                                    // Hence, I added both but made onClick only work when onChange can't.
                                    disabled={!quizThrough ? "" : "disabled"}
                                />
                                {answerOption.answer}
                            </label>
                        )
                    })
                }
            </fieldset>

        </div>
    )
}