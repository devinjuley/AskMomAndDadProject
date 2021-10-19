const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');


router.get('/', requireAuth, asyncHandler (async(req,res) => {
  const questions = await db.Question.findAll({include: db.Category})
  console.log("this is questions!!!!!",questions)
  res.render('questionFeed', {questions})
}))

router.get('/new', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const question = db.Question.build();
  const categories = await db.Category.findAll();
  res.render('newQuestion', {     // categories
    question,
    categories,
    csrfToken: req.csrfToken(),
  });
}))


router.post('/new', requireAuth, csrfProtection, asyncHandler(async(req, res) => {
  const {title, content, category} = req.body
  console.log(req.body)
  const userId=req.session.auth.userId;
  const question = await db.Question.create({title, content, userId, categoryId:category});
  res.redirect('/questions');
}))

//const questions = await db.Question.findAll({include: ['User', 'Category']});
module.exports = router;
