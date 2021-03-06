import React from 'react';
import axios from 'axios';
import ToolBox from './ToolBox';
import Product from './Product';

class Products extends React.Component{
    state = {
        products:[],
        //搜素后products的值会被更改
        sourceProducts:[]
    };
    componentDidMount(){
        axios.get('http://localhost:3003/products').then(response=>{
            this.setState({
                products:response.data,
                sourceProducts: response.data
            });
        });
    }
    //search the products
    search = text =>{
        console.log(text)
        let _products = [...this.state.sourceProducts]
        //Filter New Array
        _products = _products.filter(p=>{
            //拿到name调用match方法
            const matchArray =  p.name.match(new RegExp(text, 'gi'));
            return !!matchArray;
        })
        //set state
        this.setState({
            products: _products
        })
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