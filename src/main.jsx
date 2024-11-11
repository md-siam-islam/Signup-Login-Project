import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Home2 from './Components/Home/Home2.jsx';
import Authcontext from './Authcontext/Authcontext.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Home2></Home2>
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Authcontext>
  <RouterProvider router={router} />
  </Authcontext>
  
  </StrictMode>,
)
