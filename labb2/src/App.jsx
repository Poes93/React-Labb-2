import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import WeatherDetails from './WeatherDetails';
import ErrorModal from './ErrorModal';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding-top: 20px; // Padding at the top of the container
  position: ${({ hasContent }) => hasContent ? 'static' : 'absolute'};
  top: 50%;
  left: 50%;
  transform: ${({ hasContent }) => hasContent ? 'none' : 'translate(-50%, -50%)'};
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute; // Keep it absolute to allow precise positioning
  top: ${({ hasContent }) => hasContent ? '45%' : '30%'}; // Start at 50%, move to 30% when there is content
  left: 50%;
  transform: translate(-50%, -50%); // Center horizontally and adjust for top offset
  transition: top 0.3s ease; // Smooth transition for the top property
  z-index: 1000; // High z-index to keep it on top of other content
`;


const WeatherResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px; // Spacing between each result
  margin-top: 100px; // Adjust this value based on the actual height of your SearchContainer
`;

function App() {
  const [weatherHistory, setWeatherHistory] = useState([]);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const fetchWeather = async (city) => {
    const apiKey = '45ac69a2f67f667786b0e32b654d8303';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherHistory(prevHistory => [response.data, ...prevHistory].slice(0, 10));
      setError('');
      setShowModal(false);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        setShowModal(true);
      } else {
        setError('Failed to fetch weather data. Please check your network connection.');
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  const hasContent = weatherHistory.length > 0;

  return (
    <Container>
      <SearchContainer hasContent={hasContent}>
        <SearchBar onSearch={fetchWeather} hasContent={hasContent} />
      </SearchContainer>
      {showModal && <ErrorModal message={error} onClose={handleCloseModal} />}
      <WeatherResultsContainer>
        {weatherHistory.map((weather, index) => (
          <div key={weather.id || index}>
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
        ))}
      </WeatherResultsContainer>
    </Container>
  );
}

export default App;
