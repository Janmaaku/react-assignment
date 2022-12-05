function Login(){
    return(
        <div>
            <center>

            <div className="login-container text-white ">
            <h2>Hello, Tara Takbo</h2>
            <form className="form-container mb-4 mt-4" name="myForm">
                <label for="email"  className="mb-6 text-dark">Email</label><br/>
                <input type="text" id="email" name="email" className="mb-3"/><br/>
                <label for="password" className="mb-2 text-dark">Password</label><br/>
                <input type="password" id="password" name="password"/>
                <br/><br/>
                <input type="button" name="log" id="logButton" value="Login" onclick="Login_form();"/>
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