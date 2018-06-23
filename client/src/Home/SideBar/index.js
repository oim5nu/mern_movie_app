import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import './style.css';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {FaSearch} from 'react-icons/lib/fa';

const SideBarSearch = () => (
  <div className="pa3-l">
    <form className="mw7 center pa4 ">
      <fieldset className="cf bn ma0 pa0">
        <div className="cf">
          <Input 
            className="f6 f5-l input-reset ba b--black-10 fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
            placeholder="Please type in keyword" 
            type="text" 
            name="search-keyword" 
            value="" 
            id="search-keyword" 
          />
          <Button className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns">           
            <FaSearch />
          </Button>
        </div>
      </fieldset>
    </form>     
  </div>    
);

  /*<div class="mw9 center ph3-ns">
    <div class="cf ph2-ns">
      <div class="fl w-100 w-third-ns pa2">
        <div class="outline bg-white pv4"></div>
      </div>
      <div class="fl w-100 w-third-ns pa2">
        <div class="outline bg-white pv4"></div>
      </div>
      <div class="fl w-100 w-third-ns pa2">
        <div class="outline bg-white pv4"></div>
      </div>
    </div>
</div>*/
const SideBarCategory = () => (
<div className="pa3-l">
<article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
  <div className="pa3 ph2 tc-l bt b--black-10">
      <Button 
        className="no-underline near-white bg-animate bg-purple hover-bg-light-purple inline-flex items-center h2 ma2 tc br2 pa2" >
        Action
      </Button>    
      <Button 
        className="no-underline near-white bg-animate bg-purple hover-bg-light-purple inline-flex items-center h2 ma2 tc br2 pa2" >
        Horror
      </Button>    
      <Button 
        className="no-underline near-white bg-animate bg-purple hover-bg-light-purple inline-flex items-center h2 ma2 tc br2 pa2" >
        Fiction
      </Button>    
      <Button 
        className="no-underline near-white bg-animate bg-purple hover-bg-light-purple inline-flex items-center h2 ma2 tc br2 pa2" >
        Passion
      </Button>    
  </div>
</article>
</div>
);

const SideBar = ({className}) => (
  <section className={`${className} br3 hidden mv4`}>
    <SideBarSearch />
    <SideBarCategory />

  </section>
);

export default SideBar;