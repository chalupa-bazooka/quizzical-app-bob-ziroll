import { useState } from "react";
import { nanoid } from "nanoid";

{/* 
to do:
– think of where to place the answers state
- add submit button
- on submit we gotta compare our states:
answers (chosen answers) with questions (if the chosen answers are correct)
- correct answers gotta be highlighted with green (regardless of if previously selected)
- wrong answers gotta be highlighted with red (only if selected)
- if successful, transfer the code to the Question component
*/}

export default function RadioButtonTest({ questions }) {
    const [answers, setAnswers] = useState(() => {
        return questions.map((question) => {
            return question.relatedAnswerProperty
        })
    })


    function handleChange(event) {
        console.log(event.target.name, event.target.value)
        setAnswers((prevAnswers) => {
            return { ...prevAnswers, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="QuizPage__General">
            <h1>Radio Buttons Test</h1>
            {
                // mapping question objects (from the "questions" state)
                questions.map((question) => {
                    return (
                        <div className="Question__General" key={nanoid()}>
                            <p className="Question__Title">{question.title}</p>
                            <fieldset className="Question__AnswersRow">

                                {
                                    // mapping answer options (objects inside answerOptions array from the "questions" state)
                                    question.answerOptions.map((answerOption) => {
                                        return (
                                            <label
                                                className=
                                                {answers[question.relatedAnswersProperty] === answerOption.answer
                                                    ? "Question__SingleAnswerCheckedTest"
                                                    : "Question__SingleAnswerTest"}
                                                key={nanoid()}
                                            >
                                                <input
                                                    className="Question__SingleAnswerTestInput"
                                                    type="radio"
                                                    name={question.relatedAnswersProperty}
                                                    value={answerOption.answer}
                                                    checked={answers[question.relatedAnswersProperty] === answerOption.answer}
                                                    onChange={handleChange}
                                                />
                                                {answerOption.answer}
                                            </label>
                                        )
                                    })
                                }
                            </fieldset>
                        </div>
                    )
                })
            }
        </div>
    )
}