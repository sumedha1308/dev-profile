/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './formAddDevInfoField.css';
import GithubLogo from '../../resources/github.png';
import LinkedinLogo from '../../resources/linkedin.png';
import CodechefLogo from '../../resources/codechef.png';
import HackerrankLogo from '../../resources/hackerrank.png';
import TwitterLogo from '../../resources/twitter.png';
import MediumLogo from '../../resources/medium.png';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/extensions
import FormFieldDevInfo from '../formFieldDevInfo/FormFieldDevInfo';

class FormAddDevInfoField extends React.Component {
  state = {
    githubId: '',
    linkedinId: '',
    codechefId: '',
    hackerrankId: '',
    twitterId: '',
    mediumId: '',
    errorMessage: null,
  };

  submitHandlerButton = (event) => {
    event.preventDefault();
    if (this.state.githubId.trim() === '') {
      this.setState({ errorMessage: 'GitHub user ID is mandatory.', loading: false });
    } else {
      this.setState({ loading: true });
      this.formPostAddDevInfo();
    }
  };

  formPostAddDevInfo = () => {
    fetch(`/api/developers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        github_id: this.state.githubId,
        linkedin_id: this.state.linkedinId,
        codechef_id: this.state.codechefId,
        hackerrank_id: this.state.hackerrankId,
        twitter_id: this.state.twitterId,
        medium_id: this.state.mediumId,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          this.props.fetchAllDevelopers();
          this.closeAddDevInfoModal();
        } else if (res.status === 400) {
          throw new Error('Invalid GitHub user ID. Try again.');
        } else {
          throw new Error('Unexpected Error - Please try again later.');
        }
      })
      .catch((e) => {
        this.setState({ errorMessage: e.message, loading: false });
      });
  };

  setDifferentDevProfileIds = (event) => {
    this.setState({ [event.target.name]: event.target.value, errorMessage: null });
  };

  closeAddDevInfoModal = () => {
    this.setState({
      githubId: '',
      linkedinId: '',
      codechefId: '',
      hackerrankId: '',
      twitterId: '',
      mediumId: '',
      errorMessage: null,
      // loading: false,
    });
    this.props.onModalButtonClick(false);
  };

  render() {
    return (
      <div className="formBackground">
        <div className="formContainer">
          <div className="title">
            <h1>Add Developer profile</h1>
          </div>
          <div className="body">
            <hr className="hrule-modal" />
            <form onSubmit={this.submitHandlerButton}>
              <FormFieldDevInfo
                src={GithubLogo}
                label="Github*"
                name="githubId"
                onChange={this.setDifferentDevProfileIds}
              />
              <FormFieldDevInfo
                src={LinkedinLogo}
                label="Linkedin"
                name="linkedinId"
                onChange={this.setDifferentDevProfileIds}
              />
              <FormFieldDevInfo
                src={CodechefLogo}
                label="Codechef"
                name="codechefId"
                onChange={this.setDifferentDevProfileIds}
              />
              <FormFieldDevInfo
                src={HackerrankLogo}
                label="Hackerrank"
                name="hackerrankId"
                onChange={this.setDifferentDevProfileIds}
              />
              <FormFieldDevInfo
                src={TwitterLogo}
                label="Twitter"
                name="twitterId"
                onChange={this.setDifferentDevProfileIds}
              />
              <FormFieldDevInfo
                src={MediumLogo}
                label="Medium"
                name="mediumId"
                onChange={this.setDifferentDevProfileIds}
              />
              <div className="error-div">{this.state.errorMessage}</div>
              <hr className="hrule-modal" />
              <div className="footer-form">
                <button onClick={this.closeAddDevInfoModal} className="cancel-Btn">
                  Cancel
                </button>
                <button className="submit-Btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormAddDevInfoField;
