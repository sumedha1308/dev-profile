/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './addDeveloperInfoButton.css';

const AddDeveloperInfoButton = ({ onButtonClick }) => (
  <div className="question-add-dev-container">
    <input
      type="button"
      value="Add Developer Info"
      className="add-dev-btn"
      onClick={() => {
        onButtonClick(true);
      }}
    ></input>
  </div>
);

export default AddDeveloperInfoButton;
