import { useState } from "react";

{/* 
to do:
- add styles for selected (for buttons to get background color)
- see what you can do with inputs' properties
- add more object properties (questions 2, 3, 4...)
- first manually add those questions + answers
- then try mapping it
- add submit button
- on submit we gotta compare our states:
answers (chosen answers) with questions (if the chosen answers are correct)
- correct answers gotta be highlighted with green (regardless of if previously selected)
- wrong answers gotta be highlighted with red (only if selected)
- if successful, transfer the code to the Question component
*/}

export default function RadioButtonTest({ questions }) {
    const [answers, setAnswers] = useState({
        goodbyeInSpanish: ""
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

            <div className="Question__General">

                <p className="Question__Title">{questions[0].title}</p>

                <fieldset className="Question__AnswersRow">

                    <label
                        htmlFor="radio1"
                        className=
                        {answers[questions[0].relatedAnswersProperty] === questions[0].answer1.answer
                            ? "Question__SingleAnswerCheckedTest"
                            : "Question__SingleAnswerTest"}
                    >
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio1"
                            name={questions[0].relatedAnswersProperty}
                            value={questions[0].answer1.answer}
                            checked={answers.goodbyeInSpanish === questions[0].answer1.answer}
                            onChange={handleChange}
                        />
                        {questions[0].answer1.answer}
                    </label>

                    <label
                        htmlFor="radio2"
                        className=
                        {answers[questions[0].relatedAnswersProperty] === questions[0].answer2.answer
                            ? "Question__SingleAnswerCheckedTest"
                            : "Question__SingleAnswerTest"}
                    >
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio2"
                            name={questions[0].relatedAnswersProperty}
                            value={questions[0].answer2.answer}
                            checked={answers.goodbyeInSpanish === "hola"}
                            onChange={handleChange}
                        />
                        {questions[0].answer2.answer}
                    </label>

                    <label
                        htmlFor="radio3"
                        className=
                        {answers[questions[0].relatedAnswersProperty] === questions[0].answer3.answer
                            ? "Question__SingleAnswerCheckedTest"
                            : "Question__SingleAnswerTest"}
                    >
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio3"
                            name={questions[0].relatedAnswersProperty}
                            value={questions[0].answer3.answer}
                            checked={answers.goodbyeInSpanish === "au revoir"}
                            onChange={handleChange}
                        />
                        {questions[0].answer3.answer}
                    </label>

                    <label
                        htmlFor="radio4"
                        className=
                        {answers[questions[0].relatedAnswersProperty] === questions[0].answer4.answer
                            ? "Question__SingleAnswerCheckedTest"
                            : "Question__SingleAnswerTest"}
                    >
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio4"
                            name={questions[0].relatedAnswersProperty}
                            value={questions[0].answer4.answer}
                            checked={answers.goodbyeInSpanish === "salir"}
                            onChange={handleChange}
                        />
                        {questions[0].answer4.answer}
                    </label>
                </fieldset>
            </div>
        </div>
    )
}