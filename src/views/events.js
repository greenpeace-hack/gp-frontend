import React, { Component } from 'react';
import ListItems from '../components/list'
import Page from '../components/Page';

import { events } from '../services/events-service';

class EventsView extends Component {
  componentDidMount() {
  }

  render = () => (
    <Page>
      <ListItems title="Events" subTitle="Help us take Action!!!" data={events} goBack={window.history.back()} />
    </Page>
  );
}

export default EventsView;

