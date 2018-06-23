import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './style.css';

const Footer = () => (
  <footer className="bg-near-white white-80 pv5 pv6-1 ph4">
    <p className="f6"><span className="dib mr4 mr5-ns">@</span>
      <Link className="link black-80 hover-light-purple" to={routes.TERMS} >Terms</Link> /
      <Link className="link black-80 hover-light-purple" to={routes.PRIVACY} >Privacy</Link> /
      <Link className="link black-80 hover-light-purple" to={"#"} >oim5nu@gmail.com</Link> 
    </p>
  </footer>
);

export default Footer;