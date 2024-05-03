import { useState } from "react";
import { getBasketByUsername } from "./api";

const Basket = ({username}) => {
    const [userBasket, setUserBasket] = useState();
    getBasketByUsername(username)
    .then(({data}) => {
        console.log(data.items)

    })
    return (
        <div className="basket-container">
            <img src="true" />
            <p>Name:</p>
            <p>Price:</p>
            <button>Delete Item</button>            
        </div>
    )
}

export default Basket;