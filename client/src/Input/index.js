import React from 'react';
import './style.css';

const Input = ({children, className, ...props}) => (
  <input className={className} {...props}>
    {children}
  </input>
);

export default Input;