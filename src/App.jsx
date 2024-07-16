import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import Preview from './Pages/Preview'
import Virtual from './Pages/Virtual'
import PrimaryOne from "./Pages/PrimaryOne"
import PrimaryTwo from './components/PrimaryTwo'
import PrimaryThree from './components/PrimaryThree'
import Footer from './Layout/Footer'
import { Toaster } from 'react-hot-toast'
import PrimaryFour from './components/PrimaryFour'
import PrimaryFive from './components/PrimaryFive'
import PrimarySix from './components/PrimarySix'

function App() {

  return (
    <>
     <BrowserRouter>    
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/PrimaryOne' element={<PrimaryOne/>}/>
      <Route path='/PrimaryTwo' element={<PrimaryTwo/>}/>
      <Route path='/PrimaryThree' element={<PrimaryThree/>}/>
      <Route path='/PrimaryFour' element={<PrimaryFour/>}/>
      <Route path='/PrimaryFive' element={<PrimaryFive/>}/>
      <Route path='/PrimarySix' element={<PrimarySix/>}/>
      <Route path='/Preview' element={<Preview/>}/>
      <Route path='/Virtual' element={<Virtual/>}/>
     </Routes>
     <Footer/>
     <Toaster/>
     </BrowserRouter>
    </>
  )
}

export default App
