import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import UbuntuAiders from './pages/UbuntuAiders';
import './App.css'

function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ubuntuaiders' element={<UbuntuAiders />} />
    </Routes>
    </>
  )
}

export default App
