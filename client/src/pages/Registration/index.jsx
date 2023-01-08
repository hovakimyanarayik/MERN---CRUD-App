import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import axios from "axios";


const Registration = () => {
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        try {
            await axios.post("/api/auth/registration", values, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate('/login');
        } catch (e) {
            console.log(e);
        }
    }


    return ( 
        <div className="container">
            <div className="auth-page">
                <h3>Registration</h3>
                <AuthForm onSubmit={registerHandler}>
                    <button
                        className="wawes-effect wawes-light btn blue"
                        type='submit'
                    >
                        Sign Up
                    </button>
                    <Link 
                        to="/login" 
                        className="btn-outline btn-reg"
                    >
                        Already have an account?
                    </Link>
                </AuthForm>
            </div>
        </div>
     );
}
 
export default Registration;