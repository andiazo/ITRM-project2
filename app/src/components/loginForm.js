import React from 'react';
import './loginForm.css';


class LoginForm extends React.Component {
    render() {
       return(
        <div className='container card login-container'>
            <h1>Login</h1>
            <form> 
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

            </form>
        </div>  
       )
    }
}

export default LoginForm;
