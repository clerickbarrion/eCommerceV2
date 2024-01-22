import React, { useState, useEffect, useRef } from 'react'
import './css/Contact.scss'

function Form(){
    const formRef = useRef(null)

    function validate(e){
        e.preventDefault()
        const form = formRef.current
        if(form){
            const firstName = form.querySelector('#first-name')
            const lastName = form.querySelector('#last-name')
            const email = form.querySelector('#email')
            const phone = form.querySelector('#phone')
            const errorMsg = form.querySelector('#error-msg')

            if (!firstName.value && !lastName.value && !email.value) errorMsg.textContent = 'Enter all required fields'
            else if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) errorMsg.textContent = "Enter a valid email"
            else if (!phone.value.match(/^(1-)?\d{3}-\d{3}-\d{4}$/)) errorMsg.textContent = 'Enter phone number in the valid format'
        }
    }

    return(
        <form action="#"onSubmit={validate} ref={formRef}>
            <h1>Help Us Improve</h1>
            <fieldset>
                <legend>Survey</legend>
                <figure><img src={require("./images/arowana.png")} alt="arowana"/></figure>
                <p>* indicates required</p>
                <h1 id='error-msg'></h1>
                <div className="form-group">
                    <div>
                        <label for="first-name">*First Name:</label>
                        <input type="text" id="first-name" name='first-name'/>
                    </div>
                    <div>
                        <label for="last-name">*Last Name:</label>
                        <input type="text" id="last-name" name='last-name'/>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label for="email">*Email:</label>
                        <input type="email" id="email" name='email'/>
                    </div>
                    <div>
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" placeholder="000-000-0000"/>
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <label for="favorite">Which fish was your favorite?</label>
                        <select id="favorite">
                            <option value="">--Select a Fish--</option>
                            <option>Betta Fish</option>
                            <option>Goldfish</option>
                            <option>Tetra</option>
                            <option>Guppy</option>
                            <option>Clownfish</option>
                            <option>Bluetang</option>
                            <option>Mandarin Fish</option>
                            <option>Angelfish</option>
                            <option>Mantis Shrimp</option>
                            <option>Arowana</option>
                            <option>Discus Fish</option>
                            <option>Puffer</option>
                        </select>
                    </div>
                    <div>
                        <label for="slider">Rate your experience:</label>
                        <div id="slider-container"><p>Bad</p><input type="range" id="slider"/><p>Good</p></div>
                    </div>
                </div>
                <div>
                    <label htmlFor='comment'>Leave a comment:</label>
                    <textarea id='comment'></textarea>
                </div>
            </fieldset>
            <button  type="submit">Submit</button>
            <button  type="reset">Reset</button>
        </form>
    )
    
}



export default function Contact() {

  return (
    <div className='contact'>
      <main>
        <Form/>
    </main>
    </div>
  )
}
