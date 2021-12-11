/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import './profilePage.css';
import ProfilePageNavBar from './ProfilePageNavBar';
import defaultAvatar from '../../resources/account_circle-24px.svg';
import Footer from '../footer/Footer';
import ProfilePageTopSection from './ProfilePageTopSection';
import ProfileRepoSection from './ProfileRepoSection';

class ProfilePage extends React.Component {
  state = {
    developersData: [],
    repos: [],
  };

  fetchDevelopersData(id) {
    fetch(`/api/developers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ developersData: data[0], repos: data[0].repos });
      });
  }

  componentDidMount() {
    this.fetchDevelopersData(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <ProfilePageNavBar />
        <ProfilePageTopSection
          defaultAvatar={
            this.state.developersData.avatar_url !== '' ? this.state.developersData.avatar_url : defaultAvatar
          }
          devName={this.state.developersData.name}
          bio={this.state.developersData.bio}
          github={this.state.developersData.github_id}
          linkedin={this.state.developersData.linkedin_id}
          codechef={this.state.developersData.codechef_id}
          twitter={this.state.developersData.twitter_id}
          medium={this.state.developersData.medium_id}
          hackerrank={this.state.developersData.hackerrank_id}
          email={this.state.developersData.email}
          location={this.state.developersData.location}
          company={this.state.developersData.company}
          blog={this.state.developersData.blog}
        />
        {this.state.repos.length > 0 ? (
          <ProfileRepoSection repos={this.state.repos} />
        ) : (
          <div className="no-repos-found">No Github repos Found 👀</div>
        )}
        <Footer />
      </>
    );
  }
}
export default ProfilePage;
