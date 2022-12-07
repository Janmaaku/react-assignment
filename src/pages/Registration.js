import {Link} from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';
function Registration(){

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [cpnum, setCnumber] = useState();
  const [gender, setGender] = useState();
  const [pic, setPic] = useState();
  const [pass, setPass] = useState();
  const [registration, setRegistration] = useState([]);
  useEffect(()=> {
    const url = 'http://localhost/react-app/db.php'; //link to db
         axios.get(url).then((response)=>{
         setRegistration(response.data);
         console.log(registration);
     })
},[]) //this
const submitBtn = function(e){
  e.preventDefault();
  let getData = new FormData();
  getData.append('fname', fname);    //key-value pairs 
  getData.append('lname', lname);    //key-value pairs
  getData.append('dob', dob);
  getData.append('email', email);     
  getData.append('cpnum', cpnum);     
  getData.append('gender', gender);   
  getData.append('pic', pic);     
  getData.append('pass', pass);               //key-value pairs
  getData.append('function', 'insert');
  
  axios({
      method: 'POST', //get / post
      url:    'http://localhost/react-app/db.php', //db link
      data: getData,
      config: 'Content-Type="multipart/form-control"'  //data to be transferred
  }).then(function (response){
      alert("Successfully Registered!");
      const url = 'http://localhost/react-app/db.php'; //link to db
           axios.get(url).then((response)=>{
           setRegistration(response.data);
           console.log(registration);
       })
      });
     
  
}

  
    return(
        <div>
              <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" enctype="multipart/form-data" >

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example1c">Last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="date" id="form3Example3c" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example3c">Date of Birth</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="form3Example3c">Gender</label>
                    <select name="gender" className="m-3" id="male" >
                    <option name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>Male</option>
                    <option name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>Female</option>
                  </select>
                    </div>
                  </div>



                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example4c" name="cpnum" value={cpnum} onChange={(e) => setCnumber(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example4c">Contact Number</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="file" id="form3Example4c" name="pic"  accept=" .jpg, .jpeg, .png" value={pic} onChange={(e) => setPic(e.target.value)} className="form-control" />
                      <label className="form-label" for="form3Example4c">Picure</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <Link to="/"> <input type="password" id="form3Example4c" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" /> </Link>
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>
                  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <Link to="">Terms of service</Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" className="btn btn-primary btn-lg" name="submit" onClick={submitBtn}/>Register
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
         
        </div>

    )
    // function saveImage(){
    //     let reader = new FileReader();
    //     reader.addEventListener("load", function(){
    //         sessionStorage.setItem("img", reader.result);
    //             showImage();
    //             })
               
    //         }
    
    // function showImage(){
    //     let showImage = document.getElementById("showImage");
    //     let imageURL = sessionStorage.getItem("img");
    //     showImage.innerHTML = "<img src= '" + imageURL + " 'style='width: 100px'>";
    // }
    
    // function showText{
    //   let name = document.getElementById("showText");
    
    //   if(name == ""){
    //     document.getElementById("error").innerHTML = "* Name is required";
    //   }
    // }
    
}
export default Registration;