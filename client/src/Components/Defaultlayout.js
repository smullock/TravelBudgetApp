import React from 'react';
import Auth from '../utils/auth';

function Defaultlayout(props) {

  return (
  
  <div className="layout">
  <div className="header d-flex justify-content-between align-items-center">
    <div>
      <h1 className="logo">Travel Budget Planner</h1>
    </div>
    
  </div>

  <div className="content">{props.children}</div>
</div>
  );
}

export default Defaultlayout;
