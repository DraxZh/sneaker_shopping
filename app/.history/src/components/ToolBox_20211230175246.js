import axios from 'commons/axios';
import React from 'react';

class ToolBox extends React.Component{

    state = {
        searchText:"",
        cartNum: 0
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

    updateCartNum = async() =>{
        const cartNum = await this.initCartNum();
        this.setState({
            cartNum: cartNum
        });
    }

    initCartNum = async() => {
        const res = await axios.get('/carts');
        const carts = res.data || [];
        const cartNum = carts.map(cart =>cart.mount).reduce((a,value) => a+value, 0);
        return cartNum;
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
                <div className="cart-box">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">({this.state.cartNum})</span>
                </div>
            </div>
        );
    }
}

export default ToolBox;