import React, { Component } from 'react';

import Page from '../components/Page';

class EventDetailView extends Component {
  componentDidMount() {
  }

  render = () => (
    <Page>
      <h1>Event Title Here</h1>
      <p>Content here...</p>
    </Page>
  );
}

export default EventDetailView;