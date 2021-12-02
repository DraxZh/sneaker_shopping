/* eslint-disable no-restricted-globals */
import React from 'react';
import {formatPrice} from 'commons/FormatPrice';

class Product extends React.Component{
    
    render(){
        const {name, image, tags, price} = this.props.product;
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
        };
        
        return(
            <div className={_pClass.status}>
                <div className="p-content">
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
                    <button className="add-cart" disabled={_pClass[statusbar]==='unavailable'}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;