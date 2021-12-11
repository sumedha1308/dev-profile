/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/headerImage/HeaderImage';
// import ExploreDevProfile from './components/exploreDevProfile/ExploreDevProfiles';
// import SearchBox from './components/searchBox/SearchBox';
// import DevIndividualResult from './components/devIndivisualResult/devIndivisualResult';
// import CouldNotFindLookingFor from './components/couldNotFindLookingFor/CouldNotFindLookingFor';
// import AddDeveloperInfoButton from './components/addDeveloperInfoButton/AddDeveloperInfoButton';
// import Footer from './components/footer/Footer';
// import FormFieldDevInfo from './components/formFieldDevInfo/FormFieldDevInfo';
// import GithubLogo from './resources/github.png';

// const headerText = 'The Developer Repository';
// const exploreDevProfile = 'Explore developer profile';
// const key = 'sumedha1308';
// const githubId = 'sumedha1308';
// const avatarUrl = 'https://avatars.githubusercontent.com/u/25945916?v=4';

// const element = (
//   <div>
//     <Header headTitle={headerText} />
//     <ExploreDevProfile headLineAfterImage={exploreDevProfile} />
//     <SearchBox />
//     <DevIndividualResult key={key} githubId={githubId} avatarUrl={avatarUrl} />
//     <CouldNotFindLookingFor />
//     <AddDeveloperInfoButton onButtonClick={true} />
//     <FormFieldDevInfo src={GithubLogo} label="Github*" name="githubId" onChange={'sumedha'} />
//     <Footer />
//   </div>
// );
import App from './components/app/App';

ReactDOM.render(<App />, document.getElementById('root'));
