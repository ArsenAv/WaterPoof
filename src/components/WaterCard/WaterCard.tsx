import React from "react";
import './index.css'

const WaterCard = ({waterData}) => {
    return (
        <div className='watterBox'>
           <div className='title'>{waterData?.name ? waterData.name : waterData.dt_txt}</div>
            <div className='temp'>{waterData.main && waterData.main.temp}°C</div>
            <div className='sky'>{waterData.weather && waterData.weather[0].description}</div>
        </div>
    );
};

export default WaterCard;