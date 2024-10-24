import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import './index.css'

import { LandingPage, CoursesPage, EssaysPage, WhoAmIPage, ErrorPage, LoginPage, SignupPage } from './routes'
import { loginAction } from './routes/LoginPage'
import { action as signupAction } from './routes/SignupPage'

const router = createBrowserRouter([
  {
    // TODO errorElement: <ErrorPage />
    path: '/', element: <RootLayout />, children: [
      { path: '', element: <LandingPage /> },
      { path: 'login', element: <LoginPage />, action: loginAction },
      { path: 'signup', element: <SignupPage />, action: signupAction },
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