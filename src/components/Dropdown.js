import React, { Component } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import CircleImage from "./CircleImage";

class Dropdown extends Component {
  state = {
    isListOpen: false
  };

  componentDidUpdate() {
    const { isListOpen } = this.state;
    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener("click", this.onClickOutside);
      } else {
        window.removeEventListener("click", this.onClickOutside);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutside);
  }

  onClickOutside = () => {
    this.setState({
      isListOpen: false
    });
  };

  toggleList = () => {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen
    }));
  };

  render() {
    const { users, handleSelect, title } = this.props;
    const { isListOpen } = this.state;

    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={this.toggleList}>
          <div className="dropdown__header-title">{title}</div>
          {isListOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        {isListOpen && (
          <ul className="dropdown__list">
            {!users.length
              ? null
              : users.map(user => (
                  <li
                    key={user.id}
                    className="dropdown__list-item"
                    onClick={() => handleSelect(user)}
                  >
                    <CircleImage
                      className="avatar"
                      title={user.name}
                      src={user.avatarURL}
                    />
                    <span className="name">{user.name}</span>
                  </li>
                ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
