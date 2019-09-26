import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Card, Row, Col } from 'antd';
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
              <Card type="inner" title={item.title} extra={<Link to={{ pathname: "/event/" + item.id, state: item }}>More</Link>} style={{ width: 300 }}>
              t
                <h4>Description</h4>
                {item.description}

                <Row>
                  <Col span={6}><b>Start Date: </b>{item.startDate}</Col>
                  <Col span={6}><b>End Date: </b>{item.endDate}</Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </div>
    );

  }
}