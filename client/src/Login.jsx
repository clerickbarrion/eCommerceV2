import React from 'react'
import './css/Login.css'

export default function Login() {

    async function createAccount(){

        const username = document.getElementById('signup-username').value
        const password = document.getElementById('signup-password').value
        const confirmPassword = document.getElementById('confirm-password').value
        const number = document.getElementById('number').value
        const error = document.getElementById('error-message')

        if (!username && !password && !confirmPassword && !number) error.textContent = 'Fill in all fields'
        else if (!username.match('^[a-zA-Z0-9]+$')) error.textContent = 'Username must be alphanumeric'
        else if (password !== confirmPassword) error.textContent = 'Passwords do not match'
        else if (password.length < 6) error.textContent = 'Password too short'
        else{
            const data = {
                username,
                password,
                number,
            }
            const options = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
            const result = await fetch(`http://localhost:4000/api/signUp`,options).then(res=>res.json()).catch(err=>err)
            if(result.error){
                document.getElementById('error-message').textContent = result.error
            } else {
                localStorage.setItem('username', data.username)
                localStorage.setItem('cart', "[]")
                window.location = `${window.location.origin}`
            }
        }
    }

    async function login(){
        const result = await fetch(`http://localhost:4000/api/login?username=${document.getElementById('login-username').value}&password=${document.getElementById('login-password').value}`).then(res=>res.json()).catch(err=>err)

        if(result.error){
            document.getElementById('error-message').textContent = result.error
        } else {
            const account = result.result[0]
            const cart = result.cart.cart
            localStorage.setItem('username', account.username)
            localStorage.setItem('cart', cart)
            window.location = `${window.location.origin}`
        }
    }

    function signSwitch(){
        const loginSection = document.getElementById('login-section')
        const signupSection = document.getElementById('signup-section')
        const loginSwitch = document.getElementById('login-switch')
        const signSwitch = document.getElementById('signup-switch')

        signSwitch.style.backgroundColor = 'rgb(0,80,107)'
        signSwitch.style.color = 'white'

        loginSwitch.style.backgroundColor = 'white'
        loginSwitch.style.color = 'black'

        loginSection.style.display = 'none'
        signupSection.style.display = 'flex'
    }

    function loginSwitch(){
        const loginSection = document.getElementById('login-section')
        const signupSection = document.getElementById('signup-section')
        const loginSwitch = document.getElementById('login-switch')
        const signSwitch = document.getElementById('signup-switch')

        loginSwitch.style.backgroundColor = 'rgb(0,80,107)'
        loginSwitch.style.color = 'white'

        signSwitch.style.backgroundColor = 'white'
        signSwitch.style.color = 'black'

        signupSection.style.display = 'none'
        loginSection.style.display = 'flex'
    }

  return (
    <div className='login'>
    <main >
        <section>
            <h1>Your Account</h1>
            <div>
                <button id="login-switch" onClick={loginSwitch}>Login</button>
                <button id="signup-switch" onClick={signSwitch}>Sign Up</button>
            </div>
            <p id="error-message"></p>
            <div id="login-section">
                <input placeholder="Username" id="login-username"/>
                <input placeholder="Password" id="login-password" type="password"/>
                <details>
                <summary><small>Forgot password?</small></summary>
                <input placeholder="Username" id="forgot-username"/>
                <input placeholder="Phone Number" id="login-number"/>
                <input placeholder="New password: min 6 chars" id="new-password" type="password"/>
                <input placeholder="Confirm password" id="confirm-new-password" type="password"/>
                <input type="button" value="Reset password" id="reset-password" />
                </details>
                <button onClick={login}>Login</button>
                <p>Create an account <mark onClick={signSwitch}>Sign up now</mark></p>
            </div>
            <div id="signup-section">
                <input placeholder="Username: max 20 chars, alphanumeric" id="signup-username"/>
                <input placeholder="Password: min 6 chars" id="signup-password" type="password"/>
                <input placeholder="Confirm Password" id="confirm-password" type="password"/>
                <input placeholder="Phone Number: numbers only" id="number" type='number'/>
                <button onClick={createAccount}>Sign Up</button>
                <p>Already have an account? <mark onClick={loginSwitch}>Login</mark></p>
            </div>
        </section>
    </main>
    </div>
  )
}
