import React, { useState } from "react";

function Counter(props) {
    const [quantity, setQuantity] = useState(props.item && props.item.quantity ? props.item.quantity : 1);

    function handlePlus() {
        if (quantity === null || quantity === "") {
            props.updateQuantity(props.item, 1);
            setQuantity(1);
        } else {
            props.updateQuantity(props.item, quantity + 1);
            setQuantity(quantity + 1);
        }
    }

    function handleMinus() {
        if (quantity > 1) {
            props.updateQuantity(props.item, quantity - 1);
            setQuantity(quantity - 1);
        }
    }

    function handleChange(e) {
        e.preventDefault();
        if (e.target.value === "") {
            props.updateQuantity(props.item, 1);
            setQuantity(1);
        } else {
            const n = e.target.value;
            props.updateQuantity(props.item, n);
            setQuantity(n);
        }
    }

    return (
        <div className="counter">
            <button className="btn border" onClick={handleMinus}> - </button>
            <input
                type="number"
                min="1"
                max="8"
                value={quantity}
                disabled
                onChange={handleChange}
                className="px-2 bg-light"
            />
            <button className="btn border align-middle" onClick={handlePlus}>+</button>
        </div>
    )

};

export default Counter;