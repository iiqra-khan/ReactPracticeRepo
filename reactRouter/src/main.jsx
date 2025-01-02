import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github ,{githubInfoLoader} from './components/Github/github.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path: '',
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path = '' element={<Home/>} />
      <Route path = 'about' element={<About/>} />
      <Route path = 'contact' element={<Contact/>} />
      <Route path = 'user/:userid' element={<User/>} />
      <Route 
      // loader={()=>{}} //we can do api call here as soon as the cursor points to the desired link the call is fired and the data is fetched and kept in the cached memory
      loader={githubInfoLoader}
      path = 'github' 
      element={<Github/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)