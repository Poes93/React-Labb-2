import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function WeatherCard({ weather }) {
  return (
    <WeatherContainer>
      <h2>{weather.name}</h2>
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].description}</p>
    </WeatherContainer>
  );
}

export default WeatherCard;
