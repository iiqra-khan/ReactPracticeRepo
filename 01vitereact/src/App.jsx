import Chai from "./chai"
import Test from "./test"

function App() {

  const username = "iqra khan"

  return (
    <> 
    <Test/>
    <p>this is author's name {username}</p> 
     {/* this is a js expression which is evaluated not the whole js */}
     <Chai/>
    </>
  )
}

export default App
