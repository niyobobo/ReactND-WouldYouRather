import React from "react";
import TabItem from "./TabItem";

const TabNavigation = ({ data, activeTab, handleSelection }) => {
  return (
    <div className="tab-pane">
      <div className="row tab-pane__navigation">
        {!data.length
          ? null
          : data.map(({ title, value }, index) => (
              <TabItem
                key={index}
                title={title}
                value={value}
                isActive={activeTab === title}
                handleSelection={() => handleSelection(title)}
              />
            ))}
      </div>
    </div>
  );
};

export default TabNavigation;
