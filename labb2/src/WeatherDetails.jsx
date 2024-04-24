import React from 'react';
import styled from 'styled-components';

const Details = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

function WeatherDetails({ weather }) {
  return (
    <Details>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>
    </Details>
  );
}

export default WeatherDetails;
