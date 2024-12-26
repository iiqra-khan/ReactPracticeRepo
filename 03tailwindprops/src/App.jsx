import Card from './components/card'
import './App.css'

function App() {
  let myObj = {
    username: "iqra",
    age : 23
  }

  let newArr = [ 1, 2, 3

  ]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4 '>Tailwind test </h1>
      <Card username = "iqra" />
      {/* <Card channel = "this is from channel to props" someObj = {myObj} arr = {newArr}/> */}
      <Card username="khan"/>
    </>
  )
}

export default App
