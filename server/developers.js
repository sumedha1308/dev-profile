/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const express = require('express');

const router = express.Router();
const axios = require('axios');

const devProfiles = [];

const getdevProfileData = () => devProfiles.map((data) => ({ id: data.id, avatar_url: data.avatar_url }));

const getRepoInfo = (responseRepoData) =>
  responseRepoData.map((data) => ({
    name: data.name,
    html_url: data.html_url,
    description: data.description,
    updated_at: data.updated_at,
  }));
router.get('/:id', (req, res) => {
  const devProfileId = req.params.id;
  // const foundDevProfile = devProfiles.find((devProfile) => devProfile.id === devProfileId);
  const foundDevProfile = devProfiles.filter((devProfile) => devProfile.id === devProfileId);
  if (foundDevProfile) {
    res.status(201).send(foundDevProfile);
  } else {
    res.status(404).send(`No profile found for the developer with id ${devProfileId}`);
  }
});
router.get('/', (req, res) => {
  if (getdevProfileData().length > 0) {
    res.status(200).send(getdevProfileData());
  } else {
    res.status(404).send('No developers added yet');
  }
});
router.post('/', (req, res) => {
  const devProfileData = req.body;
  const githubId = devProfileData.github_id;
  const userPromise = axios(`https://api.github.com/users/${githubId}`);
  const repoPromise = axios(`https://api.github.com/users/${githubId}/repos`);
  const devProfileAlreadyExist = devProfiles.find((dev) => dev.id === githubId);
  let devProfileExistsFlag = false;
  if (devProfileAlreadyExist !== undefined) {
    devProfileExistsFlag = true;
  }

  if (!devProfileExistsFlag) {
    Promise.all([userPromise, repoPromise])
      .then((response) => {
        const userInfo = response[0].data;
        const repoInfo = response[1].data;
        const repoArray = getRepoInfo(repoInfo);
        devProfiles.push({
          id: githubId,
          avatar_url: userInfo.avatar_url,
          name: userInfo.name,
          company: userInfo.company,
          blog: userInfo.blog,
          location: userInfo.location,
          email: userInfo.email,
          bio: userInfo.bio,
          ...devProfileData,
          repos: repoArray,
        });
        res.status(201).send({ id: githubId });
      })
      .catch((error) => {
        res.status(400).send(`Unexpected error -> ${error}`);
      });
  } else {
    // Todo if dev profile already exists then inform developer
    res.status(201).send({ id: githubId });
  }
});

module.exports = router;
