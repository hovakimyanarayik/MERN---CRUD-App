import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import {AuthContext} from "../../context/AuthContext";



const Login = () => {
    const {login} = useContext(AuthContext)
    const loginHandler = async (values) => {
        try {
            const response = await axios.post("/api/auth/login", values, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            login(response.data.token, response.data.userId);
        } catch (e) {
            console.log(e);
        }
    }

    return ( 
        <div className="container">
            <div className="auth-page">
                <h3>Login</h3>
                <AuthForm onSubmit={loginHandler}>
                    <button
                        className="wawes-effect wawes-light btn blue"
                        type='submit'
                    >
                        Sign In
                    </button>
                    <Link 
                        to="/registration" 
                        className="btn-outline btn-reg"
                    >
                        Dont have an account yet?
                    </Link>
                </AuthForm>
            </div>
        </div>
     );
}
 
export default Login;