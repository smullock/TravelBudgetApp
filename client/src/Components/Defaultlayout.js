import React from 'react';

function Defaultlayout(props) {
  return (
    <div className="layout">
      <div className="header">
        <div>
          <h1 className='Travel Budget Planner'></h1>
        </div>
      </div>
      <div className="content flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">My Trip to Europe  - Budget </h4>
            {props.children}
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Defaultlayout;
