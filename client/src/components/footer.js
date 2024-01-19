import React from 'react'

export default function footer() {
  return (
    <>
      <footer>
        <ul>
            <li>Social Media</li>
            <hr/>
            <li><a><img src={require("../images/youtube.png")} alt="youtube"/></a></li>
            <li><a><img src={require("../images/linkedin.png")} alt="linkedin"/></a></li>
            <li><a><img src={require("../images/twitter.png")} alt="twitter"/></a></li>
        </ul>
        <ul>
            <li>Contact Information</li>
            <hr/>
            <li>business@riptide.com</li>
            <li>780-300-2790</li>
            <li>7200 Riptide Ln, Charlotte NC 28215</li>
        </ul>
        <ul>
            <li>Learn More</li>
            <hr/>
            <li>About Us</li>
            <li>Set-up Tutorial</li>
            <li>Terms of Service</li>
        </ul>
    </footer>
    </>
  )
}
