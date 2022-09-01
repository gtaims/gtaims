import React from 'react';
import {  Link } from "react-router-dom";


export const navbar = (props) => {
  return (
    
    <div>
      
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/officers">Officers</Link>
    </li>
  </div>
  )
}
