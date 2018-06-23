import React from 'react';
import Content from './Content';
import SideBar from './SideBar';
import './style.css';

const Home = () => (
<div className="mw9 center ph2-ns">
  <div className="cf ph2-ns">
      <Content className="fl w-100 w-70-ns" />
      <SideBar className="fl w-100 w-30-ns" />
  </div>
</div>
);

export default Home;