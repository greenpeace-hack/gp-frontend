import React, { Component } from 'react';

import Page from '../components/Page';
import { Button } from 'antd';
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
    </Page>
  );
}

export default EventDetailView;