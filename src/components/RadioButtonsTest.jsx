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
            <fieldset>
                <p>How would one say goodbye in Spanish?</p>

                <label htmlFor="radio1">
                    <input
                        type="radio"
                        id="radio1"
                        name="goodbyeInSpanish"
                        value="adiós"
                        checked={answers.goodbyeInSpanish === "adiós"}
                        onChange={handleChange}
                    />
                    Adiós
                </label>

                <label htmlFor="radio2">
                    <input
                        type="radio"
                        id="radio2"
                        name="goodbyeInSpanish"
                        value="hola"
                        checked={answers.goodbyeInSpanish === "hola"}
                        onChange={handleChange}
                    />
                    Hola
                </label>

                <label htmlFor="radio3">
                    <input
                        type="radio"
                        id="radio3"
                        name="goodbyeInSpanish"
                        value="au revoir"
                        checked={answers.goodbyeInSpanish === "au revoir"}
                        onChange={handleChange}
                    />
                    Au Revoir
                </label>

                <label htmlFor="radio4">
                    <input
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
    )
}