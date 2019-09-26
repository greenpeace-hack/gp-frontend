import React, { Component } from 'react';
import ListItems from '../components/list'
import Page from '../components/Page';

class EventsView extends Component {
  componentDidMount() {
  }

  render = () => (
    <Page>
      <ListItems />
    </Page>
  );
}

export default EventsView;

