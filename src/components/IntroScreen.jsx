import QuizPage from "./QuizPage"

export default function IntroScreen({quizStart, setQuizStart}) {
    function switchQuiz(){
        setQuizStart(prevQuizStart => !prevQuizStart)
    }

    return (
        <>
            {
                !quizStart ?
                <div className="IntroScreen__General">
                    <h1 className="IntroScreen__Title">Quizzical</h1>
                    <p className="IntroScreen__Subtitle">Some description if needed</p>
                    <button className="IntroScreen__Button" onClick={switchQuiz}>Start quiz</button>
                    <img
                        className="IntroScreen__Image--BlobOrange"
                        src="src/images/blob-orange.png"
                        alt="blob orange"
                    />
                    <img
                        className="IntroScreen__Image--BlobBlue"
                        src="src/images/blob-blue.png"
                        alt="blob blue"
                    />
                </div>
                : <QuizPage switchQuiz={switchQuiz}/>
            }
        </>
    )
}