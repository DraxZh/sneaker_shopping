import React,{useState, useEffect} from 'react';
import ToolBox from '../components/ToolBox';
import Layout from 'Layout';
import CartItem from 'components/CartItem';
import axios from 'commons/axios';

const Cart =()=>{
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3003/carts').then(res=>setCarts(res.data))
    });

    const totalPrice = () =>{
        const totalPrice=carts.map(cart =>cart.mount*parseInt(cart.price)).reduce((a, value)=>a+value, 0);
        return totalPrice;
    }
    return(
        <Layout>
            <div className="cart-page">
                <span className="cart-title">Shoppping Cart</span>
                <div className="cart-list">
                    {
                        carts.map(cart=><CartItem key={cart.id} cart={cart}/>)
                    }
                </div>
           
                <div className="cart-total">
                    Total:
                    <span className="total-price">{totalPrice()}</span>
                </div>
            </div>
        </Layout>
    );
}

export default Cart;