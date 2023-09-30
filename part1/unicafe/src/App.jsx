import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsField = ({ staticText, value, extra }) => (
  <p>
    {staticText} {value} {extra}
  </p>
);

const Statistics = ({ good, neutral, bad, total, avg, percent }) => {
  if (total == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <StatisticsField staticText={"Good:"} value={good} />
      <StatisticsField staticText={"Neutral:"} value={neutral} />
      <StatisticsField staticText={"Bad:"} value={bad} />
      <StatisticsField staticText={"All:"} value={total} />
      <StatisticsField staticText={"Average:"} value={avg} />
      <StatisticsField staticText={"Positive: "} value={percent} extra={"%"} />
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [avg, setAvg] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleGood = () => {
    console.log("Click Good");
    const newGood = good + 1;
    setGood(newGood);
    const newTotal = bad + neutral + newGood;
    setTotal(newTotal);
    const newAvg = (newGood - bad) / newTotal;
    setAvg(newAvg);
    const newPercent = (newGood * 100) / newTotal;
    setPercent(newPercent);
  };
  const handleNeutral = () => {
    console.log("Click neutral");
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    const newTotal = bad + newNeutral + good;
    setTotal(newTotal);
    const newAvg = (good - bad) / newTotal;
    setAvg(newAvg);
    const newPercent = (good * 100) / newTotal;
    setPercent(newPercent);
  };
  const handleBad = () => {
    console.log("Click bad");
    const newBad = bad + 1;
    setBad(newBad);
    const newTotal = newBad + neutral + good;
    setTotal(newTotal);
    const newAvg = (good - newBad) / newTotal;
    setAvg(newAvg);
    const newPercent = (good * 100) / newTotal;
    setPercent(newPercent);
  };
  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGood} text={"Good"} />
      <Button handleClick={handleNeutral} text={"Neutral"} />
      <Button handleClick={handleBad} text={"Bad"} />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={avg}
        percent={percent}
      />
    </>
  );
}

export default App;
