import React from 'react'

function Contact() {
    return (
        <>
      <header className="contact vh-100">
      <div className="container d-flex flex-column justify-content-center align-items-center m-auto ">
        <h2 className='text-#2C3E50 text-center fw-bold pt-4 fs-1 '>CONATCT SECTION</h2>
        <div className="contact-icon text-#2C3E50 text-center">
          <i class="fa-solid fa-star"></i>
          </div>
       </div>

<div className='container w-75 py-5'>

<input class="form-control mb-5" type="text" placeholder="User Name" aria-label="."/>
<input class="form-control mb-5" type="text" placeholder="Age" aria-label=""/>
<input class="form-control mb-5" type="text" placeholder="Email" aria-label=""/>
<input class="form-control mb-5" type="text" placeholder="Password" aria-label=""/>

<button className='btn'>  Send Message </button>

</div>

     







</header>




       
        </>
    )
}

export default Contact
