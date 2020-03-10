import React from "react";
import { IoIosAdd, IoIosList, IoIosPower } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleUserLogout } from "../redux/actions/auth";
import CircleImage from "./CircleImage";

const Navigation = ({ user, logout, history }) => {
  return (
    <div className="navigation">
      <nav className="container">
        <ul className="nav">
          <li className="nav__item">
            <NavLink activeClassName="active" to="/">
              <GoHome />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink activeClassName="active" to="/add">
              <IoIosAdd />
              <span>New Question</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink activeClassName="active" to="/leaderboard">
              <IoIosList />
              <span>Leader board</span>
            </NavLink>
          </li>
          <li className="nav__item nav__item--right">
            {user && (
              <>
                <span>{`Hello, ${user.name}`}</span>
                <CircleImage src={user.avatarURL} title={user.name} />
                <IoIosPower
                  onClick={() => {
                    history.push("/");
                    logout();
                  }}
                />
              </>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ users, user }) => ({
  user: users[user.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(handleUserLogout())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
