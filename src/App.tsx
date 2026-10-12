// import React from 'react'
import Navbar from './composant/Navbar'
// import Routage from './composant/Routage'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Accueil from './composant/Accueil'
import Projet from './composant/Projet'
import Competences from './composant/Competences'
import Propos from './composant/Propos'
import Contact from './composant/Contact'
import PageErreur from './composant/PageErreur'
import { Toaster } from 'sonner'
// import Footer from './composant/Footer'

const Router = createBrowserRouter([{
    path:"/",
    element: <Navbar/>,
    children: [
        {path: "/", element: <Accueil/>},
        {path: "/propos", element: <Propos/>},
        {path: "/projet", element: <Projet/>},
        {path: "/competences", element: <Competences/>},
        {path: "/contact", element: <Contact/>},
        {path: "*", element: <PageErreur/>}
    ]
}]) 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 ">
      <Toaster position="top-right" richColors />
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
