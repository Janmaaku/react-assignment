import {Link} from 'react-router-dom';

import one from '../src/Assets/img/tara.png'


function Navbar(){
    return(
        <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 d-flex mb-3">
        <div className="container-fluid">
            <Link to="/"><img src={one} alt="" className="rounded rounded-circle" style={{height: "6rem"}}/></Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3 py-2" id="ul">
            <li className="nav-item">
                <Link className="nav-link py-3 justify-context-end" to="/home">Home</Link>
              </li>
              <li>
                <Link to="/reg" className="btn  " id="reg">Register</Link>
                <Link to="/log" className="btn p-12" style={{height: "50px"}} id="log">Log In</Link>   
                </li>
              <li>
                  
                </li>
             
            </ul>
          </div>
        </div>
      </nav>

     

        </div>
    )
}
export default Navbar;