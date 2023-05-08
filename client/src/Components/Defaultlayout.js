import React from 'react';

function Defaultlayout(props) {
  return (


    <div className = "layout">

        <div className="header">
            <div>   
                <h1 className='Travel Budget Planner'></h1>
            </div>
        </div>
        
  
        <div className="content">
            {props.children}
        </div>
</div>

  )
}

export default Defaultlayout;