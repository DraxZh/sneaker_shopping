import React from 'react';
import '../css/app.scss';
class Login extends React.Component {
    render() {
        return( 
            <form className="login-wrapper">
                {/* Inpuut Email section */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Email"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Password" />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
            </form>
        );
    }
}
export default Login;