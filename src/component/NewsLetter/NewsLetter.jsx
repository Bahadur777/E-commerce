import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news_letter'>
        <div className="new_head">
            <h1>Get exclusive offers on you Email</h1>
            <p>Subscribe to our newsletter and stay update</p>
        </div>
        <div className="news-element">
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter