import React, { Component } from "react";

import "antd/dist/antd.css";
import { List, Typography } from 'antd';


export default class ListComponent extends Component {
  render() {
    return (

      <div>

        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    );

  }
}