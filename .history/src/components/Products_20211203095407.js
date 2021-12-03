import React from 'react';
import axios from 'axios';
import ToolBox from './ToolBox';
import Product from './Product';

class Products extends React.Component{
    state = {
        products:[]
    };
    componentDidMount(){
        axios.get('http://localhost:3003/products').then(response=>{
            this.setState({
                products:response.data
            });
        });
    }
    render(){
        return(
            <div>
                <ToolBox/>
                <div className="products">
                    <div className="columns is-multiline is-dektop">
                        {
                            this.state.products.map(p=>{
                                return(
                                    <div className="column is-3" key={p.id}>
                                        <Product product={p}/>
                                    </div>
                                );
                            }) 
                        }
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Products;