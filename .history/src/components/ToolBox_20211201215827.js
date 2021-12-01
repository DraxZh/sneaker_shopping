import React from 'react';

class ToolBox extends React.Component{
    render(){
        return (
            <div className="tool-box">
                <div className="logo-text">Hype Store</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input type="text" className="input" placeholder="Search Product"/>
                        </div>
                        <div className="control">
                            <button className="button">X</button>
                        </div>
                    </div>
                </div>
                <div className="cart-box"></div>
            </div>
        );
    }
}

export default ToolBox;