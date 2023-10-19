import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './Router/Roots.jsx'
import LoginContext from './Firebase/LoginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContext>
      <RouterProvider router={router} />
    </LoginContext>
  </React.StrictMode>,
)
