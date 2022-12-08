

import two from '../Assets/img/vans11.jpg'
import three from '../Assets/img/vans12.jpg'
import four from '../Assets/img/vans13.jpg'
import Allcards from '../Components/Allcards2';

import {Link, useNavigate} from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';

function Userlogin(){
    
    return(
<div>
    <Link to="/userlogin">
       
    <div id="carouselExampleDark" className="container carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="container carousel-inner" >
    <div className="carousel-item active" data-bs-interval="10000">
      <img className="w-100 p-3" src={two} style={{height: "700px"}} alt="Max-width 100%"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img className="w-100 p-3" src={three} style={{height: "700px"}} alt="Max-width 100%"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img className="w-100 p-3" src={four}  style={{height: "700px"}} alt="Max-width 100%"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div>
        <Allcards/>
      </div>
<div>
  <p className="text-center bg-warning">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
</div>
<div>
        <Allcards/>
      </div>
</Link>

</div>
    )
}
export default Userlogin;