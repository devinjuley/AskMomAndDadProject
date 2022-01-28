const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');
const { Op } = require('sequelize');


// homepage for questionFeed
router.get('/', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const questions = await db.Question.findAll({
    include: [db.Category, db.User],
    order: [['id', 'DESC']]
  })
  const userId = req.session.auth.userId;
  res.render('questionFeed', { questions, userId, csrfToken: req.csrfToken() })
}))


router.get('/category/:categoryId', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const questions = await db.Question.findAll({
    where: {
      categoryId: req.params.categoryId
    },
    include: [db.Category, db.User]
  })
  const userId = req.session.auth.userId;
  res.render('questionFeed', { questions, userId, csrfToken: req.csrfToken() })
}))


// SEARCH FUNCTIONALITY
router.post('/', requireAuth, asyncHandler(async (req, res) => {
  const { term } = req.body
  console.log('0000000000000000000 =', req.body)
  const userId = req.session.auth.userId;
  const questions = await db.Question.findAll({
    where: {
      title: {
        [Op.iLike]: `%${term}%`
      },
    },

    include: [db.Category, db.User]
  })

  // if(questions.length) {
  //   questions;
  // } else {
  //   questions = "No search results"
  // }
  // console.log("questionssssssssss", questions)

  res.render('questionFeed', { questions, userId })
}))

// getting the form for adding a new question
router.get('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const question = db.Question.build();
  const categories = await db.Category.findAll();
  res.render('newQuestion', {     // categories
    question,
    categories,
    csrfToken: req.csrfToken(),
  });
}))

// posting the form for adding a new question
router.post('/new', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const { title, content, imageURL, category } = req.body
  const userId = req.session.auth.userId;
  const question = await db.Question.create({ title, content, imageURL, userId, categoryId: category });
  res.redirect('/questions');
}))

// route to just get a single question and all its answers
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
    include: db.User,
    order: [['createdAt', 'DESC']]
  })

  res.render('singleQuestion', { question, userId, answers, csrfToken: req.csrfToken() })
}))

const answerValidator = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an answer'),
]

// adding an answer on a question
router.post('/:id(\\d+)', requireAuth, csrfProtection, answerValidator, asyncHandler(async (req, res) => {
  const { content } = req.body;
  const userId = req.session.auth.userId;
  const questionId = parseInt(req.params.id, 10);
  const answer = await db.Answer.build({ content, userId, questionId })

  const question = await db.Question.findByPk(questionId, {
    include: [db.Category, db.User]
  })

  const answers = await db.Answer.findAll({
    where: {
      questionId: question.id
    },
    include: db.User
  })

  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    await answer.save()
    res.redirect(`/questions/${questionId}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('singleQuestion', { csrfToken: req.csrfToken(), question, answers, errors, content, user: req.body })
  }
}))

// get form for editing a question on its own question page like http://localhost:8080/questions/26
router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
  const question = await db.Question.findByPk(req.params.id, {
    include: db.Category
  });
  const categories = await db.Category.findAll();
  // console.log(question.Category)
  res.render('edit-question', { csrfToken: req.csrfToken(), question, categories })
}))

//form request to delete a question on its own page like http://localhost:8080/questions/26
router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
  const questionId = req.params.id;
  console.log("this is questionId", questionId)
  const question = await db.Question.findByPk(questionId)
  await question.destroy();
  res.redirect('/questions')
}))

//ajax request to delete a question from questionFeed (home)
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const questionId = req.params.id
  const question = await db.Question.findByPk(questionId)
  if (question) {
    await question.destroy()
    res.json({ message: "Success" })
  } else {
    res.json({ message: "Failure" })
  }
}))

//get edit question form from the questionFeed
router.get('/:id(\\d+)/edit', csrfProtection, async (req, res) => {
  const question = await db.Question.findByPk(req.params.id, {
    include: db.Category
  });
  const categories = await db.Category.findAll();
  // console.log(question.Category)
  res.render('edit-question', { csrfToken: req.csrfToken(), question, categories })
})

//edit question form from the questionFeed
router.post('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
  const questionId = parseInt(req.params.id, 10);
  const questionToUpdate = await db.Question.findByPk(questionId, {
    include: db.Category
  });

  // console.log(req.body)

  const { title, content, imageURL, category } = req.body
  // const categoryName = await db.Category.findByPk(category);

  // categoryId matches the model on question.js, so that's why we had to do : b/c
  // the category doesn't match the category field in req.body which is from pug file
  // for edit-question.pug

  const question = { title, content, imageURL, categoryId: category }
  await questionToUpdate.update(question);
  res.redirect(`/questions/${questionId}`);
}))





module.exports = router;
