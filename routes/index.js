const express = require('express');
const router = express.Router();

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', csrfProtection, asyncHandler (async (req, res) =>  {
  const user = db.User.build();
  res.render('index', { title: 'Ask Mom and Dad', user,
  csrfToken: req.csrfToken() });
}));



module.exports = router;
