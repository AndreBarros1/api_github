import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Issue from './pages/Issue/Issue.jsx'


const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/issue/:id",
        element:<Issue/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
