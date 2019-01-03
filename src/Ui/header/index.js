import React from 'react';
import PropTypes from 'prop-types';
import { NavMenu } from '../nav-menu';
import './style.css';

export const Header = ({ pageTitle }) => (
  <header>
    <h2>{ pageTitle }</h2>
    <NavMenu />
    <hr />
  </header>
);

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}