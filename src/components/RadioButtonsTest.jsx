import { useState } from "react";

export default function RadioButtonTest() {
    const [profile, setProfile] = useState({
        sleptLastNightAt: ""
    })

    function handleChange(event) {
        console.log(event.target.name, event.target.value)
        setProfile((prevProfile) => {
            return { ...prevProfile, [event.target.name]: event.target.value }
        })
    }

    return (
        <div className="QuizPage__General">
            <h1>sup</h1>
            <fieldset>
                <p>Where did you sleep last night?</p>

                <label htmlFor="radio1">
                    <input
                        type="radio"
                        id="radio1"
                        name="sleptLastNightAt"
                        value="at home"
                        checked={profile.sleptLastNightAt === "at home"}
                        onChange={handleChange}
                    />
                    At home
                </label>

                <label htmlFor="radio2">
                    <input
                        type="radio"
                        id="radio2"
                        name="sleptLastNightAt"
                        value="in the pines"
                        checked={profile.sleptLastNightAt === "in the pines"}
                        onChange={handleChange}
                    />
                    In the pines
                </label>

                <label htmlFor="radio3">
                    <input
                        type="radio"
                        id="radio3"
                        name="sleptLastNightAt"
                        value="won't tell"
                        checked={profile.sleptLastNightAt === "won't tell"}
                        onChange={handleChange}
                    />
                    IDK, piss off!
                </label>
            </fieldset>
        </div>
    )
}