import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm";


const Login = () => {
    return ( 
        <div className="container">
            <div className="auth-page">
                <h3>Login</h3>
                <AuthForm>
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