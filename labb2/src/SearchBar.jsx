import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ hasContent }) => (hasContent ? '0' : '20vh')}; // Moves down from the top only when there are no results
  transition: margin-top 0.3s ease;
  width: 100%;
  max-width: 500px; // Set a max width for the search bar or adjust as necessary
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px; // Adjust the width as necessary
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

function SearchBar({ onSearch, hasContent }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <SearchContainer hasContent={hasContent}>
      <Label>Enter a city or country to get the weather:</Label>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city or country"
        onKeyPress={(event) => {
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
