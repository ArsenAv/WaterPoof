import React from "react";
import {FiAlignJustify} from 'react-icons/fi';

const mainBar = {
 width: '100%',
 height: '60px',
 background: 'burlywood',
 padding: 0,
 margin: 0,
 display: 'block',
};

const contextBox = {
   paddingTop: '16px',
   display: 'flex',
   paddingLeft: '25px',
 };
const barcontext = {
   fontSize: '16px',
   textAlign: 'center',
   userSelect: 'none',
   display: 'inline-block',
   paddingLeft: '25px',
};
const IconStyles = {
    width: '25px',
    height: '25px',
    textAlign: 'start',
    display: 'inline-block',
 };
 const IconBox = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
 };


function PageBar(props) {
  const {openSide} = props;
  return (
    <div style={mainBar}>
        <div style ={contextBox} >
            <div onClick = {() => openSide()} style = {IconBox}>
              <FiAlignJustify style = {IconStyles}/>
            </div>
            <div style = {barcontext}>
                Choose Your Cat
            </div>
            </div>
    </div>
  );
}

export default PageBar;

