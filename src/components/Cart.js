import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import CartItemList from './CartItemList';

function Cart() {
    const { data, setData } = useContext(CartContext);

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="addcartOffcanvas">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart</h5>
                <button className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <CartItemList data={data} setData={setData} />
                <div className="offcanvas-action-link">
                    <Link to={data.cartItems.length ? "/checkout" : "#"}>
                        <button className="w-100 btn" disabled={data.cartItems.length === 0}>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;