import React from "react";
const mainBox = {
    width: '100%',
    height: '100%',
};
const gridBox = {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
    backgroundColor: 'antiquewhite',
    padding: '10px',
}
const gridel = {
    backgroundColor: 'burlywood',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    padding: '10px',
    fontSize: '30px',
    width: '250px',
    height: '250px',
    margin: '0px auto',
    marginTop: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    '@media (maxWidth: 300px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: '150px',
        backgroundColor: 'red',
        height: '150px',
    },
}
const buttonBox = {
   width: '100%',
   textAlign: 'center',
   backgroundColor: 'burlywood',
}
const buttonStyles = {
    borderRadius: '10px',
    backgroundColor: 'antiquewhite',
    width: '100px',
    height: '55px',
    cursor: 'pointer',
    color: 'black',
 }

function Content (props) {
  const {catImages, getMore} = props;
  return (
    <div style={mainBox}>
       <div style = {gridBox}>
            {catImages.length > 0 && catImages.map((item, index) => {
                return <div style = {gridel} key = {item.url} className = 'item'>
                    <img style={{width: '100%', height: '100%'}} alt = 'img' src = {item.url}></img>
                </div>
            })}
       </div>
       <div style = {buttonBox}>
         <button style = {buttonStyles} onClick = {() => getMore()}>More</button>
       </div>
    </div>
  );
}

export default Content;
