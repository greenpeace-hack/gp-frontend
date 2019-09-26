import React, { Component } from "react";

import "antd/dist/antd.css";
import { List, Card } from 'antd';
import { Redirect, Link } from 'react-router-dom'


export default class ListComponent extends Component {

  render() {
    return (

      <div>

        <List
          header={<div><h1>Events</h1></div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={'data'}
          renderItem={item => (
            <List.Item>
              <Card title="Default size card" extra={<Link to="/event/">More</Link>} style={{ width: 300 }}>
                {item}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );

  }
}