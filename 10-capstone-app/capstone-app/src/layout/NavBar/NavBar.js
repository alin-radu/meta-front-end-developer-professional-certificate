import { Link } from 'react-router-dom';

import Logo from 'assets/icons/Logo.svg';

import './NavBar.module.scss';

export const NavBar = () => (
  <header>
    <Link to="/" aria-label="Little Lemon Logo">
      <img src={Logo} alt="Little Lemon Logo" />
    </Link>
    <nav tabIndex="0">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  </header>
);
