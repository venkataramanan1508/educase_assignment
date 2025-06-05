import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { CreateAccount } from './components/CreateAccount'
// import SignIn from './components/Login'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
   <Route path='/createaccount' element={<CreateAccount/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/profile' element={<Profile/>}/>
 </Routes>
 </BrowserRouter>

    </>
  )
}

export default App
