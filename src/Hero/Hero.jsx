import React from 'react'
import './hero.css'
import HandIcons from '../images/hand_icon.png'
import ArrowIcons from '../images/arrow.png'
import HeroImg from '../images/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>New Arrivals only</h2>
            <div>
                <div className="hero_icons">
                    <p>New</p>
                    <img src={HandIcons} alt="" />
                </div>
                <p className='p-text'>Collections</p>
                <p className='p-text'>For Everyone</p>
            </div>
            <div className="hero_latest_btn">
                <div>Latest</div>
                <img src= {ArrowIcons} alt="" />
            </div>
        </div>
        <div className="hero_right">
            <img src= {HeroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero