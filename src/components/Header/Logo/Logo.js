import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.css';
import logoImage from "../../../logo-hadithbd-white.png";

const Logo = () => (
  <div className="logoWrapper clearfix">
      <NavLink to="/">
          <img src={logoImage} alt="Hadith Logo"/>
      </NavLink>
  </div>
);

Logo.propTypes = {

};

export default Logo;
