// components
import IntroScreen from "./components/IntroScreen";
import QuizPage from "./components/QuizPage";

// files
import "./App.css"; // styles
import {questionsData} from "./data.js"; // data

// other
import {useState} from "react";

export default function App() {
  const [quizStart, setQuizStart] = useState(false)

  return (
    <>
      <IntroScreen quizStart={quizStart} setQuizStart={setQuizStart}/>
      {/* <QuizPage /> */}
    </>
  )
}