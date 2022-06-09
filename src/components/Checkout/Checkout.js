import React from 'react'
import { useStateValue } from '../../StateProvider';
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    const [state, dispatch] = useStateValue();
    if(state){
        console.log(state.basket, "basket");
    }
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon ad" />
                <div className="checkout__title">
                    <h1> your shopping basket</h1>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
