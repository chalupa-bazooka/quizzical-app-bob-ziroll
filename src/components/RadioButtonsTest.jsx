import { useState } from "react";

export default function RadioButtonTest() {
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
            <h1>sup</h1>

            <div className="Question__General">
                <p className="Question__Title">How would one say goodbye in Spanish?</p>
                <fieldset className="Question__AnswersRow">
                    <label htmlFor="radio1" className="Question__SingleAnswerTest">
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio1"
                            name="goodbyeInSpanish"
                            value="adiós"
                            checked={answers.goodbyeInSpanish === "adiós"}
                            onChange={handleChange}
                        />
                        Adiós
                    </label>

                    <label htmlFor="radio2" className="Question__SingleAnswerTest">
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio2"
                            name="goodbyeInSpanish"
                            value="hola"
                            checked={answers.goodbyeInSpanish === "hola"}
                            onChange={handleChange}
                        />
                        Hola
                    </label>

                    <label htmlFor="radio3" className="Question__SingleAnswerTest">
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio3"
                            name="goodbyeInSpanish"
                            value="au revoir"
                            checked={answers.goodbyeInSpanish === "au revoir"}
                            onChange={handleChange}
                        />
                        Au Revoir
                    </label>

                    <label htmlFor="radio4" className="Question__SingleAnswerTest">
                        <input
                            className="Question__SingleAnswerTestInput"
                            type="radio"
                            id="radio4"
                            name="goodbyeInSpanish"
                            value="salir"
                            checked={answers.goodbyeInSpanish === "salir"}
                            onChange={handleChange}
                        />
                        Salir
                    </label>
                </fieldset>
            </div>
        </div>
    )
}