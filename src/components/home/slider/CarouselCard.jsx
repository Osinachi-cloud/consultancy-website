import React from 'react'
import "react-caroussel/dist/index.css";
import "./style.css";
import { NavLink } from "react-router-dom";

const CarouselCard = ({ index }) => {
  return (
    <NavLink  to="">
        <div className="card card-box">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1>Helping to open offshore bank accounts {index}</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.

            </p>
            <div className="blogLink" to="/blog">Read more</div>
        </div>
    </NavLink>
  )
}

export default CarouselCard




