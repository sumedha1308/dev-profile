/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import DevIndividualResult from '../devIndivisualResult/devIndivisualResult';
import './availableDevelopers.css';

const AvailableDevelopers = ({ developers, searchInput }) => {
  const availableDevelopers = developers
    .filter((devprofileData) => devprofileData.id.toLowerCase().includes(searchInput.toLowerCase()))
    .map((devprofileData) => (
      <DevIndividualResult
        key={devprofileData.id}
        githubId={devprofileData.id}
        avatarUrl={devprofileData.avatar_url}
      ></DevIndividualResult>
    ));
  return (
    <div className="developers-container">
      <section className="devsection">{availableDevelopers}</section>
      <hr className="horizontal-line-developers"></hr>
    </div>
  );
};

export default AvailableDevelopers;
