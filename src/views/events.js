import React, { Component } from 'react';
import ListItems from '../components/list'
import Page from '../components/Page';
import { Button } from 'antd';

class EventsView extends Component {
  componentDidMount() {
  }



  render = () => (
    <Page>
      <h1>Events</h1>
      <ListItems />
    </Page>
  );
}

export default EventsView;

