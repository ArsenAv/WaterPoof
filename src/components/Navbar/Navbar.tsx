import React from 'react';
import './index.css'
import {useDispatch} from "react-redux";
import type { AppDispatch } from '../../redux/store'
import {getWaterData} from "../../redux/WaterSlice";
const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const handleChange = (e):void => {
        const searchPhrase = e.target.value.trim()
        setTimeout(() => {
            dispatch(getWaterData(searchPhrase))
        }, 3000);
    }
    return (
        <div className='main'>
           <input type='text' onChange={(e) => handleChange(e)}/>
        </div>
    );
};

export default Navbar;