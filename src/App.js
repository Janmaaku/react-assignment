import './App.css';
import Navbar from './Navbar'
import {Routes, Route}  from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Footer from './Components/Footer'

function App() {
  console.log(window.location.pathname)
  return (
    <div>
        <Navbar/>
        <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/log" element={<Login/>}/>
              <Route path="/reg" element={<Registration/>}/>
          </Routes>
        </div>
        <div className="text-align-center" style={{display: "inline-flex"}}>
        <Footer />
        </div>
    </div>
  );
}

export default App;
