import React, { Component } from 'react';

import Page from '../components/Page';
import { Button } from 'antd';
import Map from '../components/map';

class EventDetailView extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = 'AIzaSyC6tQ5hqYrwbuiLDK_Ow3IRwiVFdE72nME';
    this.location = { lat: -34.397, lng: 150.644 };
  }

  componentDidMount() {
  }

  showMap() {
    
  }

  render = () => (
    <Page>
      <h1>Event Title Here</h1>
      <p>Content here...</p>
      <Button onClick={this.showMap}></Button>
      <Map
      isMarkerShown googleMapURL={'https://maps.googleapis.com/maps/api/js?key=' + this.API_KEY + '&libraries=geometry,drawing,place'}
      loadingElement={<div style={{ height: `100%` }} />}
      location={this.location}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </Page>
  );
}

export default EventDetailView;