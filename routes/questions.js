const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth');


router.get('/', (req,res) => {
  res.render('questionFeed')
})

router.get('/new', csrfProtection, asyncHandler(async(req, res) => {
  const question = db.Question.build();
  res.render('newQuestion', {     // categories
    question,
    csrfToken: req.csrfToken(),
  });
}))

router.post('/')

module.exports = router;
