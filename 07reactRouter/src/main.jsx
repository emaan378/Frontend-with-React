import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import {createBrowserRouter} from 'react-router-dom'
import Layout from './componenets/Layout'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/about.jsx'  
const router =createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:"",
    element:<Home/>
  },{
    path:"About",
    element:<About/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
