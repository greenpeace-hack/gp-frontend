import React, { Component } from "react";
import {List, Typography} from "antd";
import "antd/dist/antd.css";

const itemDetails = {
    title: 'testTitle',
    desc: 'Nice description'
};

const header = {
    title: 'name'
    
}

export default class List extends Component {
    render() {

    <div>
    <h3 style={{ marginBottom: 16 }}>Default Size</h3>
    <List
      header={<div>{header}</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {itemDetails}
        </List.Item>
        
      )}
    />
    </div>

    }
}