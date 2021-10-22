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
    include: db.User,
    order: [['createdAt', 'DESC']]
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

//delete an answer using ajax on a single question page
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const answerId = req.params.id
  const answer = await db.Answer.findByPk(answerId)
  if (answer) {
    await answer.destroy()
    res.json({ message: "Success" })
  } else {
    res.json({ message: "Failure" })
  }
  res.redirec
}))

// delete an answer using form b/c don't want to display blank page
router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
  const answerId = req.params.id;
  const answer = await db.Answer.findByPk(answerId, {
    include: db.Question
  })
  await answer.destroy();
  res.redirect(`/questions/${answer.Question.id}`) // need to fix the reroute
}))



// editing an answer on a single question page
router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
  const answer = await db.Answer.findByPk(req.params.id);
  res.render('edit-answer', { csrfToken: req.csrfToken(), answer })
}))

// posting edited answer on single question page
router.post('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
  const answerId = parseInt(req.params.id, 10);
  const answerToUpdate = await db.Answer.findByPk(answerId, {
    include: db.Question
  })

  // const questionId = await db.Question.findByPk()


  console.log("this is answerId", answerId)

  const { content } = req.body

  const answer = { content }
  await answerToUpdate.update(answer)
  console.log("this is answer", answer)
  console.log("this is answerToUpdate", answerToUpdate.Question.id)
  res.redirect(`/answers/${answerId}`);
  // res.redirect('/questions')

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
