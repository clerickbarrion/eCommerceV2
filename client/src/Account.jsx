import React, {useEffect, useState} from 'react'
import './css/Account.scss'


function PurchaseHistory(){
  const [history,setHistory] = useState(0)

  useEffect(()=>{
    fetch(`http://localhost:4000/api/retrieveHistory?username=${localStorage.getItem('username')}`)
    .then(res=>res.json()).then(history=>setHistory(history))
  },[])

  return (
    <>
    <h2>Purchase History</h2>
    <div id='order-items'>{history ? history.map(i=><HistoryItem id={i.id} total={i.total} purchase_date={i.purchase_date} address={i.address} deliver_date={i.deliver_date} items={i.items}/>) : <p>Loading History....</p>}</div>
    </>
  )
}

function HistoryItem(props){
  return (
    <>
    <details>
      <summary>Order ID: {props.id}</summary>
      <div>
        <p>{props.total}</p>
        <p>Purchased on {props.purchase_date.substring(0,10)}</p>
        <p>Will be delivered to {props.address} on {props.deliver_date.substring(0,10)}</p>
        <div>
          <p>Items:</p>
          <div className='figure-container'>
            {JSON.parse(props.items).map(i=><Fish image={i.image} name={i.name} price={i.price}/>)}
          </div>
        </div>
      </div>
    </details>
    </>
  )
}

function Fish(props){
  return (
    <>
      <figure>
          <img src={require(`${props.image}`)} alt={props.name}/>
          <figcaption>
            <p>{props.name}</p>
            <p>${props.price}</p>
          </figcaption>
      </figure>
    </>
  )
}

export default function Account() {
    function logout(){
        localStorage.setItem('username', '')
        localStorage.setItem('cart', "[]")
        window.location = window.location.origin
    }
  return (
    <div className='account'>
      <main>
      <button id="logout" onClick={logout}>Log out</button>
        <h1>Welcome to your account, {localStorage.getItem('username')}</h1>
        <PurchaseHistory/>
      </main>
    </div>
  )
}
