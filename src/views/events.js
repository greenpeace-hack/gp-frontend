import React, { Component } from 'react';

import Page from '../components/Page';
import { Button } from 'antd';

class EventsView extends Component {
  componentDidMount() {
  }

  render = () => (
    <Page>
      <h1>Events</h1>
      <Button>Go to event -></Button>
    </Page>
  );
}

export default EventsView;

