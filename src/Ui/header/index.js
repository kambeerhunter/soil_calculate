import React from 'react';
import PropTypes from 'prop-types';
import { NavMenu } from '../nav-menu';

export const Header = ({ pageTitle }) => (
  <header className="text-center pt-3">
    <h2>{ pageTitle }</h2>
    <NavMenu />
    <hr />
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
