import React from 'react';

class Header extends React.Component{

    renderLink(){
        const nickname = this.props.nickname;
        if(nickname){
            return(
                <span className="nickname">
                    {this.props.nickname}
                </span>
            )
        }else{
            return{
                <a href="/">Login</a>
                <a href="/">Register</a>
            }
        }
    }
    render(){
        return(
            <div className="header">
                <div className="grid">
                    <div className="start">
                        <a href="/">Home</a>
                    </div>
                    <div className="end">
                        <a href="/">Login</a>
                        <a href="/">Register</a>
                        <span className="nickname">
                            {this.props.nickname}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;