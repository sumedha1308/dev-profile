// eslint-disable-next-line no-unused-vars
import React from 'react';
import './searchBox.css';
import searchlogo from '../../resources/search-24px.svg';

const SearchBox = ({ onInputChange }) => (
  <div className="search-container">
    <div className="search-bar">
      <input
        onChange={(event) => onInputChange(event.target.value)}
        placeholder="Search for username"
        className="search-input"
      />
      <img src={searchlogo} alt="search logo" className="search-logo"></img>
    </div>
  </div>
);
export default SearchBox;
