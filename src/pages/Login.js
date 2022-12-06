import { useEffect , useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [db, setDb] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'http://localhost/react-app/db.php';
        axios.get(url).then((response) =>{
            setDb(response.data);
            db.map((val)=>{
                return(
                    console.log(val.username)
                )
            })
        })
    },[])
const submitBtn = function (e){
    e.preventDefault();
    console.log(document.getElementById("username").value);
    console.log(document.getElementById("password").value);

    let getData = new FormData();
    axios({
        method: 'POST', //get / post
        url:    'http://localhost/react-app/db.php', //db link
        data: getData,
        config: 'Content-Type="multipart/form-control"'  //data to be transferred
    }).then(function(){
        const url = 'http://localhost/react-app/db.php';
        axios.get(url).then((response) =>{
            setDb(response.data);
            db.map((val)=>{
                if ((val.username) == (document.getElementById('username').value) && (val.password)== (document.getElementById('password').value)) {
                    return(
                        alert ("Successfully Logged in"),
                        navigate('/home')
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
                <label for="email"  className="mb-6 text-dark">Email</label><br/>
                <input type="text" id="username" name="username" className="mb-3" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                <label for="password" className="mb-2 text-dark">Password</label><br/>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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