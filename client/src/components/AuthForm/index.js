import { useState } from "react";


const AuthForm = ({ onSubmit, children }) => {
    const [values, setValues] = useState({email: '', password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(values);
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return ( 
        <form className="form form-login" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        type="text" 
                        name="email"
                        id="email" 
                        className="validate"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s12">
                    <input 
                        type="password" 
                        name="password"
                        id="password" 
                        className="validate"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                {children}
            </div>
        </form>
     );
}
 
export default AuthForm;