import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './componenets/Layout'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/about.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import Header from './componenets/Header/header.jsx'
import User from './componenets/User/user.jsx'
import Github from './componenets/GitHub/Github.jsx'
import { githubInfoLoader } from './componenets/GitHub/Github.jsx'

// const router = createBrowserRouter([{
//   path: '/',
//   element: <Layout />,
//   children: [{
//     path: "",
//     element: <Home />
//   }, {
//     path: "about",
//     element: <About />
//   }, {
//     path: "contact",
//     element: <Contact />
//   }]

// }])
const router = createBrowserRouter(
  createRoutesFromElements(
    // Creates the entire routing config for your app using JSX-style routes.
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
        <Route   
        loader={(githubInfoLoader)} 
        path="github" 
        element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
// `loader` is a React Router feature that **pre-fetches data before the page loads**. It allows you to fetch data on the server side and pass it to your components as props, ensuring that the data is available when the component renders. This can improve performance and provide a better user experience by reducing loading times and avoiding unnecessary client-side data fetching.
