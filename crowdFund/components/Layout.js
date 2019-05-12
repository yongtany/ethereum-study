 import React from 'react';
 import Header from './Header';

 export default props => {
  return (
    <div>
      <Header />
        {props.children}
      <h1>Im a header</h1>
    </div>
  )
 };
