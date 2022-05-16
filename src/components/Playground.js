/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

import React, { useState } from 'react';
// 1.) React -> Default Export
// 2.) useState -> Named Export

// class Playground extends Component {
//   constructor(props) {
//     this.state = {
//       count: 0,
//       spinner: false
//     }
//   }

//   setCount = () => {
//     this.setState({
//       count: blah
//     })
//   }
//   setSpinner = () => {}
// }

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinner, setSpinner] = useState(false);
  const [weapon, setWeapon] = useState("scissors");
  const [winner, setWinner] = useState(null);

  // Never, ever, ever, ever, ever, ever mutate state directly!

  const updateCount = (num) => {
    if (count + num < 0 || count + num > 10) {
      return;
    }
    setCount(count + num);
  }

  const userChoice = (choice) => {
    setWeapon(choice);
    // grab a random num between 0 - 2 -> select a weapon from an array...
    const compChoice = ["scissors", "rock", "paper"][Math.floor(Math.random() * 3)];
    if (choice === "rock" && compChoice === "scissors") {
      setWinner("User wins!")
    } else if (choice === "paper" && compChoice === "rock") {
      setWinner("User wins!");
    } else if (choice === "scissors" && compChoice === "paper") {
      setWinner("User wins!");
    } else if (choice === compChoice) {
      setWinner("TIE");
    }else {
      setWinner("Computer wins!");
    }
  }

  if (spinner) {
    return (
      <div className="container">
        <h3>LOADING....</h3>
        <button onClick={() => setSpinner(false)}>LOADING DONE</button>
      </div>
    )
  }

  return (
    <div className="container">
      { props.cohort === '55' ? <p>The best cohort!</p> : <p>Laaaaame!</p> }
      {count}
      <button onClick={() => updateCount(1)}>Increment</button>
      <button onClick={() => updateCount(-1)}>Decrement</button>
      <button onClick={() => setSpinner(!spinner)}>
        {spinner ? "Turn it off!" : "Turn it on!"}
      </button>
      {winner && <h3>{winner}</h3>}
      <button onClick={() => userChoice('scissors')}>Pick scissors</button>
      <button onClick={() => userChoice('rock')}>Pick rock</button>
      <button onClick={() => userChoice('paper')}>Pick paper</button>
    </div>
  )
}

// const Playground = () => {}

export default Playground;

/**
 * props?! -> Data passed from a parent (component) to a child (component)
 * state?! -> Data that 'lives' in the component itself
 */