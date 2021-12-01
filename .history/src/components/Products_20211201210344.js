import React from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';

class Products extends React.Component{
    render(){
        return(
            <div>
                <ToolBox/>
                <div className="products">
                    <Product/>
                    <Product/>
                </div>
            </div>
        )
    }
}

export default Products;