import React from 'react'
import homeImg from "../assests/avataaars.png";

function Home() {
    return (
        <>
      <header className="vh-100">
      <div className="container d-flex flex-column justify-content-center align-items-center m-auto py-4">
          <img src={homeImg} alt="" className=" mb-5" />
          <h2
            className="text-white fw-bolder fs-1 text-center mb-3" >
           START FRAMEWORK
          </h2>
          <div className="home-icon text-white">
          <i class="fa-solid fa-star"></i>
          </div>





          <p className='text-white fs-4 fw-light mt-3'>Graphic Artist - Web Designer - Illustrator</p>
        </div>


      </header>
        </>
    )
}

export default Home
