import React, { useEffect, useState } from 'react'
import './css/Review.scss'

function Comment(props){
  return (
    <>
    <figure>
      <p>{props.name} {props.date.substring(0,10)}</p>
      <img src={props.image}/>
      <figcaption>{props.comment}</figcaption>
      <hr/>
    </figure>
    </>
  )
}

function CommentSection(){

  const [comments, setComments] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:4000/api/getComments').then(res=>res.json())
    .then(comments=>setComments(comments))
  },[])
  return (
    <>
      <section id='comment-section'>
        {comments ? comments.map(i=><Comment name={i.username} comment={i.comment} image={i.image} date={i.date}/>) : <p>Loading</p>}
      </section>
    </>
  )
}
function InsertComment(){
  async function comment(e){
    console.log('asd')
    e.preventDefault()
    const commentSection = document.getElementById('comment-section')
    const comment = document.getElementById('comment').value
    const picture = document.getElementById('upload-picture')

    const figure = document.createElement('figure')
    figure.innerHTML = `
    <p>${localStorage.getItem('username')}</p>
    <img/>
    <figcaption>${comment}</figcaption>
    <hr/>
    `

    const reader = new FileReader();

    const imgData = new Promise((resolve,reject)=>{
      reader.onload = e => {
        const fileContent = e.target.result;
        figure.querySelector('img').src = fileContent
        resolve(fileContent)
      };
  
      try{reader.readAsDataURL(picture.files[0])}
      catch {figure.querySelector('img').remove();reject(null)}
    })

    commentSection.appendChild(figure)

    const data = {
      username: localStorage.getItem('username'),
      comment,
      image: await imgData.then(data=>data).catch(none=>none),
      date: new Date()
    }

    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

    fetch('http://localhost:4000/api/uploadComment', options)

    e.target.reset()
  }
  return (
    <>
    <form id='insert-comment' onSubmit={comment}>
      <textarea name='comment' id='comment'placeholder='Leave a comment'></textarea>
      <div>
        <input name='picture' id='upload-picture' accept="image/*" type='file'/><button>Comment</button>
      </div>
    </form>
    
    </>
  )
  
}

export default function Review() {
  return (
    <div className='review'>
      <main>
        <h2>Reviews</h2>
        <CommentSection/>
        <InsertComment/>
      </main>
    </div>
  )
}
