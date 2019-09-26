import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Card } from 'antd';
import { Link } from 'react-router-dom';
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
                            <Card title={item.title} extra={<Link to="/event/">More</Link>} style={{ width: 300 }}>
                                <h4>Description</h4>
                                {item.description}
                                <h4>Start Date</h4>
                                {item.startDate}
                                <h4>End Date</h4>
                                {item.endDate}
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );

    }
}