import React, { Component } from "react";
import "antd/dist/antd.css";
import { List, Card } from 'antd';
import { Link } from 'react-router-dom'
import { events } from "../services/events-service";

import { PropTypes } from 'prop-types';
import { PageHeader } from 'antd';


class ListComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div>

        <List
          header={<PageHeader onBack={() => null} title={this.props.title} subTitle={this.props.subTitle} />}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item>
              <Card type="inner" title={item.title} extra={<Link to={{ pathname: "/event/" + item.id, state: item }}>More</Link>} style={{ width: 300 }}>
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

ListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  goBack: PropTypes.func
};

export default ListComponent;