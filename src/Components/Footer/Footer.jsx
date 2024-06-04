import React from 'react'

function Footer() {
    return (
        <>
        <div className=' text-white'>
        <footer>
            <div className="container py-5">
                <div className="row text-center mx-auto">
                    <div className="col-md-4 ">
                        <h3>LOCATION</h3>
                        <h6>2215 John Daniel Drive</h6>
                        <p >Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4">
                        <h3>AROUND THE WEB</h3>
                        <div className="social pt-3">
                            <ul className='list-unstyled d-flex justify-content-center align-items-center gap-3'>
                                <li><i class="fa-brands fa-facebook fa-2xl "></i></li>
                                <li><i class="fa-brands fa-twitter fa-2xl"></i></li>
                                <li><i class="fa-brands fa-linkedin fa-2xl"></i></li>
                                <li><i class="fa-solid fa-globe fa-2xl"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>

                </div>
            </div>
         </footer>
         <div className='end py-1 text-center '>
            <p className='pt-3'>Copyright © Your Website 2024</p>


         </div>

        </div>
      
        </>
    )
}

export default Footer
