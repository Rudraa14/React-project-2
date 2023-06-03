import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
 <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div className='links'>
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
