import React from "react";
import CircleImage from "./CircleImage";
import {
  IoIosHome,
  IoIosCreate,
  IoMdClipboard,
  IoIosLogOut
} from "react-icons/io";

const Navigation = ({ user }) => {
  return (
    <div className="navigation">
      <nav className="container">
        <ul className="nav">
          <li className="nav__item">
            <a href="#">
              <IoIosHome />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#">
              <IoIosCreate />
              <span>Create</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#">
              <IoMdClipboard />
              <span>Leader board</span>
            </a>
          </li>
          <li className="nav__item nav__item--right">
            <a href="#">
              <span>{"user.name"}</span>
              <CircleImage url={"user.imageAvatar"} title={"user.name"} />
              <IoIosLogOut />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
