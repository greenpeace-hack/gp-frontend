import React, { Component } from 'react';

import Page from '../components/Page';
import Map from '../components/map';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.API_KEY = 'AIzaSyC6tQ5hqYrwbuiLDK_Ow3IRwiVFdE72nME';
    console.log('props', props);
    // this.location = { lat: -34.397, lng: 150.644 };
    this.location = props.location.state;
  }

  componentDidMount() {
  }

  render = () => (
    <Page>
      <Map 
      isMarkerShown googleMapURL={'https://maps.googleapis.com/maps/api/js?key=' + this.API_KEY + '&libraries=geometry,drawing,place'}
      loadingElement={<div style={{ height: `100%` }} />}
      location={this.location}
      visible={this.showMap}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    </Page>
  );
}

export default MapView;