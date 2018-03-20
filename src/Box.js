import React from 'react';
import PropTypes from 'prop-types';
import "./Cardstyle.css";

const Box = (props) =>{
  let colorStyle = {

  };
  
  if(props.showing){
      colorStyle.backgroundColor = props.backgroundColor;
  }
  
  return (
      <div className="container" onClick={props.onClick} style={colorStyle}/>
      )
}

Box.propTypes = {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};


export default Box;