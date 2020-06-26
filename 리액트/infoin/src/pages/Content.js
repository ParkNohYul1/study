import React from 'react';
import Header from '../components/common/Header';

const Content = ({ location, match }) => {
  return <Header location={location} match={match} />;
};

export default Content;
