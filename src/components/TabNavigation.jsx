import React from "react";
import TabItem from "./TabItem";

const TabNavigation = ({ data, activeTab, handleSelection }) => {
  return (
    <div className="tab-pane">
      <div className="row tab-pane__navigation">
        {!data.length
          ? null
          : data.map(({ tabKey, title, value }) => (
              <TabItem
                key={tabKey}
                title={title}
                value={value}
                isActive={activeTab === tabKey}
                handleSelection={() => handleSelection(tabKey)}
              />
            ))}
      </div>
    </div>
  );
};

export default TabNavigation;
