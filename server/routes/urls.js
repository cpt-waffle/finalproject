const express = require('express');
const router = express.Router();

/* GET users listing. */

// fake database

const urlsDatabase = {
  BxnV6: 'www.reddit.com',
  Cr5f5: 'www.github.com',
}

router.get('/', (req, res ) => {
  res.json({urlsDatabase});
});

module.exports = router;
