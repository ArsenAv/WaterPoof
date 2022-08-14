import React from "react";

const mainBox = {
 width: '15%',
 fontWeight: '700',
 position: 'absolute',
 background: 'wheat',
 borderRadius: '10px',
 marginTop: '40px',
 top: '20px',
 paddingBottom: '40px',
 display: 'block',
};
const elemStyle = {
    textAlign: 'center',
    paddingTop: '15px',
    textTransform: 'capitalize',
    cursor: 'pointer',
    '&:hover': {background: 'white'},
};


function SideBar (props) {
  const {categories, getCategoryId} = props;

  return (
    <div style={mainBox}>
        {categories.map((item, index) => {
           return <div key = {item.id} style ={elemStyle} onClick = {() => getCategoryId(item.id)}>{item.name}</div>
        })}
    </div>
  );
}

export default SideBar;
