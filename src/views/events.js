import React, { Component } from 'react';
import ListItems from '../components/list'
import Page from '../components/Page';

import { events, listEvents } from '../services/events-service';

class EventsView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      events: []
    }
  }
  componentDidMount() {
    listEvents().then((data) => {
      this.setState({ events: data })
    }).catch(() => this.setState({ events: [] }))
  }

  render = () => (
    <Page>
      <ListItems title="Events" subTitle="Help us take Action!!!" data={this.state.events} goBack={window.history.back} />
    </Page>
  );
}

export default EventsView;

