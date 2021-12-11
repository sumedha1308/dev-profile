/* eslint-disable no-console */
const express = require('express');
const developers = require('./developers');
const app = express();
const port = process.env.PORT || 3000;
app.use('/', express.static('public'));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

const router = express.Router();

router.use('/developers', developers);

module.exports = router;
