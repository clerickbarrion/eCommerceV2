import React, { useEffect, useState, useRef } from 'react'
import './css/Products.scss'
import Cart from './components/Cart'

function Fish(props){
    function addFish(){
        const items = document.querySelector('.items')
        const total = document.getElementById('total')
        const totalNum = Number(total.textContent.replace('Total: $','')) + Number(props.price)
        const p = document.createElement('p')

        const cart = JSON.parse(localStorage.getItem('cart')) || []

        p.innerHTML = `${props.name}: $${props.price}`
        total.textContent= `Total: $${totalNum.toFixed(2)}`

        p.addEventListener('click',()=>{
            p.remove()
            total.textContent = `Total: $${(Number(document.getElementById('total').textContent.replace('Total: $','')) - props.price).toFixed(2)}`
            let cart = JSON.parse(localStorage.getItem('cart')) || []
            for (let i = 0; i<cart.length; i++) {
                if (cart[i].name === props.name) {cart.splice(i,1); break;}
            }
            localStorage.setItem('cart', JSON.stringify(cart))
            const data = {
                username: localStorage.getItem('username'),
                cart: localStorage.getItem('cart')
            }
    
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
            fetch('http://localhost:4000/api/updateCart', options)

        })
        items.appendChild(p)

        const item = {
            name: props.name,
            price: props.price,
            image: props.image
        }

        cart.push(item)

        localStorage.setItem('cart', JSON.stringify(cart))

        const data = {
            username: localStorage.getItem('username'),
            cart: localStorage.getItem('cart')
        }

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
        fetch('http://localhost:4000/api/updateCart', options)

    }
    return(
        <div className="product" data-name={props.name} data-price={props.price} onClick={addFish}>
            <figure>
                <img src={require(`${props.image}`)} alt={props.name}/>
                <figcaption>{props.name}</figcaption>
            </figure>
            <p>${props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

function Article(props){

    const [data,setData] = useState([{}])

    useEffect(()=>{
        fetch(`/api/getFish?type=${props.type}&lowest=${props.lowest}&highest=${props.highest}`)
        .then(res=>res.json()).then(fish=>{setData(fish)})
    },[])

    return(
    <>
    <article>
        <h1>{props.type} Fish</h1>
        <section>
            {(!data.fish ? <p>Loading</p> : data.fish.map((fish,i)=><Fish key={i}name={fish.name} description={fish.description} price={fish.price} image={fish.image}/>))}
        </section>
    </article>
    </>
    )
}

export default function Products() {

    const [type, setType] = useState("All")
    const [lowest, setLowest] = useState(0)
    const [highest, setHighest] = useState(100)

    function changeType(e){setType(e.target.value)}
    function changeLowest(e){setLowest(e.target.value)}
    function changeHighest(e){setHighest(e.target.value)}

    function RenderFilter(){
        switch (type){
            case "All":
                return <><Article type="Freshwater" lowest={lowest} highest={highest}/><Article type="Saltwater" lowest={lowest} highest={highest}/><Article type="Exotic" lowest={lowest} highest={highest}/></>
            case "Freshwater":
                return <Article type="Freshwater" lowest={lowest} highest={highest}/>
            case "Saltwater":
                return <Article type="Saltwater" lowest={lowest} highest={highest}/>
            case "Exotic":
                return <Article type="Exotic" lowest={lowest} highest={highest}/>
        }
    }

    return (
        <div className='products'>
        <main>
            <Cart/>
            <h1 id="title">Find Your New Friend</h1>
            <div id="filter-container">
                <div>
                    <label htmlFor="type-filter">Filter by type:</label>
                    <select id="type-filter" onChange={changeType}>
                        <option value="All">All</option>
                        <option value="Freshwater">Freshwater</option>
                        <option value="Saltwater">Saltwater</option>
                        <option value="Exotic">Exotic</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='lowest-price'>Lowest Price:</label>
                    <input id='lowest-price'type='number' value={lowest} onChangeCapture={changeLowest}/>
                </div>
                <div>
                    <label htmlFor='highest-price'>Highest Price:</label>
                    <input id='highest-price'type='number' value={highest} onChangeCapture={changeHighest}/>
                </div>
                
            </div>
            <RenderFilter/>
        </main>
        </div>
    )
}
