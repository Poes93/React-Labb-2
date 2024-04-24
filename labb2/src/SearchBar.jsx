import React, { useState } from 'react';
import styled from 'styled-components';


const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // Vertically center content in the container
  height: 100vh; // Full view height to ensure centering works over the full page
  width: 100%; // Full width
  position: absolute; // Position absolutely within a relative parent, or relative to the viewport
  top: 0;
  left: 0;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 300px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
`;

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <SearchContainer>
      <Label>Enter a city to get the weather:</Label>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchContainer>
  );
}

export default SearchBar;
