const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { loginUser, logoutUser, requireAuth } = require('../auth');

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