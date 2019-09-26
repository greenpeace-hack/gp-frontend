import React, { Component } from 'react';

import Page from '../components/Page';
import { Button } from 'antd';
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
      <Button ><Link to ='/map' >View On Map</Link></Button>
    </Page>
  );
}

export default EventDetailView;