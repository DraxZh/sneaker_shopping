import React from 'react';
import ToolBox from './ToolBox';
import Product from './Product';

class Products extends React.Component{
    products = [
        {
            id:1,
            name: 'Air Jordan 4',
            image: 'images/1.jpg',
            tags: '45 Colors',
            price: 15000,
            status: 'available'
        },
        {
            id:2,
            name: 'Nike Paul George PG 3',
            image: 'images/2.jpg',
            tags: '25 Colors',
            price: 18000,
            status: 'available'
        },
        {
            id: 3,
            name: "Jordan Why Not Zero 2.0",
            image: "/images/3.jpg",
            tags: '16 Color, y',
            price: 13500,
            status: 'available'
        },
        {
            id: 4,
            name: "Nike Air Foamposite",
            image: "/images/4.jpg",
            tags: '16 Color, y',
            price: 14000,
            status: 'available'
        },

    ]
    render(){
        return(
            <div>
                <ToolBox/>
                <div className="products">
                    <div className="columns is-multiline is-dektop">
                        {
                            this.products.map(p=>{
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