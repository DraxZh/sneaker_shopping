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
        console.log(this.state);
        
        //this.props.history.push('/');
    };

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
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
                        <input className="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" name="password" value={this.state.email} onChange={this.handleChange}/>
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