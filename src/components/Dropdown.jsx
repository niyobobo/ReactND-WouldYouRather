import React, { Component } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

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
    const { list, handleSelect, title } = this.props;
    const { isListOpen } = this.state;

    return (
      <div className="dropdown">
        <div className="dropdown__header" onClick={this.toggleList}>
          <div className="dropdown__header-title">{title}</div>
          {isListOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        {isListOpen && (
          <ul className="dropdown__list">
            {list.map(user => (
              <li
                key={user.id}
                className="dropdown__list-item"
                onClick={() => handleSelect(user)}
              >
                <img className="avatar" src={user.avatarURL} alt={user.name} />
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
