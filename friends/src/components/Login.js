import React from "react";


const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    
return(
    <div>
        <form>
            <input  type="text" name="username" placeholder="Enter username"/>
            <input type="password" name="password" placeholder="Enter Password" />
            <button>Submit</button>
        </form>

    </div>
)
}

export default Login;