import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsField = ({ staticText, statistic, extra }) => (
  <p>
    {staticText} {statistic} {extra}
  </p>
);

const Statistics = ({ good, neutral, bad, total, avg, percent }) => (
  <>
    <StatisticsField staticText={"Good:"} statistic={good} />
    <StatisticsField staticText={"Neutral:"} statistic={neutral} />
    <StatisticsField staticText={"Bad:"} statistic={bad} />
    <StatisticsField staticText={"All:"} statistic={total} />
    <StatisticsField staticText={"Average:"} statistic={avg} />
    <StatisticsField
      staticText={"Positive: "}
      statistic={percent}
      extra={"%"}
    />
  </>
);

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
