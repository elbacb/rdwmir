const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const users = require('./users/router');
const tweets = require('./tweets/router');
const weather = require('./weather/router');

const { config } = require('./../config');

const router = express.Router();
const accessLogDir = config.log.access;
const logStream = fs.createWriteStream(path.join(__dirname, accessLogDir), {
  flags: 'a',
});

router.use(morgan('combined', { stream: logStream }));
router.use('/users', users);
router.use('/tweets', tweets);
router.use('/weather', weather);

module.exports = router;
