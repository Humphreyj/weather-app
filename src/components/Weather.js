import React from 'react';

const Weather = (props) => {
    return (
    	<div className="weather">
    		{props.city && props.country ? <p className="weather-item">Location: {props.city}, {props.country}</p> : <p className="message">How's the weather?</p>}

    		{props.temp && <p className="weather-item">Temp: {props.temp} °F</p>}

    		{props.humidity && <p className="weather-item">Humidity: {props.humidity}%</p>}

    		{props.description && <p className="weather-item">Condition: {props.description}</p>}
			
			{props.windSpeed && <p className="weather-item">Wind Speed: {props.windSpeed} mph</p>}

    		{props.error && <p className="weather-item">{props.error}</p>}


    	</div>
        
    );
};


export default Weather;
