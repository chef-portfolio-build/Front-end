import React, { useState } from 'react';
import Expand from 'react-expand-animated';

const Expanded = props => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen);
  };


  return (
    <div>
      <img src={props.image} onClick={toggle} alt="img" />
      <Expand open={isOpen}>
        <div style={{ width: '500px', height: '250px', color: 'red' }}>
          <h3>{props.description}</h3>
          <p>{props.instructions}</p>
        </div>
      </Expand>
    </div>
  );

}

export default Expanded;