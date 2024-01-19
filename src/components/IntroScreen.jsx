import QuizPage from "./QuizPage"

export default function IntroScreen({quizStart, setQuizStart}) {
    function startQuiz(){
        setQuizStart(true)
    }

    return (
        <>
            {
                !quizStart ?
                <div className="IntroScreen__General">
                    <h1 className="IntroScreen__Title">Quizzical</h1>
                    <p className="IntroScreen__Subtitle">Some description if needed</p>
                    <button className="IntroScreen__Button" onClick={startQuiz}>Start quiz</button>
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
                : <QuizPage quizStart={quizStart} setQuizStart={setQuizStart}/>
            }
        </>
    )
}