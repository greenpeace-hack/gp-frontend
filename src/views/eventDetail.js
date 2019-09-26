import React, { Component } from 'react';

import { supporters } from '../services/events-service';

import Page from '../components/Page';
import { Button, List, Skeleton, Card, PageHeader } from 'antd';
import { Link } from 'react-router-dom'

class EventDetailView extends Component {
  constructor(props) {
    super(props);
    let geoCoords = this.props.location.state.location.split(",");
    this.location = { lat: parseFloat(geoCoords[0]), lng: parseFloat(geoCoords[1]) };
  }

  componentDidMount() {
    
  }

  render = () => (
    <Page>
      <h1>{this.props.location.state.title}</h1>
      <p>{this.props.location.state.description}</p>
      <Button ><Link to={{ pathname: "/map/", state: this.location }}>View On Map</Link></Button>

      {/* <Button ></Button> */}

      {/* <Skeleton avatar paragraph={{ rows: 4 }} /> */}

      {/* <Skeleton avatar paragraph ={{ rows: 4 }} /> */}

      <List
        header={<PageHeader title="Supporters" />}
        bordered
        dataSource={supporters}
        renderItem={item => (
          <List.Item>
            <Card size="small" title="" style={{ width: "100%" }}>

              <h4>Name: {item.firstName} {item.lastName}</h4>
              <h4>Email: {item.email}</h4>
            </Card>
          </List.Item>
        )}
      />
    </Page>
  );
}

export default EventDetailView;