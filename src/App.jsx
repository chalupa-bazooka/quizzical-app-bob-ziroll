// components
import IntroScreen from "./components/IntroScreen";
import QuizPage from "./components/QuizPage";
import RadioButtonTest from "./components/RadioButtonsTest.jsx";

// files
import "./App.css"; // styles
import {questionsData} from "./data.js"; // data

// other
import {useState} from "react";

export default function App() {
  const [questions, setQuestions] = useState(questionsData)

  return (
    <>
      {/* <RadioButtonTest questions={questions}/> */}
      <QuizPage questions={questions}/>
      {/* <IntroScreen/> */}
    </>
  )
}