import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'


function MyApp(){
    return(
        <>
        <h1>my app... </h1>
        </>
    )
}

const anotherUser = "sumbul"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google', 
    anotherUser
)


createRoot(document.getElementById('root')).render(
    // <MyApp />
    // MyApp() this also works
    // <App/>
    // reactElement
    <Test/>
)
