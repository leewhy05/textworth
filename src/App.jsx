import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import Lists from './Pages/Lists'
import Preview from './Pages/Preview'
import Virtual from './Pages/Virtual'
import PrimaryTwo from './Pages/PrimaryTwo'
import PrimaryThree from './Pages/PrimaryThree'
import Footer from './Layout/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Lists' element={<Lists/>}/>
      <Route path='/PrimaryTwo' element={<PrimaryTwo/>}/>
      <Route path='/PrimaryThree' element={<PrimaryThree/>}/>
      <Route path='/Preview' element={<Preview/>}/>
      <Route path='/Virtual' element={<Virtual/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
