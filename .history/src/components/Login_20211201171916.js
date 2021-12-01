import React from 'react';


class Login extends React.Component {
    state = {
        email:'',
        password:''
    };
    emailRef = React.createRef();
    passwordRef = React.createRef();
    handleSubmit = event =>{
        event.preventDefault();

        //获取表单数据
        const formData = {
            email: this.emailRef.current.value,
            password: this.password.current.value
        };
        
        //this.props.history.push('/');
    };

    handleChange = e => {
        this.setState({
            email: e.target.value.toUpperCase()
        });
    };

    render() {  
        return(
            <div className="login-wrapper">
                <form className="box login-box" onSubmit={this.handleSubmit}>
                {/* Inpuut Email section */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} ref={this.emailRef}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="password" type="text" placeholder="Password" name="password" ref={this.passwordRef}/>
                    </div>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
                </form>
            </div> 
            
        );
    }
}
export default Login;