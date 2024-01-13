import { useState } from "react";
import { nanoid } from "nanoid";

{/* 
to do:
- can we somehow map answers not to have them as 4 separate elements but as just one?
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
                questions.map((question) => {
                    return (
                        <div className="Question__General" key={nanoid()}>
                            <p className="Question__Title">{question.title}</p>
                            <fieldset className="Question__AnswersRow">

                                <label
                                    className=
                                    {answers[question.relatedAnswersProperty] === question.answer1.answer
                                        ? "Question__SingleAnswerCheckedTest"
                                        : "Question__SingleAnswerTest"}
                                >
                                    <input
                                        className="Question__SingleAnswerTestInput"
                                        type="radio"
                                        name={question.relatedAnswersProperty}
                                        value={question.answer1.answer}
                                        checked={answers[question.relatedAnswersProperty] === question.answer1.answer}
                                        onChange={handleChange}
                                    />
                                    {question.answer1.answer}
                                </label>

                                <label
                                    className=
                                    {answers[question.relatedAnswersProperty] === question.answer2.answer
                                        ? "Question__SingleAnswerCheckedTest"
                                        : "Question__SingleAnswerTest"}
                                >
                                    <input
                                        className="Question__SingleAnswerTestInput"
                                        type="radio"
                                        name={question.relatedAnswersProperty}
                                        value={question.answer2.answer}
                                        checked={answers[question.relatedAnswersProperty] === question.answer2.answer}
                                        onChange={handleChange}
                                    />
                                    {question.answer2.answer}
                                </label>

                                <label
                                    className=
                                    {answers[question.relatedAnswersProperty] === question.answer3.answer
                                        ? "Question__SingleAnswerCheckedTest"
                                        : "Question__SingleAnswerTest"}
                                >
                                    <input
                                        className="Question__SingleAnswerTestInput"
                                        type="radio"
                                        name={question.relatedAnswersProperty}
                                        value={question.answer3.answer}
                                        checked={answers[question.relatedAnswersProperty] === question.answer3.answer}
                                        onChange={handleChange}
                                    />
                                    {question.answer3.answer}
                                </label>

                                <label
                                    className=
                                    {answers[question.relatedAnswersProperty] === question.answer4.answer
                                        ? "Question__SingleAnswerCheckedTest"
                                        : "Question__SingleAnswerTest"}
                                >
                                    <input
                                        className="Question__SingleAnswerTestInput"
                                        type="radio"
                                        name={question.relatedAnswersProperty}
                                        value={question.answer4.answer}
                                        checked={answers[question.relatedAnswersProperty] === question.answer4.answer}
                                        onChange={handleChange}
                                    />
                                    {question.answer4.answer}
                                </label>
                            </fieldset>
                        </div>
                    )
                })
            }
        </div>
    )
}