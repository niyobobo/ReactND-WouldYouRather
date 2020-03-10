import React, { Component } from "react";
import { connect } from "react-redux";
import { headerTitles, checkId } from "../utils/formatter";
import TabNavigation from "../components/TabNavigation";
import Question from "../components/Question";

class Home extends Component {
  state = {
    activeTab: "unanswered"
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
          {data[activeTab].length ? (
            data[activeTab].map(question => (
              <Question key={question.id} data={question} />
            ))
          ) : (
            <p className="dashboard__no-data">{`You have 0 ${categories
              .filter(item => item.tab === activeTab)[0]
              .tab.toUpperCase()} question`}</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, questions }) => {
  const { id } = user;
  const data = {
    unanswered: Object.values(questions)
      .filter(question => !checkId(question, id))
      .sort((a, b) => b.timestamp - a.timestamp),
    answered: Object.values(questions)
      .filter(question => checkId(question, id))
      .sort((a, b) => b.timestamp - a.timestamp)
  };
  return {
    data,
    categories: headerTitles(data)
  };
};

export default connect(mapStateToProps)(Home);
