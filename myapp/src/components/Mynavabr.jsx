import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  BsCaretRightSquareFill,
  BsFillCaretDownFill,
  BsPeopleFill,
} from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { TbBoxModel2Off } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import PROFILEIMAGE from "../assets/profileimage.jpg";
import { BsFacebook } from "react-icons/bs";
const Mynavbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper ">
          <div className="navbar-right-wrapper">
            <div className="right-wrapper">
              <span className="fb-logo">
                <a>
                  <BsFacebook />
                </a>
              </span>
              <span className="search-bar">
                <input className="input-bar" type="text" placeholder="Search" />
              </span>
            </div>
          </div>

          <div className="navbar-middel-wrapper">
            <div>
              <a><AiFillHome /></a>
            </div>
            <div>
              <a><BsCaretRightSquareFill /></a>
            </div>
            <div>
              <a><BiStore /></a>
            </div>
            <div>
              <a><BsPeopleFill /></a>
            </div>

          </div>

          <div className="navbar-left-wrapper">
            <div className="profile-wrapper">
              <span className="profile-img">
              <img
                src={PROFILEIMAGE}
                style={{ width: "40px", height: "40px", objectFit: "cover" , borderRadius:"50px"}}
              ></img>
              </span>
              <span style={{paddingTop:"6px"}}>
                <a>Daniyal ali</a>
              </span>
            </div>

            <div className="navleft-list-wrapper">
              <div>
                <AiOutlinePlus />
              </div>
              <div>
                <FaFacebookMessenger />
              </div>
              <div>
                <FaBell />
              </div>
              <div>
                <BsFillCaretDownFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mynavbar;
