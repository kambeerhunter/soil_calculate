import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header';

export const Body = ({ children, pageTitle }) => (
  <div className="container">
    <Header
      pageTitle={pageTitle}
    />

    {children}
  </div>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  pageTitle: PropTypes.string.isRequired,
};
