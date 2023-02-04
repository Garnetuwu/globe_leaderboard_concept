import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom'
import BoardContent from './components/Leaderboard/BoardContentCard/BoardContent/BoardContent'
import './index.css'

import Leaderboard from './pages/Leaderboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/leaderboard' />
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
    children: [
      { path: 'all-time', element: <BoardContent /> },
      { path: 'current-season', element: <BoardContent /> },
      { path: 'followed-traders', element: <BoardContent /> },
      { path: 'my-ranking', element: <BoardContent /> },
      { path: '', element: <Navigate to='current-season' /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
