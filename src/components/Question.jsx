export default function Question({question}) {
    return (
        <div className="Question__General">
            <p className="Question__Title">{question.title}</p>
            <div className="Question__AnswersRow">
                <div className="Question__SingleAnswer">{question.answer1.answer}</div>
                <div className="Question__SingleAnswer">{question.answer2.answer}</div>
                <div className="Question__SingleAnswer">{question.answer3.answer}</div>
                <div className="Question__SingleAnswer">{question.answer4.answer}</div>
            </div>
        </div>
    )
}