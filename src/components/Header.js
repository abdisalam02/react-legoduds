import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
export default function Header(){
    const [active, setActive] = useState(false)

    const cartHandler = () =>{
        setActive(!active)
        console.log(active)
    }
    return (
        <header>
        <a href="index.html">
            <img src="images/LD_logo.svg" alt="LEGO-DUDES" />
        </a>
        <figure id="cart" role="button" onClick={cartHandler}>
            <span className="label">0</span>
            <img src="images/legocart.svg" alt="Handlekurv" />
        </figure>
        <ShoppingCart active={active}/>
    </header>
    )
}