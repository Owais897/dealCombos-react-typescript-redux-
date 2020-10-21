//@ts-nocheck

import React, { Component } from "react";
import { Radio } from "antd";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

class RenderList extends Component {
  constructor(props) {
    super(props);
  }

  sendToStore = (selectedItem) => {
    const { itemType } = this.props;

    let payload = {
      [itemType]: selectedItem,
    };
    this.props.save_seleted_item(payload);
  };

  render() {
    return (
      <div>
        <Radio.Group
          value={this.props.selectedItem}
          onChange={(e) => this.sendToStore(e.target.value)}
        >
          {this.props.list.map((item) => {
            return (
              <Radio key={item.id} style={radioStyle} value={item.id}>
                {item.label}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
    );
  }
}

export default RenderList;
