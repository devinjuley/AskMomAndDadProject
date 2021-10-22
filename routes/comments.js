const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');


//edit a comment, get form
router.get('/:id(\\d+)/edit', csrfProtection, async (req, res) => {
    const comment = await db.Comment.findByPk(req.params.id);
    res.render('edit-comment', { csrfToken: req.csrfToken(), comment})
  })

// edit a comment, post form
router.post('/:id(\\d+)/edit', csrfProtection, asyncHandler (async(req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const commentToUpdate = await db.Comment.findByPk(commentId, {
        include: db.Answer
    });

    const {content} = req.body


    const comment = {content}
    await commentToUpdate.update(comment);
    res.redirect(`/answers/${commentToUpdate.Answer.id}`);
  }))



// delete a comment
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const commentId = req.params.id
    const comment = await db.Comment.findByPk(commentId)
    if (comment) {
        await comment.destroy()
        res.json({ message: "Success" })
    } else {
        res.json({ message: "Failure" })
    }
}))

module.exports = router;
