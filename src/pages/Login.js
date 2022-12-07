import { useEffect , useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

function Login(){
    const [email, setUsername] = useState();
    const [pass, setPassword] = useState();
    const [db, setDb] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'http://localhost/react-app/db.php'
        axios.get(url).then((response) =>{
            setDb(response.data);
            db.map((val)=>{
                return(
                    console.log(val.email)
                )
            })
        })
    },[])
const submitBtn = function (e){
    e.preventDefault();
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("pass").value);

    let getData = new FormData();
    axios({
        method: 'POST', //get / post
        url:    'http://localhost/react-app/db.php', //db link
        data: getData,
        config: 'Content-Type="multipart/form-control"'  //data to be transferred
    })
    .then(function(){
        const url = 'http://localhost/react-app/db.php'
        axios.get(url).then((response) =>{
            setDb(response.data);
            db.map((val)=>{
                if ((val.email_add) == (document.getElementById('email').value) && (val.pass)== (document.getElementById('pass').value)) {
                    return(
                        alert ("Successfully Logged in"),
                        navigate('/userlogin')
                    )
                }
                
            })
        }) 
    })
}

    return(
        <div>
            <center>

            <div className="login-container text-white ">
            <h2>Hello, Tara Takbo</h2>
            <form className="form-container mb-4 mt-4">
                <label htmlFor="email"  className="mb-6 text-dark">Email</label><br/>
                <input type="text" id="email" name="email" className="mb-3" value={email} onChange={(e) => setUsername(e.target.value)}/><br/>
                <label htmlFor="password" className="mb-2 text-dark">Password</label><br/>
                <input type="password" id="pass" name="pass" value={pass} onChange={(e) => setPassword(e.target.value)}/>
                <br/><br/>
                <input type="submit" name="log" id="logButton" value="Login" onClick={submitBtn}/>
            </form>

            <button className="btn btn-light bg-warning text-dark "  type="button" data-bs-dismiss="modal" data-bs-target="#modal1" data-bs-toggle="modal">
              Forgot Password
       </button>
        </div>
        </center>
        </div>
    )
}
export default Login;