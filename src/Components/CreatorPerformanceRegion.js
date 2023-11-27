/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import img from "../Assets/Screenshot 2023-11-26 134826.png"


const CreatorPerformanceRegion = () => {
  return (<div className='container-fluid'>

    <div className="row">
      <div className="col-12 col-md-8 col-lg-6 mb-3">
        <h3 className="h4 manrope-font">Creator's Performance By Region</h3>
        <p style={{ color: "#25273380" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-end">
      <h5 className='m-3'>Select Creator</h5>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle bg-white text-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Oliver Wilson
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Noah Haris</a></li>
          <li><a className="dropdown-item" href="#">Oliver Wilson</a></li>
          <li><a className="dropdown-item" href="#">Lucas Brown</a></li>
          <li><a className="dropdown-item" href="#">Lewi Lewis</a></li>
          <li><a className="dropdown-item" href="#">Ethan Jane</a></li>
          <li><a className="dropdown-item" href="#">Allen Foster</a></li>

        </ul>
      </div>
    </div>
    <div className="container">
      <img src={img} alt="" className="img-fluid" />
    </div>
  </div>
  )
}

export default CreatorPerformanceRegion