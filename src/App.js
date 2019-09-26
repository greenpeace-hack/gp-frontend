import React from 'react';
import Page from './components/Page';

import { Layout, Button } from 'antd'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventsView from './views/events'
import EventDetailView from './views/events'

// const { Content } = Layout;



function Index(props) {
  return <Page>
    <Button type="primary"><Link to="/events/">List of Events</Link></Button>
  </Page>
}



function App() {
  return (
    <Router>
      <Page>
        <Button type="primary"><Link to="/events/">Take Action!!!</Link></Button>
      </Page>

      <Route path="/" exact component={Index} />
      <Route path="/events/" component={EventsView} />
      <Route path="/event/" component={EventDetailView} />
      {/* <Route path="/petitions-detail/" component={Users} /> */}
    </Router>
  );
}

export default App;