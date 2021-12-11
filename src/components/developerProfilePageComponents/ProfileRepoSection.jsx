/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import Repositories from './Repositories';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ProfileRepoSection = ({ repos }) => {
  const formatDate = (updatedDate) => {
    const date = new Date(updatedDate);
    return `Updated on ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };
  console.log(typeof repos);

  return (
    <section className="devprofile-repo-section">
      <div className="github-repo-heading">GitHub Repositories</div>
      {repos
        .sort((repo1, repo2) => new Date(repo2.updated_at) - new Date(repo1.updatedat))
        .map((repo) => (
          <div key={repo.name}>
            <hr className="hrule-r" />
            <Repositories
              name={repo.name}
              htmlUrl={repo.html_url}
              updatedAt={formatDate(repo.updated_at)}
              description={repo.description}
            />
          </div>
        ))}
    </section>
  );
};

export default ProfileRepoSection;
