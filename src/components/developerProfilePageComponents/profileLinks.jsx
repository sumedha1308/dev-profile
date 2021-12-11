/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import GithubLogo from '../../resources/github.png';
import LinkedinLogo from '../../resources/linkedin.png';
import CodechefLogo from '../../resources/codechef.png';
import HackerrankLogo from '../../resources/hackerrank.png';
import TwitterLogo from '../../resources/twitter.png';
import MediumLogo from '../../resources/medium.png';
import EmailLogo from '../../resources/email-24px.svg';

const ProfileLinks = ({ github, linkedin, codechef, twitter, medium, hackerrank, email }) => (
  <div className="dev-profile-links">
    {github && (
      <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
        <img src={GithubLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
    {hackerrank && (
      <a
        href={`https://www.hackerrank.com/${hackerrank}`}
        target="_blank"
        rel="noreferrer"
        className="dev-profile-individual-link"
      >
        <img src={HackerrankLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
    {codechef && (
      <a
        href={`https://www.codechef.com/users/${codechef}`}
        target="_blank"
        rel="noreferrer"
        className="dev-profile-individual-link"
      >
        <img src={CodechefLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
    {linkedin && (
      <a
        href={`https://www.linkedin.com/in/${linkedin}`}
        target="_blank"
        rel="noreferrer"
        className="dev-profile-individual-link"
      >
        <img src={LinkedinLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
    {medium && (
      <a
        href={`https://medium.com/@${medium}`}
        target="_blank"
        rel="noreferrer"
        className="dev-profile-individual-link"
      >
        <img src={MediumLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
    {twitter && (
      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noreferrer"
        className="dev-profile-individual-link"
      >
        <img src={TwitterLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}

    {email && (
      <a href={`mailto:${email}`} target="_blank" rel="noreferrer" className="dev-profile-individual-link">
        <img src={EmailLogo} height="30px" width="30px" alt="user avatar" />
      </a>
    )}
  </div>
);

export default ProfileLinks;
