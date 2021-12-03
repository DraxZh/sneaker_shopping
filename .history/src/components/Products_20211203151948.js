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
    //search the products
    search = text =>{
        console.log(text)
        let _products = [...this.state.products]
        //Filter New Array
        _products = _products.filter(p=>{
            //拿到name调用match方法
            const macthArray =  p.name.match(new RegExp(text, 'gi'))
        })
        //set state
    }
    
    render(){
        return(
            <div>
                <ToolBox search={this.search}/>
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