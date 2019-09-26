import React, { Component } from 'react';

import { supporters } from '../services/events-service';

import Page from '../components/Page';
import { Button, List, Skeleton, Card, PageHeader } from 'antd';
import Map from '../components/map';
import { Link } from 'react-router-dom'

class EventDetailView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render = () => (
    <Page>
      <h1>Event Title Here</h1>
      <p>Content here...</p>
      {/* <Button ></Button> */}

      {/* <Skeleton avatar paragraph={{ rows: 4 }} /> */}

      {/* <Skeleton avatar paragraph ={{ rows: 4 }} /> */}

      <Button ><Link to='/map' >View On Map</Link></Button>

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