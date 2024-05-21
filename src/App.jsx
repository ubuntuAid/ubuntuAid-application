import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import UbuntuAiders from './pages/UbuntuAiders';
import './App.css'
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Reviews from './pages/Reviews';

function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ubuntuaiders' element={<UbuntuAiders />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/review' element={<Reviews />} />
          
    </Routes>
    </>
  )
}

export default App
