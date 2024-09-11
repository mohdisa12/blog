import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Register from './components/Register';
import Add from './components/Add';
import Layout from './Layout.jsx';
import Single from './components/Single.jsx';


function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/post/:id' element={<Single />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </>
  
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
