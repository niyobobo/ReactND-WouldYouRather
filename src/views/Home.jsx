import React, { Component } from "react";
import { connect } from "react-redux";
import { headerTitles, checkId } from "../utils/formatter";
import Question from "../components/Question";
import TabNavigation from "../components/TabNavigation";

class Home extends Component {
  state = {
    activeTab: "notAnswered"
  };

  handleTabSelection = tab => {
    this.setState(() => ({
      activeTab: tab
    }));
  };

  render() {
    const { categories, data } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="dashboard">
        <TabNavigation
          data={categories}
          activeTab={activeTab}
          handleSelection={this.handleTabSelection}
        />
        <div className="dashboard__body">
          {data[activeTab].map(question => (
            <Question key={question.id} data={question} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, questions }) => {
  const { id } = user;
  const data = {
    notAnswered: Object.values(questions).filter(
      question => !checkId(question, id)
    ),
    answered: Object.values(questions).filter(question => checkId(question, id))
  };
  return {
    data,
    categories: headerTitles(data)
  };
};

export default connect(mapStateToProps)(Home);
