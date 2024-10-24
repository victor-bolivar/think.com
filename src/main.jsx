import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import './index.css'
import LandingPage from './routes/LandingPage'
import CoursesPage from './routes/CoursesPage'
import EssaysPage from './routes/EssaysPage'
import WhoAmIPage from './routes/WhoAmIPage'
import ErrorPage from './routes/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
      { path: '', element: <LandingPage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'essays', element: <EssaysPage /> },
      { path: 'whoami', element: <WhoAmIPage /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)