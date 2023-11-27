/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../Assets/C1.png"
import img2 from "../Assets/C2.png"
import img3 from "../Assets/C3.png"
import img4 from "../Assets/C4.png"
import img5 from "../Assets/C5.png"

const Mycreators = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of cards shown at a time
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div>
      <div className='container-fluid mt-3'>
        <h3 className='manrope-font'>My Creators</h3>
        <p style={{ color: "#25273380" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      </div>

      <div className='container-fluid' style={{ margin: "auto" }}>
        <Slider {...settings}>
          <div className="card m-3 ">
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img1} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Henry Paul</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img2} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>William James</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-warning d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img3} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Evan Jefferson</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-warning d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img4} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Mickie Thompson</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img5} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Kiara Jesson</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img3} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Jane Mary</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img4} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Jane Mary</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
          <div className="card m-3"   >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              <img src={img5} alt="Profile" className="rounded-circle me-2 mb-2" />
              <h5 className="card-title manrope-font" style={{ fontWeight: "600", fontSize: "1rem" }}>Jane Mary</h5>
              <p className="card-text montserrat-font" style={{ fontColor: "#252733", fontSize: "0.7rem" }}>Letsgo@gmail.com</p>
              <br />
              <h6 className="montserrat-font" style={{ fontSize: "0.7rem" }}><strong>123</strong> Creatives</h6>
              <div className="alert alert-success d-flex align-items-center rating" role="alert">
                <h6 className="m-0" style={{ paddingRight: "5px" }}>5 </h6>
                <ReactStars
                  count={5}
                  size={24}
                  color="#19B03F"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Mycreators