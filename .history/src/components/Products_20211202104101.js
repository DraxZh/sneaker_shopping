import React from 'react';
import ToolBox from './ToolBox';
import Product from './Product';

class Products extends React.Component{
    product = {
        name: 'Air Jordan 4',
        tags: 'images/1.jpg',
        image: '45 Colors',
        price: 150,
        status: 'available'
    }

    render(){
        return(
            <div>
                <ToolBox/>
                <div className="products">
                    <div className="columns is-multiline is-dektop">
                        <div className="column is-3"><Product product={this.product}/></div>
                        <div className="column is-3"><Product /></div>
                        <div className="column is-3"><Product /></div>
                        <div className="column is-3"><Product /></div>
                        <div className="column is-3"><Product /></div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Products;