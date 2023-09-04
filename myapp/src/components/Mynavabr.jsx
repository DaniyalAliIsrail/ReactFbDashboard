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
          <div>
            <div>
              <a>
                <BsFacebook />
              </a>
              <span>
                <input type="text" placeholder="search" />
              </span>
            </div>
          </div>

          <div className="navbar-middel-wrapper">
            <div>
              <AiFillHome />
            </div>
            <div>
              <BsCaretRightSquareFill />
            </div>
            <div>
              <BiStore />
            </div>
            <div>
              <BsPeopleFill />
            </div>
            <div>
              <TbBoxModel2Off />
            </div>
          </div>

          <div className="navbar-left-wrapper">
            <div className="profile-wrapper">
              <img src={PROFILEIMAGE} style={{ width: "30px" , height:"25px" , objectFit:"cover"  }}></img>
              <span>
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
