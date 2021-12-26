import React from 'react';
import pt from 'prop-types';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: pt.node.isRequired,
};

export default Layout;
