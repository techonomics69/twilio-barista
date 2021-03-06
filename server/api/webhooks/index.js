const router = require('express').Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const parseBody = bodyParser.urlencoded({ extended: false });
const parseCookies = cookieParser({
  secret: process.env.PHONE_NUMBER_HASHING_SECRET || 'myamazingsecret',
});

router.post('/sync', parseBody, require('./sync').handler);
router.post(
  '/incoming',
  parseBody,
  parseCookies,
  require('./incoming').handler
);

module.exports = router;
