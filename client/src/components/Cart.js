import React, {useRef} from "react"

export default function Cart(){
    const ref = useRef(null)

    function checkout(){
        window.location = `${window.location.origin}/checkout`
    }

    function openCart(){
        if (ref.current){ref.current.style.right === '15.3rem' ? ref.current.style.right = '0rem' : ref.current.style.right = '15.3rem'}
    }
    return (
        <div className="sticky-container">
            <aside>
                <div className="cart" ref={ref}>
                    <div className="cart-items">
                        <p>Your Items:</p>
                        <div className="items"></div>
                        <hr/>
                        <p id="total">Total: $0.00</p>
                        <button id="check-out" onClick={checkout}>Check Out</button>
                    </div>
                    <button onClick={openCart}>Cart</button>
                </div>
            </aside>
        </div>
    )
}