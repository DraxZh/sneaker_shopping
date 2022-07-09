/* eslint-disable no-restricted-globals */
import React from 'react';
import Panel from 'components/Panel';
import {formatPrice} from 'commons/FormatPrice';
import EditInventory from './EditInventory';

class Product extends React.Component{
    toEdit = () =>{
        Panel.open({
            component: EditInventory,
            callback: data=>{
                console.log(data);
            }
        });
    };

    render(){
        const {name, image, tags, price,status} = this.props.product;
        return(
            <div className={status ==='available'?'product':'product out-stock'}>
                <div className="p-content">
                    <div className="p-head has-text-right">
                        <i className="fas fa-sliders-h" onClick={this.toEdit}></i>
                    </div>
                    <div className="img-wrapper">
                        <div className="out-stock-text">Out of Stock</div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name} />
                        </figure>
                    </div>
                    <p className="p-tags">{tags}</p>
                    <p className="p-name">{name}</p>
                    
                </div>
                <div className="p-footer">
                    <p className="price">
                        {formatPrice(price)}
                    </p>
                    <button className="add-cart" disabled={status==='unavailable'}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;