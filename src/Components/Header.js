/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsBell, BsChatText } from "react-icons/bs";
import pp from "../Assets/pp.png"
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <header className="container-fluid ">
        <div className="container d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item manrope-font hfont">Dashboard</li>
              <li className="breadcrumb-item manrope-font hfont">My Creators</li>
            </ol>
          </nav>

          <div className="d-flex justify-content-between align-items-center">
            {/* Left-aligned items */}
            <div>{/* Placeholder for additional content if needed */}</div>

            {/* Right-aligned items */}
            <div className="d-flex align-items-center">
              {/* Replace these with actual icons or images */}
              <div className="d-flex pb-3">
                <h5>
                  <BsBell />
                </h5>
                <div className="p-2"></div>
                <h5>
                  <BsChatText />
                </h5>
              </div>

              <div className="ms-3 d-flex">
                <div className="dropdown">
                  <img
                    src={pp}
                    alt="Profile"
                    width="45"
                    height="45"
                    className="rounded-circle me-2 border border-dark rounded-circle p-1"
                  />
                </div>
                <div>
                  <strong> Alexander Mark</strong>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="d-md-flex justify-content-between align-items-end gap-2">
          <div
            className="d-flex flex-column flex-md-row justify-content-around align-items-md-end p-3 rounded"
            style={{ backgroundColor: "#19B03F29" }}
          >
            <div className="col-md">
              <span className="text-secondary small pt-1">GOOD MORNING</span>
              <h1 className="h2">Alexander Mark</h1>
            </div>
            <br />
            <p className="text-muted headerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="col-md-auto mt-0 ">
            <button className="btn btn-success"> + Explore New Creators</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;