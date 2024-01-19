import React, {useState, useRef, useEffect} from 'react'
import './css/App.css';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div>
        <main>
            <article>
                <h1>Embrace the Heart of the Sea</h1>
                <h2>Find your shoal</h2>
                <div>
                    <button><a href='/products'>Shop Now</a></button>
                </div>
            </article>
            <Carousel/>
        </main>
    </div>
  )
}
