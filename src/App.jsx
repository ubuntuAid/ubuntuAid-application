import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import UbuntuAiders from './pages/UbuntuAiders';
import './App.css'
import About from './pages/About';

function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ubuntuaiders' element={<UbuntuAiders />} />
          <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
