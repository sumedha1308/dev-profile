/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/headerImage/HeaderImage';
import ExploreDevProfile from './components/exploreDevProfile/ExploreDevProfiles';
import SearchBox from './components/searchBox/SearchBox';
import DevIndividualResult from './components/devIndivisualResult/devIndivisualResult';
import CouldNotFindLookingFor from './components/couldNotFindLookingFor/CouldNotFindLookingFor';
import AddDeveloperInfoButton from './components/addDeveloperInfoButton/AddDeveloperInfoButton';
import Footer from './components/footer/Footer';

const headerText = 'The Developer Repository';
const key = 'sumedha1308';
const githubId = 'sumedha1308';
const avatarUrl = 'https://avatars.githubusercontent.com/u/25945916?v=4';

const element = (
  <div>
    <Header headTitle={headerText} />
    <ExploreDevProfile />
    <SearchBox />
    <DevIndividualResult key={key} githubId={githubId} avatarUrl={avatarUrl} />
    <CouldNotFindLookingFor />
    <AddDeveloperInfoButton onButtonClick={true} />
    <Footer />
  </div>
);
ReactDOM.render(element, document.getElementById('root'));
