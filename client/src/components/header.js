import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home'
import Products from '../Products'
import Contact from '../Contact'
import Review from '../Review';
import Checkout from '../Checkout';
import Login from '../Login';
import Account from '../Account';

export default function header() {
  return (
    <div>
        <Router>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <figure className="logo"><img src={require("../images/riptide.png")} alt="riptide"/></figure>
                <nav>
                    <ul>
                        <li><Link to='/review'>Review</Link></li>
                        <li><Link to='/checkout'>Check-out</Link></li>
                        {!localStorage.getItem('username') ? <li><Link to='/login'>Log in</Link></li> : <li><Link to='/account'>{localStorage.getItem('username')}</Link></li>}
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/review' element={<Review/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/account' element={<Account/>}/>
            </Routes>
        </Router>
    </div>
  )
}
