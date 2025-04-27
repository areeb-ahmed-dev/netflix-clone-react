import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TVShows from './Pages/TVShows'
import MyList from './Pages/MyList'
import MoviesDetails from './Pages/MoviesDetails' // Add this import
import Layout from './Components/Layout'
import SignIn from './Pages/Auth/SignIn'
import Login from './Pages/Auth/Login'
//import ErrorPage from './Pages/ErrorPage' // Create this component
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/browse',
    element: <Layout />,
    //errorElement: <ErrorPage />, // Add error handling
    children: [
      { index: true, element: <Home /> },
      { path: 'movies', element: <Movies /> },
      { path: 'tv-shows', element: <TVShows /> },
      { path: 'my-list', element: <MyList /> },
      { path: 'movie/:id', element: <MoviesDetails /> }, // Add this route
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)