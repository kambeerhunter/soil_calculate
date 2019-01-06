import React from 'react';
import { Link } from 'react-router-dom';

const routes = {
  Mainpage: '/',
  Statistics: '/statistics',
  Accelerogram: '/accelerogram',
};

export const NavMenu = () => (
  <nav>
    <ul className="nav d-flex justify-content-center">
      {
        Object.keys(routes).map(item => (
          <li
            key={item}
            className="nav-item"
          >
            <Link
              to={routes[item]}
              className="nav-link"
            >
              {item}
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
);
