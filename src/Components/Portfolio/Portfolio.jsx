import React from 'react'
import firstPic from "../assests/port1.png";
import secondPic from "../assests/port2.png";
import thirdtPic from "../assests/port3.png";

function Portfolio() {
    return (
        <>
        <header className='portfolio vh-100'>
        <div className="container d-flex flex-column justify-content-center align-items-center m-auto ">
        <h2 className='text-#2C3E50 text-center fw-bold pt-1 fs-1 '>PORTFOLIO SECTION</h2>
        <div className="contact-icon text-#2C3E50 text-center">
          <i class="fa-solid fa-star"></i>
          </div>
       </div>

       <div className="container">

        <div className="row g-5 py-2">
            <div className="col-md-4 "> 
            <div className="portfolio-item"><img  className='photo' src={firstPic} alt="" />
            
            <div className="plus"><i className="fa-solid fa-plus fs-2 text-white "></i></div>
            </div>
           
            </div>
            <div className="col-md-4">
                <div className="portfolio-item"><img  className='photo'src={secondPic} alt="" />
                <div className="plus"><i className="fa-solid fa-plus fs-2 text-white "></i></div>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className="portfolio-item"><img  className='photo'src={thirdtPic} alt="" />
                <div className="plus"><i className="fa-solid fa-plus fs-2 text-white"></i></div>
                </div>
            </div>
            <div className="col-md-4"> <div className="portfolio-item">
                <img  className='photo'src={firstPic} alt="" />
                <div className="plus"><i className="fa-solid fa-plus fs-2 text-white"></i></div>
                 </div>
                </div>
                
            <div className="col-md-4"> 
            <div className="portfolio-item">
                <img  className='photo'src={secondPic} alt="" />
                <div className="plus"><i className="fa-solid fa-plus fs-2 text-white"></i></div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="portfolio-item">
                    <img  className='photo'src={thirdtPic} alt="" />
                    <div className="plus"><i className="fa-solid fa-plus fs-2 text-white"></i></div>
                    </div>


            </div>
        </div>

      
       </div>




        </header>
        </>
    )
}

export default Portfolio
