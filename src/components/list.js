import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Card } from 'antd';
import { Link } from 'react-router-dom'
import { events } from "../services/events-service";

export default class ListComponent extends Component {


  render() {
    return (

      <div>
        <List
          header={<div><h1>Events</h1></div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={events}
          renderItem={item => (
            <List.Item>
              <Card title="Default size card" extra={<Link to="/event/">More</Link>} style={{ width: 300 }}>
                {item.title}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );

  }
}