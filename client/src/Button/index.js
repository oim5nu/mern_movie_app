import React from 'react';
import './style.css';

const Button = ({
  children,
  className,
  ...props
}) => (
  <button
    className={className}
    {...props}
  >
  {children}
  </button>  
);

export default Button;