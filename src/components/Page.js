import React from 'react';
import { PropTypes } from 'prop-types';
import { Layout } from 'antd';

import './Page.css';

const { Content } = Layout;

const Page = props => (
  <Layout>
    <Content>
      {props.children}
    </Content>
  </Layout>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
