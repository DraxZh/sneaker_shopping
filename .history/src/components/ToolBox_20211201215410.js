import React from 'react';

class ToolBox extends React.Component{
    render(){
        return (
            <div className="tool-box">
                <div className="logo-text">Hype Store</div>
                <div className="search-box"></div>
                <div className="cart-box"></div>
            </div>
        );
    }
}

export default ToolBox;