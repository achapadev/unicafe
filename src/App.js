import "./App.css"
import React, { useState } from "react"

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total, averageScore, positive }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={averageScore} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
        {/* <div>neutral {neutral}</div> */}
        {/* <div>bad {bad}</div> */}
        {/* <div>all {total}</div>
        <div>average {averageScore}</div>
        <div>positive {positive}</div> */}
      </div>
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  let averageScore = (good * 1 + neutral * 0 + bad * -1) / total

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  )

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h2>give feedback</h2>
      {/* <button onClick={() => setGood(good + 1)}>good</button> */}
      <Button handleClick={handleGoodClick} text="good" />
      {/* <button onClick={() => setNeutral(neutral + 1)}>neutral</button> */}
      <Button handleClick={handleNeutralClick} text="neutral" />
      {/* <button onClick={() => setBad(bad + 1)}>bad</button> */}
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        averageScore={averageScore}
        positive={((good * 1) / total) * 100 + " %"}
      />
      {/* <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {averageScore}</div>
      <div>positive {((good * 1) / total) * 100 + " %"}</div> */}
    </div>
  )
}

export default App
