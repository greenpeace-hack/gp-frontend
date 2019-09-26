import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Card } from 'antd';
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
              <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                {item.title}
              </Card>
            </List.Item>
          )}
        />
      </div>
    );

  }
}