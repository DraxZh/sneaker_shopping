import axios from 'commons/axios';
import {Link} from 'react-router-dom';
import React from 'react';

class ToolBox extends React.Component{

    state = {
        searchText:"",
    }
    //change the search bar into inputed value
    handleChange = event =>{
        const value = event.target.value;
        this.setState({
            searchText: value
        })
        this.props.search(value);
    };

    //clear search
    clearSearch = () =>{
        this.setState({
            searchText:''
        });
        this.props.search('')
    }; 

    
    render(){
        return (
            <div className="tool-box">
                <div className="logo-text">Hype Store</div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                            type="text" 
                            className="input search-input" 
                            placeholder="Search Product"
                            value = {this.state.searchText}
                            onChange={this.handleChange}/>
                        </div>
                        <div className="control">
                            <button className="button" onClick ={this.clearSearch}>X</button>
                        </div>
                    </div>
                </div>
                <div to="/cart" className="cart-box" onClick= {this.goCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">({this.props.cartNum})</span>
                </div>
            </div>
        );
    }
}

export default ToolBox;