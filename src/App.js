import React from 'react';
import Page from './components/Page';

import { Button, Skeleton } from 'antd'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EventsView from './views/events'
import EventDetailView from './views/eventDetail'

// const { Content } = Layout;

function Index(props) {
  return <Page>
    <Skeleton avatar paragraph={{ rows: 7 }} />
    <Button block type="primary"><Link to="/events/">Take Action!!!</Link></Button>
    <Skeleton avatar paragraph={{ rows: 7 }} />
  </Page>
}

function App() {
  return (
    <Router>


      <Route path="/" exact component={Index} />
      <Route path="/events/" component={EventsView} />
      <Route path="/event/" component={EventDetailView} />
      {/* <Route path="/petitions-detail/" component={Users} /> */}
    </Router>
  );
}

export default App;