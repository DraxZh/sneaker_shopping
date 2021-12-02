import React from 'react';


class Product extends React.Component{

    render(){
        return(
            <div className="product">
                <div className="p-content">
                    <div className="img-wrapper">
                        <figure className="image is-4by3">
                            <img src={this.props.product.image} alt={this.props.product.name} />
                        </figure>
                        <p className="p-tags">25 Colors</p>
                        <p className="p-name">Nike Paul George PG 3</p>
                    </div>
                </div>
                <div className="p-footer">
                    <p className="price">$120</p>
                    <button className="add-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                    
                </div>
            </div>
        )
    };
}

export default Product;