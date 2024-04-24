import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';
import ErrorDisplay from './ErrorDisplay';
import axios from 'axios';

const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.span`
  color: #888;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = '45ac69a2f67f667786b0e32b654d8303'; // Be sure to secure your API keys
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to fetch weather data. Please check your network connection.');
      }
      setWeather(null);
    }
  };

  return (
    <Container>
      <Root>
        {/* Content can be placed here if needed, otherwise remove or modify this <Root> component */}
      </Root>
      <SearchBar onSearch={fetchWeather} />
      {error && <ErrorDisplay message={error} />}
      {weather && <WeatherCard weather={weather} />}
      {weather && <WeatherDetails weather={weather} />}
    </Container>
  );
}

export default App;
