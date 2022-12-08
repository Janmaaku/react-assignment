import './App.css';
import Navbar from './Navbar'
import {Routes, Route}  from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Footer from './Components/Footer'
import User from './pages/Userlogin';


function App() {
  console.log(window.location.pathname)
  return (
    <div>
        <Navbar/>
        <div>
          <Routes>
              <Route path="/react-assignment/" element={<Home />}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/" element={<Registration/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/log" element={<Login/>}/>
              <Route path="/reg" element={<Registration/>}/>
              <Route path="/userlogin" element={<User/>}/>
             

          </Routes>
        </div>
        
        <Footer />
       
    </div>
    

    
  );
}

export default App;
