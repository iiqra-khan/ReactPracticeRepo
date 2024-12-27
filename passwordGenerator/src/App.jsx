import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook
  const passRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str+= "0123456789"
    if (charAllow) str+= "!@#$%^&*+_-=[]{}~`"

    for(let i = 1; i < length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(()=> {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto rounded-lg px-3 my-8 py-3 text-violet-400 bg-gray-600 "> 
    <h1 className="text-3xl text-center my-2">Password Generator</h1>
      <div className="flex rounded-xl overflow-hidden mb-4 shadow-lg">
        {/* mx-auto */}
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
        ref = {passRef}
        />

        <button className ="outline-none bg-violet-300 hover:bg-violet-400 px-3 py-0.5 text-gray-600 shrink-0"
        onClick={copyPasswordToClipboard}>copy</button> 
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min = {6}
          max = {20}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {numAllow}
          id = "numberInput"
          onChange={() => {
            setNumAllow((prev) => !prev); //if setNumAllow(true) we will only get one chance to set the value to true the changes wont propogate everytime we click the event
          }}/>
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" 
          defaultChecked = {charAllow}
          id = "charInput"
          onChange={() => {
            setCharAllow((prev) => !prev);
          }}/>
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
