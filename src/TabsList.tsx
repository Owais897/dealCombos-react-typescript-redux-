//@ts-nocheck

import * as React from "react";
import { Tabs, Skeleton, Button } from "antd";
import RenderList from "./RenderList";

const { TabPane } = Tabs;

class TabsList extends React.Component {
  state = {
    itemType: "Drinks",
  };
  callback = (key) => {
    this.setState({
      itemType: key,
    });
  };
  render() {
    const { itemType } = this.state;
    const { save_seleted_item } = this.props;
    let { data, Chocolates, Drinks, chips, loading } = this.props.data;
    let currentData = [];

    const selected = { Chocolates, Drinks, chips };

    if (data) {
      currentData = getItemList(itemType, data, selected);
    }

    const Children = loading ? (
      <RenderSkeleton />
    ) : (
      <RenderList
        list={currentData}
        itemType={itemType}
        save_seleted_item={save_seleted_item}
        selectedItem={selected[itemType]}
      />
    );

    return (
      <div style={{ margin: "91px" }}>
        <span>
          <Tabs
            tabBarExtraContent={
              <Button
                onClick={() =>
                  this.props.save_seleted_item({
                    Drinks: "",
                    Chocolates: "",
                    chips: "",
                  })
                }
              >
                Reset
              </Button>
            }
            defaultActiveKey="Drinks"
            onChange={this.callback}
            type="line"
          >
            <TabPane tab="Drinks" key="Drinks">
              {Children}
            </TabPane>
            <TabPane tab="Chocolates" key="Chocolates">
              {Children}
            </TabPane>
            <TabPane tab="Chips" key="chips">
              {Children}
            </TabPane>
          </Tabs>
        </span>
      </div>
    );
  }
}

export default TabsList;

const arrayIntersection = (arr1, arr2) =>
  arr1.filter((value) => arr2.includes(value));

function getItemList(itemType, combos, selected) {
  const newSelected = { ...selected };

  delete newSelected[itemType];
  let idList = Object.keys(combos[itemType]);
  for (let [key, val] of Object.entries(newSelected)) {
    idList = arrayIntersection(
      (combos[key][val] && combos[key][val][itemType]) ||
        Object.keys(combos[itemType]),
      idList
    );
  }

  let result = [];
  for (let id of idList) {
    result.push({ ...combos[itemType][id], id });
  }

  return result;
}

const RenderSkeleton = () => {
  return (
    <div style={{ padding: 50 }}>
      <Skeleton />
      <Skeleton />
    </div>
  );
};
