import React  from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
