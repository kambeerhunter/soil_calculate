import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavMenu = () => (
  <nav>
    <Link
      to="/"
      className="nav-link"
    >
      Mainpage
    </Link>

    <Link
      to="/statistics"
      className="nav-link"
    >
      Statistics
    </Link>

    <Link
      to="/accelerogram"
      className="nav-link"
    >
      Accelerogram
    </Link>
  </nav>
);
