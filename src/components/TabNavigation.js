import React from "react";
import TabItem from "./TabItem";

const TabNavigation = ({ data, activeTab, handleSelection }) => {
  return (
    <div className="tab-pane">
      <div className="row tab-pane__navigation">
        {!data.length
          ? null
          : data.map(({ tab, value }) => (
              <TabItem
                key={tab}
                title={tab}
                value={value}
                isActive={activeTab === tab}
                handleSelection={() => handleSelection(tab)}
              />
            ))}
      </div>
    </div>
  );
};

export default TabNavigation;
