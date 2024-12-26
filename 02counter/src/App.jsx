import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () =>{
    // console.log("clicked", Math.random());
    // setCounter(counter + 1) we can directly use this or
    counter = counter + 1
    setCounter(counter)
    console.log("clicked", counter);

    // UI updation is controlled by react
  }

  const decValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1)  
    }
    console.log("dec value: ", counter);
    
  }

  return (
    <>
      <h1>this is a counter app</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={addValue}>Add value</button> <br/>
      <button
      onClick={decValue}>Remove value</button>
    </>
  )
}

export default App
