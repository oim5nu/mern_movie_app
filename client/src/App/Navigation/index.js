import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './style.css';

const Navigation = () => (
  <nav className="dt bg-near-white w-100 border-box pa3 ph5-ns">
    <div className="dtc v-mid w-20 tl">
      <Link className="dtc v-mid mid-gray link dim w-100" to={routes.HOME} >
        <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
      </Link>
    </div>
    <div className="dtc v-mid w-30 tl">
      <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to={routes.HOME}>Home</Link>
      <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to={routes.PROFILE} >Profile</Link>
      <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to={routes.ABOUT} >About</Link>
    </div>    
    <div className="dtc v-mid w-50 tr">
      <Link className="link dim dark-gray f6 f5-ns dib ml3 ml4-ns" to={routes.LOGIN} >Log In</Link>
      <Link className="link dim dark-gray f6 f5-ns dib ml3 ml4-ns" to={routes.REGISTER} >Register</Link>
    </div>
  </nav>
);

export default Navigation;