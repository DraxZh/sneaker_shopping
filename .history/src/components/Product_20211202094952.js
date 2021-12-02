import React from 'react';


class Product extends React.Component{
    render(){
        return(
            <div className="product">
                <div className="p-content">
                    <div className="img-wrapper">
                        <figure className="image is-4by3">
                            <img src="images/2.jpg" alt="PG4.0" />
                        </figure>
                        <p className="p-tags">25 Colors</p>
                        <p className="p-name">Nike Paul George PG 3</p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Product;