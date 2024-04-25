import React from 'react';
import styled from 'styled-components';


const Details = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  position: center;
  text-align: center;
  vertical-align: middle;
  display: contents;
  justify-content: center;
  left: 40%;
`;

function WeatherDetails({ weather }) {
  return (
    <Details>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
    </Details>
  );
}

export default WeatherDetails;
