import {Link} from 'react-router-dom'
function Card(prop){
    return(
        <div>
<div id="featured " className="my-5 pb-5">
    
    <div className="row mx-auto container">
        <div className="product text-center col-lg-10 col-md-4 col-12">
            <img  src={prop.img} className="img-fluid bro mb-3"  alt="text"/>
           
        </div>
        
    </div>
</div>

        </div>
    )
}
export default Card;