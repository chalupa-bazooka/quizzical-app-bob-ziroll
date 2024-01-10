export default function Question({questionData}) {
    return (
        <div className="Question__General">
            <p className="Question__Title">{questionData.question}</p>
            <div className="Question__AnswersRow">
                <div className="Question__SingleAnswer">{questionData.answer1.answer}</div>
                <div className="Question__SingleAnswer">{questionData.answer2.answer}</div>
                <div className="Question__SingleAnswer">{questionData.answer3.answer}</div>
                <div className="Question__SingleAnswer">{questionData.answer4.answer}</div>
            </div>
        </div>
    )
}