import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
  )
}

export default App