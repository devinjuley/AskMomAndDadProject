const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');


router.get('/', requireAuth, (req,res) => {
  res.render('questionFeed')
})

router.get('/new', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const question = db.Question.build();
  const categories = await db.Category.findAll();
  res.render('newQuestion', {     // categories
    question,
    categories,
    csrfToken: req.csrfToken(),
  });
}))

router.post('/')

module.exports = router;
