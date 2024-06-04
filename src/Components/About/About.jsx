import React from 'react'

function About() {
    return (
        <>
   <header className="vh-100">
      <div className="container d-flex flex-column justify-content-center align-items-center m-auto py-5">
        <h2 className='text-white text-center fw-bold py-5 fs-1'>ABOUT COMPONENT</h2>
        <div className="about-icon text-white text-center">
          <i class="fa-solid fa-star"></i>
          </div>
       </div>


       <div className="container">
            <div className="row text-white py-5 ">
                <div className="col-md-6 fs-5 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 fs-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>

    </header>

    
        </>
    )
}

export default About
