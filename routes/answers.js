const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');



router.get('/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const answerId = parseInt(req.params.id, 10);
  const userId = req.session.auth.userId;
  const answer = await db.Answer.findByPk(answerId, {
    include: [db.User, db.Question]
  })
  const comments = await db.Comment.findAll({
    where: {
      answerId: answer.id
    },
    include: db.User
  })
  res.render('singleAnswer', { answer, userId, comments, csrfToken: req.csrfToken() })
}))

const commentValidator = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a comment'),
]
//create a comment
router.post('/:id(\\d+)', requireAuth, csrfProtection, commentValidator, asyncHandler(async (req, res) => {
  const { content } = req.body;
  console.log(req.params)
  const validatorErrors = validationResult(req)
  const userId = req.session.auth.userId;
  const answerId = parseInt(req.params.id, 10);
  const comment = await db.Comment.build({ content, userId, answerId })

  const answer = await db.Answer.findByPk(answerId, {
    include: [db.User, db.Question]
  })
  const comments = await db.Comment.findAll({
    where: {
      answerId: answer.id
    },
    include: db.User
  })

  if (validatorErrors.isEmpty()) {
    await comment.save()
    res.redirect(`/answers/${answerId}`)
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('singleAnswer', { csrfToken: req.csrfToken(), errors, userId, content, answer, comments })
  }
}))

//delete an answer
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const answerId = req.params.id
  const answer = await db.Answer.findByPk(answerId)
  if (answer) {
    await answer.destroy()
    res.json({ message: "Success" })
  } else {
    res.json({ message: "Failure" })
  }
}))

//delete a comment
// router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const answerId = req.params.id
//   const answer = await db.Answer.findByPk(answerId)
//   if (answer) {
//     await answer.destroy()
//     res.json({ message: "Success" })
//   } else {
//     res.json({ message: "Failure" })
//   }
// }))



module.exports = router;
