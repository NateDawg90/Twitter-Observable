import React from 'react';

const clearButton = props => (
  <div className='flex'>
    <div className='flex items-center ph3 pv2  bg-light-red white br2 pointer f6 f4-ns b shadow-1 dim '
    onClick={props.clickHandler}>
      <div>Clear List</div>
      <i className="fas fa-snowplow ml1 ml2-ns"></i>  
    </div>
  </div>
)

export default clearButton;