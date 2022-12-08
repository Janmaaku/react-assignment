import seven from '../Assets/img/vans1.jpg'
import eight from '../Assets/img/vans2.jpg'
import nine from '../Assets/img/vans3.jpg'
import ten from '../Assets/img/vans4.jpg'
import eleven from '../Assets/img/vans5.jpg'


function Home(){
    return(
        <div>

        <section id="home">
            <div className="container">
    
            </div>
        </section>
        <div id="brand" className="container mt-3">
    <div className="row justify-content-center">
        <img className="img-fluid col-lg-2 col-md-4 col-6" src={seven} alt="text"/>
        <img className="img-fluid col-lg-2 col-md-4 col-6" src={eight} alt="text"/>
        <img className="img-fluid col-lg-2 col-md-4 col-6" src={nine} alt="text"/>
        <img className="img-fluid col-lg-2 col-md-4 col-6" src={ten} alt="text"/>
        <img className="img-fluid col-lg-2 col-md-4 col-6" src={eleven} alt="text"/>
        
    </div>
</div>
<br/><br/>
      
        </div>
    )
}
export default Home;