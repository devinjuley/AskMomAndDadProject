const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');



router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const questions = await db.Question.findAll({ include: [db.Category, db.User] })
  const userId = req.session.auth.userId;
  res.render('questionFeed', { questions, userId })
}))

router.get('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const question = db.Question.build();
  const categories = await db.Category.findAll();
  res.render('newQuestion', {     // categories
    question,
    categories,
    csrfToken: req.csrfToken(),
  });
}))


router.post('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const { title, content, category } = req.body
  const userId = req.session.auth.userId;
  const question = await db.Question.create({ title, content, userId, categoryId: category });
  res.redirect('/questions');
}))

router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const userId = req.session.auth.userId;
  const question = await db.Question.findByPk(questionId, {
    include: [db.Category, db.User]
  })

  const answers = await db.Answer.findAll({
    where: {
      questionId: question.id
    },
    include: db.User
  })

  res.render('singleQuestion', { question, userId, answers, csrfToken: req.csrfToken() })
}))

const answerValidator = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an answer'),
]


router.post('/:id(\\d+)', requireAuth, csrfProtection, answerValidator, asyncHandler(async (req, res) => {
  const { content } = req.body;
  const userId = req.session.auth.userId;
  const questionId = parseInt(req.params.id, 10);
  const answer = await db.Answer.build({ content, userId, questionId })
  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    await answer.save()
    res.redirect(`/questions/${questionId}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('singleQuestion', { csrfToken: req.csrfToken, errors, content })
  }


}))

module.exports = router;
