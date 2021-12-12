/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Header from '../headerImage/HeaderImage';
import SearchBox from '../searchBox/SearchBox';
import AvailableDevelopers from '../availableDevelopers/AvailableDevelopers';
import CouldNotFindLookingFor from '../couldNotFindLookingFor/CouldNotFindLookingFor';
import AddDeveloperInfoButton from '../addDeveloperInfoButton/AddDeveloperInfoButton';
import FormAddDevInfoField from '../formAddDevInfoField/FormAddDevInfoField';
import Footer from '../footer/Footer';
import ExploreDevProfile from '../exploreDevProfile/ExploreDevProfiles';

class DevProfileHomePage extends React.Component {
  state = {
    headerText: 'The Developer Repository',
    developers: [],
    searchText: '',
    showModal: false,
  };

  componentDidMount() {
    this.fetchAllDevelopers();
  }

  fetchAllDevelopers = () => {
    fetch(`/api/developers`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ developers: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  setSearchText = (inputValue) => {
    this.setState({
      searchText: inputValue,
    });
  };

  setShowModal = (value) => {
    this.setState({
      showModal: value,
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Header headTitle={this.state.headerText} />
          <ExploreDevProfile />
        </div>

        {this.state.developers.length > 0}
        {this.state.developers.length > 0 ? (
          <div>
            <SearchBox onInputChange={this.setSearchText} />
            <AvailableDevelopers developers={this.state.developers} searchInput={this.state.searchText} />
            <CouldNotFindLookingFor />
          </div>
        ) : (
          <div className="no-dev-added-yet"> No developers added yet </div>
        )}
        <AddDeveloperInfoButton onButtonClick={this.setShowModal} />
        {this.state.showModal && (
          <FormAddDevInfoField onModalButtonClick={this.setShowModal} fetchAllDevelopers={this.fetchAllDevelopers} />
        )}
        <Footer />
      </div>
    );
  }
}

export default DevProfileHomePage;
