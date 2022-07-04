import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className="hero">  
          <div className="wrapper">
            <div className="image">
              <img src="https://img.freepik.com/free-vector/landscape-with-residential-building-drawn-by-contour-lines-editable-stroke-energy-saving-vector-illustration-line-art-style_529424-407.jpg?w=1060" alt="" className="img" />
            </div>
            <div className="call-to-action">
              <div className="title"><h3>Helping to open offshore bank accounts</h3></div>
              <div className="text-body"><p>Given our experience and good relationships with various financial institutions around the globe, we can not only introduce you to the best financial institution for your needs but also lead you through the process of opening a bank account.</p></div>
              <div className="button">Contact Us</div>
            </div>
          </div>
    
    </div>
  )
}

export default Hero