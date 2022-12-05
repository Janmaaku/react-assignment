import Card from './Card'
import two from '../Assets/img/vans11.jpg'
import three from '../Assets/img/vans12.jpg'
import four from '../Assets/img/vans13.jpg'
import five from '../Assets/img/vans14.jpg'
import six from '../Assets/img/vans15.jpg'

function Allcard(){
    return(
<div className="text-align-center" style={{display: "inline-flex"}}>
    <Card img={two}/>
    <Card img={three}/>   
    <Card img={four}/>   
    <Card img={five}/>       
    <Card img={six}/>   
    
</div>
    )
}

export default Allcard;