import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllWaterData, getWaterData} from "../redux/WaterSlice";
import WaterCard from "../components/WaterCard/WaterCard";
import Navbar from "../components/Navbar/Navbar";
import type { AppDispatch, RootState } from '../redux/store'
import './index.css'

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();

  const waterData: object = useSelector((state:RootState) => state.water.waterData);
  const list: Array<object> = useSelector((state:RootState) => state.water.allLocationsData);

  useEffect(() => {
      dispatch(getWaterData(''))
      dispatch(getAllWaterData())
  },[])

  return (
    <div>
        <Navbar/>
        <WaterCard waterData={waterData}/>
        <div className='listBox'>
            {list.length && list.map(item => {
                return <WaterCard waterData={item}/>
            })}
        </div>

    </div>
  );
}

export default MainPage;
