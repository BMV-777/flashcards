import "./index.css";
import questions from "./flashserver";

import FlashCards from "./components/FlashCards/FlashCards";
console.log(questions);

function App() {
  return (
    <div className="">
      <FlashCards questions={questions} />
    </div>
  );
}

export default App;

// codesandbox.io/s/react-exercise-flashcards-starter-exeteb?file=/src/App.js
