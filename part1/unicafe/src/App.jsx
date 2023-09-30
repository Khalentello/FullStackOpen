import { useState } from "react";
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    console.log("Click Good");
    const goodVote = good + 1;
    setGood(goodVote);
  };
  const handleNeutral = () => {
    console.log("Click neutral");
    const neutralVote = neutral + 1;
    setNeutral(neutralVote);
  };
  const handleBad = () => {
    console.log("Click bad");
    const badVote = bad + 1;
    setBad(badVote);
  };
  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </>
  );
}

export default App;
